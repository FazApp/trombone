Template.login.events({
	'click #login-facebook': function(){
		Meteor.loginWithFacebook(function( error ){
			if( !error ){
				var data = Meteor.user().services.facebook;
				FlowRouter.go( Session.get('afterLogin') );
			}
		});
	}
});