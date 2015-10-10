Router.configure({
	layoutTemplate: 'defaultLayout',
	loadingLayout: 'loadingLayout'
});


Router.map(function(){

	this.route('feed', {
		path:'/'
	});

	this.route('complaint', {
		path: '/complaint'
	});

	this.route('login', {
		path:'/login'
	});

	this.route('logout', {
		path:'/logout'
	});

	this.route('singup', {
		path:'/singup'
	});

	this.route('singup.school', {
		path:'/singup/school'
	});

});


Router.onBeforeAction(function(pause) {
	if (! Meteor.userId()) {
		this.render('login');
		pause();
	}
});