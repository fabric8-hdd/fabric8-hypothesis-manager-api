var req_handlers = require("./handlers.js").request_handlers()

var appRouter = function(app) {
	app.get("/api/v1.0/experiments/:experiment_id", function(req , res){
		console.log("The request body is: ", req.params.experiment_id)
		req_handlers.get_experiment(req.params.experiment_id).then(function (result) {
			res.status(200)
			res.send(String(result))
		}).catch(function(err) {
			console.log("Error "+ err.toString())
			// ToDo: Fix Http Status code to non 200
			res.status(400)
			res.send(err.toString())
		})
	}),

	app.get("/api/v1.0/readiness", function(req , res){
		res.status(200)
		res.end()
	}),

	app.get("/api/v1.0/liveness", function(req , res){
		res.status(200)
		res.end()
	})
}

module.exports = appRouter
