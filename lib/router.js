FlowRouter.route('/loading', {
  action: function() {
    BlazeLayout.render("loadingLayout", {content: "loading"});
  }
});


FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("defaultLayout", {content: "feed"});
  }
});

FlowRouter.route('/complaint', {
  action: function() {
    BlazeLayout.render("defaultLayout", {content: "complaint"});
  }
});

FlowRouter.route('/logout', {
  action: function() {
    BlazeLayout.render("defaultLayout", {content: "logout"});
  }
});

FlowRouter.route('/signup', {
  action: function() {
    BlazeLayout.render("defaultLayout", {content: "signup"});
  }
});

FlowRouter.route('/signup-school', {
  action: function() {
    BlazeLayout.render("defaultLayout", {content: "signUpSchool"});
  }
});

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("defaultLayout", {content: "feed"});
  }
});

FlowRouter.route()

Tracker.autorun(function () { 
	if (! Meteor.userId()) {
		FlowRouter.go('login')
	}
});