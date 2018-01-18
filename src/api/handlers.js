var req_validations = require("./validations.js").request_validations()

module.exports.request_handlers = function() {
	return {
		get_experiment: function(experiment_id) {
			return new Promise(function(resolve, reject) {
				// Validate Params
				var valid = req_validations.validate_uuid(experiment_id)
				if (! valid) {
					reject(
						"Invalid uuid passed to get_experiment"
					)
				} else {
					var experiment = {
						"id": experiment_id,
						"expr": "percent_used > 40",
						"creation_time": new Date().toLocaleString(),
						"creator": "admin"
					}
					resolve(JSON.stringify(experiment))
				}
			})
		}
	}
}
