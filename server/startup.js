Meteor.startup(function(){
	Complaints.populate(5);
	Schools.populate(5);
});