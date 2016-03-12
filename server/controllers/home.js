'use strict';

module.exports = function (app) {
	var HomeController = {
		get(req, res) {
			res.json({
				key: "value"
			});
		}
	};

	return HomeController;
};
