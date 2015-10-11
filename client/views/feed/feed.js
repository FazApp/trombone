Template.feed.helpers({
	complaints: function(){
		var locale = Session.get('locale');
		if( locale ){
			Schools.find({
				city: locale.city,
				state: locale.state,
				country: locale.country
			});
		}
		else return [];
	}
});

Template.feed.events({
	'click #camera-caller': function(event, template){
		var self = this;
		
		navigator.camera.getPicture(
			function(){

			},
			function(){
			},{
			quality: options.quality || 49,
			targetWidth: options.width || 640,
			targetHeight: options.height || 480,
			destinationType: Camera.DestinationType.FILE_URL
		});
	}
});