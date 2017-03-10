var vm;

/* 
	https://ioeducation-web.s3.amazonaws.com/marketing-email/pricing_nyc_2017_2018.pdf
	http://www.datacation.com/register/NYCDOE/
*/

var state = {
	schoolType: "High School",
	studentPriceGroup: "Under 650 Students",
	studentCount: null,
	userInfo: {
		DBN: "",
		firstName: "",
		lastName: "",
		email: "",
		telephone: "",
		principal: "",
	},
	solutions: [], //selected products
	package: null, //selected package
	offerings: [], //possible products for package
	cost: "",
	checkout: false
}

$(document).ready(function() {

	var SchoolOptions = Vue.extend({
		template: '#school-options-template',
		data: function() {
			return {
				data: state
			}
		},
		methods: {
			setStudentPriceGroup: function() {
				state.studentPriceGroup = "Under 650 Students"
				if (state.studentCount >= 1500) {
					state.studentPriceGroup = "Over 1500 Students";
				} else if (state.studentCount >= 650) {
					state.studentPriceGroup = "650 - 1500 Students"
				}
			}
		}
	});

	var UserForm = Vue.extend({
		template: '#user-form-template',
		data: function() {
			return {
				data: state
			}
		},
		methods: {
			submitOrder: function() {
				var submission = {
					userInfo: state.userInfo,
					schoolType: state.schoolType,
					studentPriceGroup: state.studentPriceGroup,
					studentCount: state.studentCount,
					package: state.package,
					cost: state.cost,
					solutions: state.solutions.slice()
				};

				alert("Send server form email: \n\n" + JSON.stringify(submission, null, 4));
			}
		}
	});

	var Cart = Vue.extend({
		template: '#cart-template',
		data: function() {
			return {
				data: state
			}
		},
		computed: {
			listCart: function() {
				var items = [];
				var totalCost = 0;
				var itemPrice;
				if (state.package) {
					itemPrice = getPriceForPackage(state.package);
					items.push({
						name: "Package " + state.package.name,
						price: itemPrice.formatMoney(0)
					})
					totalCost += itemPrice;
				}

				state.solutions.forEach(function(itemId) {
					var item = getProduct(itemId);
					if (item) {
						itemPrice = getPriceForSolution(item);

						// void price if solution is from a package
						if (state.package && isInPackage(state.package, itemId)) {
							items.push({
								name: "&nbsp;&bullet;&nbsp;" + item.name,
								price: "-"
							})
						} else {
							items.push({
								name: item.name,
								price: itemPrice.formatMoney(0)
							});
							totalCost += itemPrice;
						}
					}
				});

				state.cost = totalCost.formatMoney(0);
				return items;
			}
		}
	});

	var CartButton = Cart.extend({
		template: '#cart-button-template',
		data: function() {
			return {
				data: state
			}
		},
		methods: {
			checkout: function() {
				state.checkout = true;
				setTimeout(function() {
					$("html, body").animate({ scrollTop: "0px" });
				}, 1);
			}
		}
	});

	var PackageList = Vue.extend({
		template: '#packages-template',
		data: function() {
			return {
				data: product.packages
			}
		},
		mounted: function() {
			$("table.packages input:first").click();
		},
		computed: {
			filteredList: function() {
				var schoolType = state.schoolType;
				var list = this.data[schoolType].items.slice();
				list.unshift({
					name: "Build Your Own Package",
					prices: "-"
				});
				return list;
			}
		},
		methods: {
			priceForItem: function(prices) {
				if (Array.isArray(prices)) {
					var studentPriceGroup = state.studentPriceGroup;
					var price;
					prices.forEach(function(pricePoint) {
						if (pricePoint.studentPriceGroup == studentPriceGroup) {
							price = pricePoint.price;
						}
					});
					return price.formatMoney(0);
				} else {
					return prices;
				}
			},
			selectPackage: function(thisPackage) {

				var solutions = [];
				var offerings = [];

				if (thisPackage.offerings) {
					// loop each offering in the package and
					// build a list of auto chosen solutions
					// and choices items (OR's)
					thisPackage.offerings.forEach(function(offering) {
						if (Array.isArray(offering)) { // OR 
							offering.forEach(function(itemId, idx) {
								var item = getProduct(itemId);
								if (item) {
									item.selected = (idx == 0);
									item.disabled = false;
									item.radio = true;
									if (idx == 0) {
										solutions.push(itemId);
									}
									offerings.push(item);
								}
							});
						} else {
							var itemId = offering;
							var item = getProduct(itemId);
							if (item) {
								item.selected = true;
								item.disabled = true;
								item.radio = false;
								solutions.push(itemId);
								offerings.push(item);
							}
						}
					});

					//add in any optional items
					product.offerings.items.forEach(function(offering) {
						var itemId = offering.id;
						if (!isInPackage(thisPackage, itemId)) {
							var item = getProduct(itemId);
							if (item) {
								item.selected = false;
								item.radio = false;
								item.disabled = false;
								offerings.push(item);
							}

						}
					});

					state.package = thisPackage;
					state.solutions = solutions.slice();
					state.offerings = offerings.slice();

				} else { //this isn't a package, it's build your own
					state.package = null;
					state.solutions = [];
					var offerings = product.offerings.items.filter(function(item) {
						return item.valid && item.valid.indexOf(state.schoolType) > -1
					});
					offerings.forEach(function(item) {
						item.disabled = false;
						item.radio = false;
						item.selected = false;
					});
					state.offerings = offerings.slice();
					if (state.checkout) {
						state.checkout = (state.solutions.length > 0);
					}
				}
				//select the first option avaliable
				setTimeout(function() {
					$("table.solutions input[type='radio']:first").trigger("click");
				}, 1);
			}
		}
	});

	var SolutionsList = Vue.extend({
		template: '#solutions-template',
		data: function() {
			return state;
		},
		computed: {
			getServices: function() {
				return state.offerings.filter(function(item) {
					var valid = false;
					if (item.valid.indexOf(state.schoolType) > -1) {
						if (item.type == "service") {
							valid = true;
						}
						if (item.type == "withoutPackage" && state.package == null) {
							valid = true;
						}
						if (state.package && item.type == "withPackage") {
							valid = true;
						}

					}
					return valid;
				});
			},
			getSolutions: function() {
				return state.offerings.filter(function(item) {
					var valid = false;
					if (item.valid.indexOf(state.schoolType) > -1) {
						if (item.type == "solution") {
							valid = true;
							if (item.hasOwnProperty("depends") &&
								state.solutions.indexOf(item.depends) == -1) {
								valid = false
							}
						}
					}
					return valid;
				});
			}
		},
		updated: function() {
			$("a.modalTrigger").bind("click", function() {
				var target = $(this).attr("href");
				console.log(target);
				$(target).modal('show');
				return false;
			});
		},
		methods: {
			checkStatus: function(item) {
				return state.solutions.indexOf(item.id) > -1
			},
			showState: function(item) {
				console.log(state.solutions);
			},
			selectOption: function(item) {
				var solutions = state.solutions.slice();
				state.package.offerings.forEach(function(options) {
					if (Array.isArray(options)) {
						options.forEach(function(offering) {
							var index = solutions.indexOf(offering);
							if (index > -1) {
								solutions.splice(index, 1);
							}
							if (item.id == offering) {
								solutions.push(item.id);
							}
						});
					}
				});
				state.solutions = solutions.slice();
				if (state.checkout) {
					state.checkout = (state.solutions.length > 0);
				}
			},
			priceForItem: function(item) {
				var studentPriceGroup = state.studentPriceGroup;
				var schoolType = state.schoolType;
				var price, label;
				if (item.prices.hasOwnProperty(schoolType)) {
					item.prices[schoolType].forEach(function(pricePoint) {
						if (pricePoint.studentPriceGroup == studentPriceGroup) {
							price = pricePoint.price;
							if (pricePoint.hasOwnProperty("perStudentPrice")) {
								if (state.studentCount) {
									price = pricePoint.perStudentPrice * state.studentCount;
									label = price.formatMoney(0) + " at <br />" + pricePoint.perStudentPrice.formatMoney(2) + "/student"
								} else {
									label = pricePoint.perStudentPrice.formatMoney(2) + " <br /> per student"
								}
							}
						}
					})
				}
				return label || price.formatMoney(0);
			},
		}
	});

	vm = new Vue({
		el: '#app',
		components: {
			'school-options': SchoolOptions,
			'solutions-list': SolutionsList,
			'package-list': PackageList,
			'user-form': UserForm,
			'cart': Cart,
			'cart-button': CartButton
		}
	});

});