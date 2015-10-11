Template.feed.events({
	'click #camera-caller': function(event, template){
		var self = this;
		
		MeteoricCamera.getPicture({
			width: 600,
			height: 600,
			quality: 80
		}, function( error, data ){
			if( !error ){
				console.log(data);
				$('#image').attr('src',data);
			}
		});
	}
});