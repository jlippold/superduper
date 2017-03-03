var vm;

var state = {
	user: {
		schoolType: "HS",
		totalStudents: "under650",
		selections: []
	},
	packages: [{
		solutions: ["solution1", "solution2"],
		services: [],
		basePrice: 7500,
		schoolType: "K8",
		totalStudents: "under650"
	}, {

		solutions: ["solution1", "solution2"],
		services: [],
		basePrice: 8000,
		schoolType: "HS",
		totalStudents: "under650"
	}],
	offerings: [{
		id: "solution1",
		name: "IO Classroom",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "solution"
	}, {
		id: "solution10",
		name: "Compass",
		modal: "#classroom",
		valid: ["HS"],
		type: "solution"
	}, {
		id: "solution2",
		name: "IO Insights",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "solution"
	}, {
		id: "solution3",
		name: "IO Assessment",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "solution"
	}, {
		id: "solution4",
		name: "IO Talent",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "solution"
	}, {
		id: "solution5",
		name: "GradeCam",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "solution6",
		name: "K-1",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "solution7",
		name: "Item Bank",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "solution8",
		name: "Quick Checks",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "solution9",
		name: "NGSS",
		modal: "#classroom",
		valid: ["HS", "K8"],
		depends: ["solution3"],
		type: "solution"
	}, {
		id: "service1",
		name: "Quality Review (QR) Prep",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "service"
	}, {
		id: "service2",
		name: "STARS Program",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "service"
	}, {
		id: "service3",
		name: "Professional Development Session",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "service"
	}, {
		id: "service4",
		name: "Block of 3 Professional Development",
		modal: "#classroom",
		valid: ["HS", "K8"],
		type: "service"
	}, {
		id: "pd1",
		name: "1 Professional Development Session",
		modal: "#classroom",
		type: "packageAdd"
	}, {
		id: "pd2",
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
				return this.data.filter(function(item) {
					return item.schoolType == state.user.schoolType
				});
			}
		}
	});

	var SolutionsList = Vue.extend({
		template: '#solutions-template',
		data: function() {
			return {
				data: state.offerings
			}
		},
		computed: {
			filteredList: function() {
				return this.data.filter(function(item) {
					return item.type == "solution" && item.valid.indexOf(state.user.schoolType) > -1
				});
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