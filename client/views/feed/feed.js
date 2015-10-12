Template.feed.helpers({
	complaints: function(){
		/*var locale = Session.get('locale');
		if( locale ){
			
			var schools = _.map( Schools.find({
				city: locale.city,
				state: locale.state,
				country: locale.country
			}).fecth(), function( element ){
				return { schoolId: element._id };
			});

			if( _.size(schools) > 0 ){
				return Complaints.find({
					$or: schools
				});
			} else return [];

		}
		else return [];
		*/
		return _.map( Complaints.find().fetch(), function( doc ){
			doc.school = Schools.findOne( doc.schoolId );
		});
	}
});

Template.feed.events({
	'touch button': function(){
		alert('TESTEEEE!!');
	},
	'click #get-picture': function(event, template){
		alert('PORRAAA!');
		
		console.log( Template.body );

		var self = this;
		navigator.camera.getPicture(
			function( ){
				console.log( arguments );
			},
			function(err){
				console.log(err);
			},{
			quality: options.quality || 49,
			targetWidth: options.width || 640,
			targetHeight: options.height || 480,
			destinationType: Camera.DestinationType.DATA_URL
		});
	}
});