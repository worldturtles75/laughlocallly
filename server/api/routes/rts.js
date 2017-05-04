module.exports = function(app) {
  var controllers = require('../controllers/cntrl');
  
  // app.route('/')
  //   .get(controllers.something);
	
	app.route('/signup')
    .get(controllers.something)
    .post();

  app.route('/login')
    .get(controllers.something)
    .post();

  app.route('/events')
    .get(controllers.something)
    .post();


	 // login, singup, click on event, index route, 
}