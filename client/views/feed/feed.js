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
		return _.map( Complaints.find().fetch(), function( complaint ){
			var show = Session.get('showComments.' + complaint._id );
			complaint.showComments = show || false;
			return complaint;
		});
	},
});

Template.feed.events({
	'click .support-complaint': function( event ){
		var id = $(event.currentTarget).attr('data-id');
		Supports.insert({
			complaintId: id,
			complainerId: Meteor.userId(),
			date: new Date()
		});
	},
	'click .show-comment-complaint': function( event ){
		var id = $(event.currentTarget).attr('data-id');
		Session.set('showComments.' + id, true);
	},
	'keypress .comment-complaint': function( event ){
		if( event.keyCode == 13 ){
			var id = $(event.currentTarget).parent().parent().attr('data-id');
			//Session.set('showComments.' + id, true);
			Comments.insert({
				complainerId: Meteor.userId(),
				complaintId: id,
				text: event.currentTarget.value
			});

			event.currentTarget.value = "";
		}
	}
});