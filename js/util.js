//utility to get product object from an Id
var getProduct = function(itemId) {
	var foundItem;
	product.offerings.items.forEach(function(item) {
		if (item.id == itemId) {
			if (!item.hasOwnProperty("valid")) {
				foundItem = item;
			} else {
				if (item.valid.indexOf(state.schoolType) > -1) {
					foundItem = item;
				}
			}
		}
	});
	return foundItem;
};


//utility to decide if a solution is offered in a package
var isInPackage = function(package, itemId) {
	var itemIsInPackage = false;
	package.offerings.forEach(function(offering) {
		if (Array.isArray(offering)) {
			if (offering.indexOf(itemId) > -1) {
				itemIsInPackage = true
			}
		} else {
			if (offering == itemId) {
				itemIsInPackage = true;
			}
		}
	});
	return itemIsInPackage;
};

var getPriceForSolution = function(solution) {
	var price = 0;
	var schoolType = state.schoolType;
	var studentPriceGroup = state.studentPriceGroup;
	if (solution.prices && solution.prices.hasOwnProperty(schoolType)) {
		solution.prices[schoolType].forEach(function(pricePoint) {
			if (pricePoint.studentPriceGroup == studentPriceGroup) {
				if (pricePoint.hasOwnProperty("perStudentPrice")) {
					if (state.studentCount) {
						price = pricePoint.perStudentPrice * state.studentCount;
					} else {
						price = 0
					}
				} else {
					price = pricePoint.price;
				}
			}
		});
	}
	return price;
};

var getPriceForPackage = function(package) {
	var price = 0;
	package.prices.forEach(function(item) {
		if (item.studentPriceGroup == state.studentPriceGroup) {
			price = item.price
		}
	});
	return price;
};

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