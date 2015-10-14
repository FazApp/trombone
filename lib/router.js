var mainRoutes = FlowRouter.group({
	name: 'main',
	triggersEnter: [function(context, redirect) {
		
		/*if( !Meteor.userId() && context.path != 'login' ){
			Session.set('afterLogin', context.path);
			FlowRouter.go('/login');
		}*/

		if( !Session.get('position') || !Session.get('locale') ){
			
			navigator.geolocation.getCurrentPosition(function( info ){
				
				var position = {
					lat: info.coords.latitude,
					long: info.coords.longitude
				},	locals = new Set();
				
				Session.set('position', position);
				
				var response = Meteor.http.get('http://maps.googleapis.com/maps/api/geocode/json', {
					params:{ 
						latlng: position.lat + ',' + position.long,
						sensor:true
					}
				}, function( error, response ){
					if( !error && response.data.results ){
						
						_.each(response.data.results[0].address_components, function( element ){
							if( element.types.indexOf('political') > -1 )
								locals.add( element.short_name );
						});

						var locale = {},
							index = 0;

						locals.forEach(function( el ){
							if( index === 0 )
								locale.city = el;
							else if( index === 1 )
								locale.state = el;
							else if( index === 2)
								locale.country = el;
						
							index++;
						});

						Session.set('locale', locale);
					}					
				});
			});
		}
	}]
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

mainRoutes.route('/signup/school', {
	action: function() {
		BlazeLayout.render("defaultLayout", {content: "signUpSchool"});
	}
});

FlowRouter.route('/login', {
	action: function() {
		BlazeLayout.render("loginLayout", {content: "login"});
	}
});