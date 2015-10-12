if( !navigator.camera ){
	navigator.camera = {
		getPicture: function( success, error, options ){
			success( 'bagulhoaqui' );
		}
	}
}
if( !Camera ){
	Camera = {
		DestinationType: {
			FILE_URI: 'tretas'
		}
	};
}

Template.footer.events({
	'click #get-picture': function(){
		
		var self = this;
		
		navigator.camera.getPicture(
			function( data ){
				Session.set('photo', data);
				FlowRouter.go('/complaint');
			},
			function(err){
				console.log(err);
			},{
			quality: 80,
			targetWidth: 600,
			targetHeight: 600,
			destinationType: Camera.DestinationType.FILE_URI
		});
	}
})