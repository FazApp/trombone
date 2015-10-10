var mainRoutes = FlowRouter.group({
	name: 'main',
	triggersEnter: [function(context, redirect) {
		//if ( !Meteor.userId()) {
		//	FlowRouter.go('login');
		//}
	}]
});

mainRoutes.route('/loading', {
	action: function() {
		BlazeLayout.render("loadingLayout", {content: "loading"});
	}
});

mainRoutes.route('/', {
	action: function() {
		BlazeLayout.render("defaultLayout", {content: "feed"});
	}
});

mainRoutes.route('/complaint', {
	action: function() {
		BlazeLayout.render("defaultLayout", {content: "complaint"});
	}
});

mainRoutes.route('/logout', {
	action: function() {
		BlazeLayout.render("defaultLayout", {content: "logout"});
	}
});

mainRoutes.route('/signup', {
	action: function() {
		BlazeLayout.render("defaultLayout", {content: "signup"});
	}
});

mainRoutes.route('/signup-school', {
	action: function() {
		BlazeLayout.render("defaultLayout", {content: "signUpSchool"});
	}
});