var showSchools = new ReactiveVar(false);

Template.complaint.onCreated(function(){
	showSchools.set(false);
});

Template.complaint.helpers({
	photo: function(){
		if( !Session.get('photo') )
			FlowRouter.go('/');
		return Session.get('photo');
	},
	schools: function(){
		
		var locale = Session.get('locale');
		if( !locale || !showSchools.get() ) return;
		
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
	'focus #school-name': function(){
		showSchools.set(true);
	},
	'click #add-complaint-form button': function(event, template){
		
		var data = {};

		data.complainerId = Meteor.userId();
		data.position = Session.get('position');
		data.status = 0;

		_.each( $( template.find('form') ).serializeArray(), function( node ){
			data[node.name] = node.value;
		});

		event.preventDefault();

		if( !data.schoolId ){
			
			var locale = Session.get('locale');

			data.schoolId = Schools.insert({
				name: data.schoolName,
				position: data.position,
				city: locale.city,
				state: locale.state,
				country: locale.country
			});

		}

		ComplaintMedias.insert( Session.get('photo'), function(err, file){
			if( !err ){
				data.media = file._id;
				Complaints.insert(data);
				FlowRouter.go('/');
			}
		});

		//console.log(description, schoolId, complainer)

		//if( description && schoolId && complainer && photo ){


		//}

	},
	'click #school': function(event, template){
		template.find()
	}
})