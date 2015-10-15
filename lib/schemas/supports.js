SchemaSupports = new SimpleSchema({
	complainerId: {
		type: String
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	},
	complaintId: {
		type: String
	}
});

Supports = new Meteor.Collection('supports');
Supports.attachSchema( SchemaSupports );