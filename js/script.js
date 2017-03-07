var vm;

/* 
	https://ioeducation-web.s3.amazonaws.com/marketing-email/pricing_nyc_2017_2018.pdf
	http://www.datacation.com/register/NYCDOE/
*/

var state = {
	schoolType: "HS",
	totalStudents: "under650",
	solutions: [], //selected products
	package: null, //selected package
	offerings: [] //possible products for package
}

$(document).ready(function() {

	var SchoolOptions = Vue.extend({
		template: '#school-options-template',
		data: function() {
			return {
				data: state
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
					name: "Build Your own package",
					prices: "-"
				});
				return list;
			}
		},
		methods: {
			priceForItem: function(prices) {
				if (Array.isArray(prices)) {
					var totalStudents = state.totalStudents;
					var price;
					prices.forEach(function(pricePoint) {
						if (pricePoint.totalStudents == totalStudents) {
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
								item.selected = (idx == 0);
								item.disabled = false;
								item.radio = true;
								if (idx == 0) {
									solutions.push(itemId);
								}
								offerings.push(item);
							});
						} else {
							var itemId = offering;
							var item = getProduct(itemId);
							item.selected = true;
							item.disabled = true;
							item.radio = false;
							solutions.push(itemId);
							offerings.push(item);
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
							} else {
								console.log(itemId);
							}
							offerings.push(item);
						}
					});

					state.package = thisPackage;
					state.solutions = solutions.slice();
					state.offerings = offerings.slice();

				} else { //this isn't a package, it's build your own
					state.package = null;
					state.solutions = [];
					state.offerings = product.offerings.items.filter(function(item) {
						return item.valid && item.valid.indexOf(state.schoolType) > -1
					});
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
					return item.type == "service" && item.valid.indexOf(state.schoolType) > -1
				});
			},
			getSolutions: function() {
				return state.offerings.filter(function(item) {
					return item.type == "solution" && item.valid.indexOf(state.schoolType) > -1
				});
			}
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
				console.log(state.solutions);
			},
			priceForItem: function(item) {
				var totalStudents = state.totalStudents;
				var schoolType = state.schoolType;
				var price;
				if (item.prices.hasOwnProperty(schoolType)) {
					item.prices[schoolType].forEach(function(pricePoint) {
						if (pricePoint.totalStudents == totalStudents) {
							price = pricePoint.price;
						}
					})
				}
				return price ? price.formatMoney(0) : "N/A";
			},
		}
	});

	vm = new Vue({
		el: '#app',
		components: {
			'school-options': SchoolOptions,
			'solutions-list': SolutionsList,
			'package-list': PackageList
		}
	});

});