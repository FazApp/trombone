Template.comment.helpers({
	isOwnerComment: function( id ){
		if( Comments.findOne( id ).complainerId == Meteor.userId() )
			return true;
		else return false;
	}
});

Template.comment.events({
	'click .remover': function(event){
		var id = $(event.currentTarget).attr('data-id');
		Comments.remove(id);
	}
})