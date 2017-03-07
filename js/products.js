var product = {
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
	offerings: {
		items: [{
			id: "classroom",
			name: "IO Classroom",
			modal: "#classroom",
			valid: ["HS", "K8"],
			type: "solution",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 4250
				}, {
					totalStudents: "from650to1500",
					price: 4500
				}, {
					totalStudents: "over1500",
					price: 5000
				}],
				"HS": [{
					totalStudents: "under650",
					price: 4250
				}, {
					totalStudents: "from650to1500",
					price: 4500
				}, {
					totalStudents: "over1500",
					price: 5000
				}]
			}
		}, {
			id: "compass",
			name: "Compass",
			modal: "#classroom",
			valid: ["HS"],
			type: "solution",
			prices: {
				"HS": [{
					totalStudents: "under650",
					price: 4250
				}, {
					totalStudents: "from650to1500",
					price: 4500
				}, {
					totalStudents: "over1500",
					price: 5000
				}]
			}
		}, {
			id: "insights",
			name: "IO Insights",
			modal: "#classroom",
			valid: ["HS", "K8"],
			type: "solution",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 4250
				}, {
					totalStudents: "from650to1500",
					price: 4500
				}, {
					totalStudents: "over1500",
					price: 5000
				}],
				"HS": [{
					totalStudents: "under650",
					price: 3000
				}, {
					totalStudents: "from650to1500",
					price: 3500
				}, {
					totalStudents: "over1500",
					price: 4000
				}]
			}
		}, {
			id: "assessment",
			name: "IO Assessment",
			modal: "#classroom",
			valid: ["HS", "K8"],
			type: "solution",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 5500
				}, {
					totalStudents: "from650to1500",
					price: 6500
				}, {
					totalStudents: "over1500",
					price: 7500
				}],
				"HS": [{
					totalStudents: "under650",
					price: 5500
				}, {
					totalStudents: "from650to1500",
					price: 6500
				}, {
					totalStudents: "over1500",
					price: 7500
				}]
			}
		}, {
			id: "talent",
			name: "IO Talent",
			modal: "#classroom",
			valid: ["HS", "K8"],
			type: "solution",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 3000
				}, {
					totalStudents: "from650to1500",
					price: 3500
				}, {
					totalStudents: "over1500",
					price: 4000
				}],
				"HS": [{
					totalStudents: "under650",
					price: 3000
				}, {
					totalStudents: "from650to1500",
					price: 3500
				}, {
					totalStudents: "over1500",
					price: 4000
				}]
			}
		}, {
			id: "gradeCam",
			name: "GradeCam",
			modal: "#classroom",
			valid: ["HS", "K8"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "k1",
			name: "K-1",
			modal: "#classroom",
			valid: ["HS", "K8"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "itemBank",
			name: "Item Bank",
			modal: "#classroom",
			valid: ["HS", "K8"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "quickChecks",
			name: "Quick Checks",
			modal: "#classroom",
			valid: ["HS", "K8"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "ngss",
			name: "NGSS",
			modal: "#classroom",
			valid: ["HS", "K8"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "qualityReview",
			name: "Quality Review (QR) Prep",
			modal: "#classroom",
			valid: ["HS", "K8"],
			type: "service",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 5500
				}, {
					totalStudents: "from650to1500",
					price: 6500
				}, {
					totalStudents: "over1500",
					price: 7500
				}],
				"HS": [{
					totalStudents: "under650",
					price: 5500
				}, {
					totalStudents: "from650to1500",
					price: 6500
				}, {
					totalStudents: "over1500",
					price: 7500
				}]
			}
		}, {
			id: "stars",
			name: "STARS Program",
			modal: "#classroom",
			valid: ["HS", "K8"],
			type: "service",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 4000
				}, {
					totalStudents: "from650to1500",
					price: 4500
				}, {
					totalStudents: "over1500",
					price: 5000
				}],
				"HS": [{
					totalStudents: "under650",
					price: 4000
				}, {
					totalStudents: "from650to1500",
					price: 4500
				}, {
					totalStudents: "over1500",
					price: 5000
				}]
			}
		}, {
			id: "professionalDevelopmentx1",
			name: "Professional Development Session",
			modal: "#classroom",
			valid: ["HS", "K8"],
			type: "service",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 2000
				}, {
					totalStudents: "from650to1500",
					price: 2000
				}, {
					totalStudents: "over1500",
					price: 2000
				}],
				"HS": [{
					totalStudents: "under650",
					price: 2000
				}, {
					totalStudents: "from650to1500",
					price: 2000
				}, {
					totalStudents: "over1500",
					price: 2000
				}]
			}
		}, {
			id: "professionalDevelopmentx3",
			name: "Block of 3 Professional Development",
			modal: "#classroom",
			valid: ["HS", "K8"],
			type: "service",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 4500
				}, {
					totalStudents: "from650to1500",
					price: 4500
				}, {
					totalStudents: "over1500",
					price: 4500
				}],
				"HS": [{
					totalStudents: "under650",
					price: 4500
				}, {
					totalStudents: "from650to1500",
					price: 4500
				}, {
					totalStudents: "over1500",
					price: 4500
				}]
			}
		}, {
			id: "addedProfessionalDevelopmentx1",
			name: "1 Professional Development Session",
			modal: "#classroom",
			type: "packageAdd",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 1500
				}, {
					totalStudents: "from650to1500",
					price: 1500
				}, {
					totalStudents: "over1500",
					price: 1500
				}],
				"HS": [{
					totalStudents: "under650",
					price: 1500
				}, {
					totalStudents: "from650to1500",
					price: 1500
				}, {
					totalStudents: "over1500",
					price: 1500
				}]
			}
		}, {
			id: "addedProfessionalDevelopmentx3",
			name: "Block of 3 Professional Development Sessions",
			modal: "#classroom",
			type: "packageAdd",
			prices: {
				"K8": [{
					totalStudents: "under650",
					price: 3000
				}, {
					totalStudents: "from650to1500",
					price: 3000
				}, {
					totalStudents: "over1500",
					price: 3000
				}],
				"HS": [{
					totalStudents: "under650",
					price: 3000
				}, {
					totalStudents: "from650to1500",
					price: 3000
				}, {
					totalStudents: "over1500",
					price: 3000
				}]
			}
		}]
	}
};