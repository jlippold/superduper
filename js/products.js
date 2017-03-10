var product = {
	packages: {
		"High School": {
			items: [{
				name: "A: IO Classroom and Compass",
				offerings: ["classroom", "compass"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 7500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 8000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 8500
				}]
			}, {
				name: "B1: IO Classroom and Assessment",
				offerings: ["classroom", "assessment"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 9000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 10000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 11000
				}]
			}, {
				name: "B2: IO Classroom, Insights or Talent",
				offerings: ["classroom", ["insights", "talent"]],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 6500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 7000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 7500
				}]
			}, {
				name: "C1: IO Classroom, Compass and Assessment",
				offerings: ["classroom", "compass", "assessment"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 12500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 13500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 14500
				}]
			}, {
				name: "C2: IO Classroom, Compass, Insights or Talent",
				offerings: ["classroom", "compass", ["insights", "talent"]],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 10000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 10500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 11000
				}]
			}, {
				name: "D1: IO Classroom, Compass, Assessment, Insights or Talent",
				offerings: ["classroom", "compass", "assessment", ["insights", "talent"]],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 15000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 16500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 18000
				}]
			}, {
				name: "D2: IO Classroom, Compass, Insights and Talent",
				offerings: ["classroom", "compass", "insights", "talent"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 12500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 13500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 14500
				}]
			}, {
				name: "E: IO Classroom, Compass, Assessment, Insights, and Talent",
				offerings: ["classroom", "compass", "assessment", "insights", "talent"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 17500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 19500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 21500
				}]
			}, {
				name: "F: IO Classroom, Compass, Assessment, Insights, Talent and Quality Review",
				offerings: ["classroom", "compass", "assessment", "insights", "talent", "qualityReview"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 21500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 24500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 27500
				}]
			}]
		},
		"Elementary or Junior High School": {
			items: [{
				name: "A: IO Classroom and Insights",
				offerings: ["classroom", "insights"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 7500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 8000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 8500
				}]
			}, {
				name: "B1: IO Classroom and Talent",
				offerings: ["classroom", "talent"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 6500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 7000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 7500
				}]
			}, {
				name: "B2: IO Classroom and Assessment",
				offerings: ["classroom", "assessment"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 9000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 10000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 11000
				}]
			}, {
				name: "C1: IO Classroom, Insights and Talent",
				offerings: ["classroom", "insights", "talent"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 10000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 10500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 11000
				}]
			}, {
				name: "C2: IO Classroom, Insights and Assessment",
				offerings: ["classroom", "insights", "assessment"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 12500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 13500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 14500
				}]
			}, {
				name: "D1: IO Classroom, Insights, Assessment and Talent",
				offerings: ["classroom", "insights", "assessment", "talent"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 15000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 16500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 18000
				}]
			}, {
				name: "E: IO Classroom, Insights, Assessment, Talent and QR Prep",
				offerings: ["classroom", "insights", "assessment", "talent", "qualityReview"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: 19000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 21500
				}, {
					studentPriceGroup: "Over 1500 Students",
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
			subtitle: "FKA: Skedula, PupilPath, PADS",
			valid: ["High School", "Elementary or Junior High School"],
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 4250
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 4500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 5000
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 4250
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 4500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 5000
				}]
			}
		}, {
			id: "compass",
			name: "Compass",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School"],
			type: "solution",
			prices: {
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 4250
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 4500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 5000
				}]
			}
		}, {
			id: "insights",
			name: "IO Insights",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 4250
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 4500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 5000
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 3000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 3500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 4000
				}]
			}
		}, {
			id: "assessment",
			name: "IO Assessment",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 5500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 6500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 7500
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 5500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 6500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 7500
				}]
			}
		}, {
			id: "talent",
			name: "IO Talent",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 3000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 3500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 4000
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 3000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 3500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 4000
				}]
			}
		}, {
			id: "gradeCam",
			name: "GradeCam",
			modal: "#classroom",
			subtitle: "IO Assessment addon item",
			valid: ["High School", "Elementary or Junior High School"],
			depends: "assessment",
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1
				}]
			}
		}, {
			id: "k1",
			name: "K-1",
			modal: "#classroom",
			subtitle: "IO Assessment addon item",
			valid: ["High School", "Elementary or Junior High School"],
			depends: "assessment",
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}]
			}
		}, {
			id: "itemBank",
			name: "Item Bank",
			modal: "#classroom",
			subtitle: "IO Assessment addon item",
			valid: ["High School", "Elementary or Junior High School"],
			depends: "assessment",
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1.7
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1.7
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1.7
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1.7
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1.7
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1.7
				}]
			}
		}, {
			id: "quickChecks",
			name: "Quick Checks",
			modal: "#classroom",
			subtitle: "IO Assessment addon item",
			valid: ["High School", "Elementary or Junior High School"],
			depends: "assessment",
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}]
			}
		}, {
			id: "ngss",
			name: "NGSS",
			modal: "#classroom",
			subtitle: "IO Assessment addon item",
			valid: ["High School", "Elementary or Junior High School"],
			depends: "assessment",
			type: "solution",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 1.35
				}]
			}
		}, {
			id: "qualityReview",
			name: "Quality Review (QR) Prep",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "service",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 5500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 6500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 7500
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 5500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 6500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 7500
				}]
			}
		}, {
			id: "stars",
			name: "STARS Program",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "service",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 4000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 4500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 5000
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 4000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 4500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 5000
				}]
			}
		}, {
			id: "professionalDevelopmentx1",
			name: "1 Professional Development Session",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "withoutPackage",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 2000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 2000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 2000
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 2000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 2000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 2000
				}]
			}
		}, {
			id: "professionalDevelopmentx3",
			name: "Block of 3 Professional Development Sessions",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "withoutPackage",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 4500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 4500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 4500
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 4500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 4500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 4500
				}]
			}
		}, {
			id: "addedProfessionalDevelopmentx1",
			name: "1 Professional Development Session",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "withPackage",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 1500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 1500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 1500
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 1500
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 1500
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 1500
				}]
			}
		}, {
			id: "addedProfessionalDevelopmentx3",
			name: "Block of 3 Professional Development Sessions",
			modal: "#classroom",
			subtitle: null,
			valid: ["High School", "Elementary or Junior High School"],
			type: "withPackage",
			prices: {
				"Elementary or Junior High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 3000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 3000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 3000
				}],
				"High School": [{
					studentPriceGroup: "Under 650 Students",
					price: 3000
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: 3000
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: 3000
				}]
			}
		}]
	},
	subPackage: {
		"High School": {
			items: [{
				name: "Assessments A: Item Bank and Quick Check bundle",
				offerings: ["itemBank", "quickChecks"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 2.7
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 2.7
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 2.7
				}]
			}, {
				name: "Assessments C: Item Bank and NGSS",
				offerings: ["itemBank", "ngss"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 2.7
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 2.7
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 2.7
				}]
			}, {
				name: "Assessments D: Item Bank, Quick Checks and NGSS",
				offerings: ["itemBank", "quickChecks", "ngss"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 3.4
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 3.4
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 3.4
				}]
			}]
		},
		"Elementary or Junior High School": {
			items: [{
				name: "Assessments A: Item Bank and Quick Check bundle",
				offerings: ["itemBank", "quickChecks"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 2.7
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 2.7
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 2.7
				}]
			}, {
				name: "Assessments C: Item Bank and NGSS",
				offerings: ["itemBank", "ngss"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 2.7
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 2.7
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 2.7
				}]
			}, {
				name: "Assessments D: Item Bank, Quick Checks and NGSS",
				offerings: ["itemBank", "quickChecks", "ngss"],
				prices: [{
					studentPriceGroup: "Under 650 Students",
					price: null,
					perStudentPrice: 3.4
				}, {
					studentPriceGroup: "650 - 1500 Students",
					price: null,
					perStudentPrice: 3.4
				}, {
					studentPriceGroup: "Over 1500 Students",
					price: null,
					perStudentPrice: 3.4
				}]
			}]
		}
	}
};