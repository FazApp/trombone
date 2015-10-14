Template.complaint.helpers({
	photo: function(){
		if( !Session.get('photo') )
			FlowRouter.go('/');
		return Session.get('photo');
	},
	schools: function(){
		
		var locale = Session.get('locale');
		if( !locale ) return;
		
		console.log({ 
			name: new RegExp( Session.get('school.name') ),
			city: locale.city,
			country: locale.country,
			state: locale.state
		});

		return Schools.find({ 
			name: new RegExp( Session.get('school.name'), 'gi'),
			city: locale.city,
			country: locale.country,
			state: locale.state
		});
	}
});

Template.complaint.events({
	'keyup #school-name': function(event, template){
		Session.set('school.name', template.find('#school-name').value );
	},
	'click #add-complaint-form button': function(event, template){
		
		var description = template.find('#description').value,
			schoolId = template.find('#school-name').attributes.schoolId,
			complainer = Meteor.userId(),
			photo = Session.get('photo');

		console.log(description, schoolId, complainer)

		//if( description && schoolId && complainer && photo ){


		//}

	}
})