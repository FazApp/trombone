var sideMenuShowed = new ReactiveVar(false);

Template.defaultLayout.helpers({
	isAddComplaint: function(){
		return FlowRouter.current().path == '/complaint' ? true: false;
	}
});

if( Meteor.isCordova ){
	Template.defaultLayout.onRendered(function(){
		
		document.addEventListener('backbutton', function(e){
			MaterialMenu.hide();
		}, false);
		
	});
}