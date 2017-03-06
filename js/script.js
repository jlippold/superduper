var vm;

/* 
	https://ioeducation-web.s3.amazonaws.com/marketing-email/pricing_nyc_2017_2018.pdf
	http://www.datacation.com/register/NYCDOE/
*/

var state = {
	user: {
		schoolType: "HS",
		totalStudents: "under650",
		solutions: []
	},
	packages: {
		"HS": {
			items: [{
				name: "IO Classroom and Compass",
				offerings: ["classroom", "compass"],
				prices: [{
					totalStudents: "under650",
					price: 7500
				}, {
					totalStudents: "from650to1500",
					price: 8000
				}, {
					totalStudents: "over1500",
					price: 8500
				}]
			}, {
				name: "IO Classroom and Assessment, Insights or Talent",
				offerings: ["classroom", ["assessment", "insights", "talent"]],
				prices: [{
					totalStudents: "under650",
					price: 9000
				}, {
					totalStudents: "from650to1500",
					price: 10000
				}, {
					totalStudents: "over1500",
					price: 11000
				}]
			}, {
				name: "IO Classroom, Compass and Assessment",
				offerings: ["classroom", "compass", "assessment"],
				prices: [{
					totalStudents: "under650",
					price: 12500
				}, {
					totalStudents: "from650to1500",
					price: 13500
				}, {
					totalStudents: "over1500",
					price: 14500
				}]
			}, {
				name: "IO Classroom, Compass and Insights or Talent",
				offerings: ["classroom", "compass", ["insights", "talent"]],
				prices: [{
					totalStudents: "under650",
					price: 10000
				}, {
					totalStudents: "from650to1500",
					price: 10500
				}, {
					totalStudents: "over1500",
					price: 11000
				}]
			}, {
				name: "IO Classroom, Compass, Assessment and Insights or Talent",
				offerings: ["classroom", "compass", "assessment", ["insights", "talent"]],
				prices: [{
					totalStudents: "under650",
					price: 15000
				}, {
					totalStudents: "from650to1500",
					price: 16500
				}, {
					totalStudents: "over1500",
					price: 18000
				}]
			}, {
				name: "IO Classroom, Compass, Insights and Talent",
				offerings: ["classroom", "compass", "insights", "talent"],
				prices: [{
					totalStudents: "under650",
					price: 12500
				}, {
					totalStudents: "from650to1500",
					price: 13500
				}, {
					totalStudents: "over1500",
					price: 14500
				}]
			}, {
				name: "IO Classroom, Compass, Assessment, Insights and Talent",
				offerings: ["classroom", "compass", "assessment", "insights", "talent"],
				prices: [{
					totalStudents: "under650",
					price: 17500
				}, {
					totalStudents: "from650to1500",
					price: 19500
				}, {
					totalStudents: "over1500",
					price: 21500
				}]
			}, {
				name: "IO Classroom, Compass, Assessment, Insights, Talent and Quality Review",
				offerings: ["classroom", "compass", "assessment", "insights", "talent", "qualityReview"],
				prices: [{
					totalStudents: "under650",
					price: 21500
				}, {
					totalStudents: "from650to1500",
					price: 24500
				}, {
					totalStudents: "over1500",
					price: 27500
				}]
			}]
		},
		"K8": {
			items: [{
				name: "IO Classroom and Insights",
				offerings: ["classroom", "insights"],
				prices: [{
					totalStudents: "under650",
					price: 7500
				}, {
					totalStudents: "from650to1500",
					price: 8000
				}, {
					totalStudents: "over1500",
					price: 8500
				}]
			}, {
				name: "IO Classroom and Talent",
				offerings: ["classroom", "talent"],
				prices: [{
					totalStudents: "under650",
					price: 6500
				}, {
					totalStudents: "from650to1500",
					price: 7000
				}, {
					totalStudents: "over1500",
					price: 7500
				}]
			}, {
				name: "IO Classroom and Assessment",
				offerings: ["classroom", "assessment"],
				prices: [{
					totalStudents: "under650",
					price: 10000
				}, {
					totalStudents: "from650to1500",
					price: 11000
				}, {
					totalStudents: "over1500",
					price: 12500
				}]
			}, {
				name: "IO Classroom, Insights and Talent",
				offerings: ["classroom", "insights", "talent"],
				prices: [{
					totalStudents: "under650",
					price: 10000
				}, {
					totalStudents: "from650to1500",
					price: 10500
				}, {
					totalStudents: "over1500",
					price: 11000
				}]
			}, {
				name: "IO Classroom, Insights and Assessment",
				offerings: ["classroom", "insights", "assessment"],
				prices: [{
					totalStudents: "under650",
					price: 12500
				}, {
					totalStudents: "from650to1500",
					price: 13500
				}, {
					totalStudents: "over1500",
					price: 14500
				}]
			}, {
				name: "IO Classroom, Insights, Assessment and Talent",
				offerings: ["classroom", "insights", "assessment", "talent"],
				prices: [{
					totalStudents: "under650",
					price: 15000
				}, {
					totalStudents: "from650to1500",
					price: 16500
				}, {
					totalStudents: "over1500",
					price: 18000
				}]
			}, {
				name: "IO Classroom, Insights, Assessment, Talent and QR Prep",
				offerings: ["classroom", "insights", "assessment", "talent", "qualityReview"],
				prices: [{
					totalStudents: "under650",
					price: 19000
				}, {
					totalStudents: "from650to1500",
					price: 21500
				}, {
					totalStudents: "over1500",
					price: 24000
				}]
			}]
		}
	},
	offerings: [{
		id: "classroom",
		name: "IO Classroom",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "solution"
	}, {
		id: "compass",
		name: "Compass",
		modal: "#classroom",
		valid: ["HS"],
		type: "solution"
	}, {
		id: "insights",
		name: "IO Insights",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "solution"
	}, {
		id: "assessment",
		name: "IO Assessment",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "solution"
	}, {
		id: "talent",
		name: "IO Talent",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "solution"
	}, {
		id: "gradeCam",
		name: "GradeCam",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "k1",
		name: "K-1",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "itemBank",
		name: "Item Bank",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "quickChecks",
		name: "Quick Checks",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "ngss",
		name: "NGSS",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "qualityReview",
		name: "Quality Review (QR) Prep",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "service"
	}, {
		id: "stars",
		name: "STARS Program",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "service"
	}, {
		id: "professionalDevelopmentx1",
		name: "Professional Development Session",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "service"
	}, {
		id: "professionalDevelopmentx3",
		name: "Block of 3 Professional Development",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "service"
	}, {
		id: "addedProfessionalDevelopmentx1",
		name: "1 Professional Development Session",
		modal: "#classroom",
		type: "packageAdd"
	}, {
		id: "addedProfessionalDevelopmentx3",
		name: "Block of 3 Professional Development Sessions",
		modal: "#classroom",
		type: "packageAdd"
	}]
}

$(document).ready(function() {

	var SchoolOptions = Vue.extend({
		template: '#school-options-template',
		data: function() {
			return {
				data: state.user
			}
		}
	});

	var PackageList = Vue.extend({
		template: '#packages-template',
		data: function() {
			return {
				data: state.packages
			}
		},
		computed: {
			filteredList: function() {
				var schoolType = state.user.schoolType;
				return this.data[schoolType].items.slice();
			}
		},
		methods: {
			priceForItem: function(prices) {
				var totalStudents = state.user.totalStudents;
				var price;
				prices.forEach(function(pricePoint) {
					if (pricePoint.totalStudents == totalStudents) {
						price = pricePoint.price;
					}
				})
				return price.formatMoney(0);
			}
		}
	});

	var SolutionsList = Vue.extend({
		template: '#solutions-template',
		data: function() {
			return {
				data: {
					offerings: state.offerings,
					solutions: []
				}
			}
		},
		computed: {
			filteredList: function() {
				return this.data.offerings.filter(function(item) {
					return item.type == "solution" && item.valid.indexOf(state.user.schoolType) > -1
				});
			}
		},
		methods: {
			//this is wrong
			selectSolutions: function() {
				state.user.solutions = this.data.solutions.slice()
			}
		}
	});

	var ServicesList = Vue.extend({
		template: '#services-template',
		data: function() {
			return {
				data: state.offerings
			}
		},
		computed: {
			filteredList: function() {
				return this.data.filter(function(item) {
					return item.type == "service" && item.valid.indexOf(state.user.schoolType) > -1
				});
			}
		}
	});
	vm = new Vue({
		el: '#app',
		components: {
			'school-options': SchoolOptions,
			'solutions-list': SolutionsList,
			'services-list': ServicesList,
			'package-list': PackageList
		}
	});

});

Number.prototype.formatMoney = function(c, d, t) {
	// http://stackoverflow.com/a/149099
	var n = this,
		c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "," : t,
		s = n < 0 ? "-" : "",
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return "$" + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
		(c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};