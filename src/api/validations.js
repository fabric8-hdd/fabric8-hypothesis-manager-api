var validator = require("validator")

module.exports.request_validations = function() {
	return {
		validate_uuid: function(uuid_str) {
			return validator.isUUID(uuid_str, 4)
		}
	}
}
