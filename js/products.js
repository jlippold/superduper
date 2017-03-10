var product = {
	packages: {
		"High School": {
			items: [{
				name: "A: IO Classroom and Compass",
				offerings: ["classroom", "compass"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 7500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 8000
				}, {
					totalStudents: "Over 1500 Students",
					price: 8500
				}]
			}, {
				name: "B1: IO Classroom and Assessment",
				offerings: ["classroom", "assessment"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 9000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 10000
				}, {
					totalStudents: "Over 1500 Students",
					price: 11000
				}]
			}, {
				name: "B2: IO Classroom, Insights or Talent",
				offerings: ["classroom", ["insights", "talent"]],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 6500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 7000
				}, {
					totalStudents: "Over 1500 Students",
					price: 7500
				}]
			}, {
				name: "C1: IO Classroom, Compass and Assessment",
				offerings: ["classroom", "compass", "assessment"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 12500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 13500
				}, {
					totalStudents: "Over 1500 Students",
					price: 14500
				}]
			}, {
				name: "C2: IO Classroom, Compass, Insights or Talent",
				offerings: ["classroom", "compass", ["insights", "talent"]],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 10000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 10500
				}, {
					totalStudents: "Over 1500 Students",
					price: 11000
				}]
			}, {
				name: "D1: IO Classroom, Compass, Assessment, Insights or Talent",
				offerings: ["classroom", "compass", "assessment", ["insights", "talent"]],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 15000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 16500
				}, {
					totalStudents: "Over 1500 Students",
					price: 18000
				}]
			}, {
				name: "D2: IO Classroom, Compass, Insights and Talent",
				offerings: ["classroom", "compass", "insights", "talent"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 12500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 13500
				}, {
					totalStudents: "Over 1500 Students",
					price: 14500
				}]
			}, {
				name: "E: IO Classroom, Compass, Assessment, Insights, and Talent",
				offerings: ["classroom", "compass", "assessment", "insights", "talent"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 17500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 19500
				}, {
					totalStudents: "Over 1500 Students",
					price: 21500
				}]
			}, {
				name: "F: IO Classroom, Compass, Assessment, Insights, Talent and Quality Review",
				offerings: ["classroom", "compass", "assessment", "insights", "talent", "qualityReview"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 21500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 24500
				}, {
					totalStudents: "Over 1500 Students",
					price: 27500
				}]
			}]
		},
		"Elementary or Junior High School": {
			items: [{
				name: "A: IO Classroom and Insights",
				offerings: ["classroom", "insights"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 7500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 8000
				}, {
					totalStudents: "Over 1500 Students",
					price: 8500
				}]
			}, {
				name: "B1: IO Classroom and Talent",
				offerings: ["classroom", "talent"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 6500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 7000
				}, {
					totalStudents: "Over 1500 Students",
					price: 7500
				}]
			}, {
				name: "B2: IO Classroom and Assessment",
				offerings: ["classroom", "assessment"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 9000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 10000
				}, {
					totalStudents: "Over 1500 Students",
					price: 11000
				}]
			}, {
				name: "C1: IO Classroom, Insights and Talent",
				offerings: ["classroom", "insights", "talent"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 10000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 10500
				}, {
					totalStudents: "Over 1500 Students",
					price: 11000
				}]
			}, {
				name: "C2: IO Classroom, Insights and Assessment",
				offerings: ["classroom", "insights", "assessment"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 12500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 13500
				}, {
					totalStudents: "Over 1500 Students",
					price: 14500
				}]
			}, {
				name: "D1: IO Classroom, Insights, Assessment and Talent",
				offerings: ["classroom", "insights", "assessment", "talent"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 15000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 16500
				}, {
					totalStudents: "Over 1500 Students",
					price: 18000
				}]
			}, {
				name: "E: IO Classroom, Insights, Assessment, Talent and QR Prep",
				offerings: ["classroom", "insights", "assessment", "talent", "qualityReview"],
				prices: [{
					totalStudents: "Under 650 Students",
					price: 19000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 21500
				}, {
					totalStudents: "Over 1500 Students",
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
			valid: ["High School", "Elementary or Junior High School"],
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 4250
				}, {
					totalStudents: "650 - 1500 Students",
					price: 4500
				}, {
					totalStudents: "Over 1500 Students",
					price: 5000
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 4250
				}, {
					totalStudents: "650 - 1500 Students",
					price: 4500
				}, {
					totalStudents: "Over 1500 Students",
					price: 5000
				}]
			}
		}, {
			id: "compass",
			name: "Compass",
			modal: "#classroom",
			valid: ["High School"],
			type: "solution",
			prices: {
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 4250
				}, {
					totalStudents: "650 - 1500 Students",
					price: 4500
				}, {
					totalStudents: "Over 1500 Students",
					price: 5000
				}]
			}
		}, {
			id: "insights",
			name: "IO Insights",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 4250
				}, {
					totalStudents: "650 - 1500 Students",
					price: 4500
				}, {
					totalStudents: "Over 1500 Students",
					price: 5000
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 3000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 3500
				}, {
					totalStudents: "Over 1500 Students",
					price: 4000
				}]
			}
		}, {
			id: "assessment",
			name: "IO Assessment",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 5500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 6500
				}, {
					totalStudents: "Over 1500 Students",
					price: 7500
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 5500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 6500
				}, {
					totalStudents: "Over 1500 Students",
					price: 7500
				}]
			}
		}, {
			id: "talent",
			name: "IO Talent",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 3000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 3500
				}, {
					totalStudents: "Over 1500 Students",
					price: 4000
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 3000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 3500
				}, {
					totalStudents: "Over 1500 Students",
					price: 4000
				}]
			}
		}, {
			id: "gradeCam",
			name: "GradeCam",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "k1",
			name: "K-1",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "itemBank",
			name: "Item Bank",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "quickChecks",
			name: "Quick Checks",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "ngss",
			name: "NGSS",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			depends: ["solution3"],
			type: "solution",
			prices: {}
		}, {
			id: "qualityReview",
			name: "Quality Review (QR) Prep",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "service",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 5500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 6500
				}, {
					totalStudents: "Over 1500 Students",
					price: 7500
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 5500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 6500
				}, {
					totalStudents: "Over 1500 Students",
					price: 7500
				}]
			}
		}, {
			id: "stars",
			name: "STARS Program",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "service",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 4000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 4500
				}, {
					totalStudents: "Over 1500 Students",
					price: 5000
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 4000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 4500
				}, {
					totalStudents: "Over 1500 Students",
					price: 5000
				}]
			}
		}, {
			id: "professionalDevelopmentx1",
			name: "1 Professional Development Session",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "withoutPackage",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 2000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 2000
				}, {
					totalStudents: "Over 1500 Students",
					price: 2000
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 2000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 2000
				}, {
					totalStudents: "Over 1500 Students",
					price: 2000
				}]
			}
		}, {
			id: "professionalDevelopmentx3",
			name: "Block of 3 Professional Development Sessions",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "withoutPackage",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 4500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 4500
				}, {
					totalStudents: "Over 1500 Students",
					price: 4500
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 4500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 4500
				}, {
					totalStudents: "Over 1500 Students",
					price: 4500
				}]
			}
		}, {
			id: "addedProfessionalDevelopmentx1",
			name: "1 Professional Development Session",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "withPackage",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 1500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 1500
				}, {
					totalStudents: "Over 1500 Students",
					price: 1500
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 1500
				}, {
					totalStudents: "650 - 1500 Students",
					price: 1500
				}, {
					totalStudents: "Over 1500 Students",
					price: 1500
				}]
			}
		}, {
			id: "addedProfessionalDevelopmentx3",
			name: "Block of 3 Professional Development Sessions",
			modal: "#classroom",
			valid: ["High School", "Elementary or Junior High School"],
			type: "withPackage",
			prices: {
				"Elementary or Junior High School": [{
					totalStudents: "Under 650 Students",
					price: 3000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 3000
				}, {
					totalStudents: "Over 1500 Students",
					price: 3000
				}],
				"High School": [{
					totalStudents: "Under 650 Students",
					price: 3000
				}, {
					totalStudents: "650 - 1500 Students",
					price: 3000
				}, {
					totalStudents: "Over 1500 Students",
					price: 3000
				}]
			}
		}]
	}
};