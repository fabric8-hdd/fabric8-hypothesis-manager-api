var req_handlers = require("../src/api/handlers.js").request_handlers(),
	chai = require("chai"),
	chaiHTTP = require("chai-http"),
	eventually = require("chai-as-promised")
	should = chai.should()
	assert = chai.assert;

chai.use(chaiHTTP)
chai.use(eventually)


describe("Validate the handlers", function () {

	describe("Test get_experiment", () => {
		it("should be fulfilled", function () {
			var test_uuid = "a4e1b0cf-2a08-4297-83f3-4db896d7e0fb";
			return req_handlers.get_experiment(test_uuid).should.eventually.be.fulfilled
		})
	})

	describe("Test get_experiment", () => {
		it("should equal rejected", function () {
			var invalid_uuid = ""
			return req_handlers.get_experiment(invalid_uuid).should.eventually.be.rejected
		})
	})
})