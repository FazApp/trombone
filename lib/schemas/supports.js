SchemaSupports = new SimpleSchema({
	complainerId: {
		type: String
	},
	date: {
		type: Date
	},
	complaintId: {
		type: String
	}
});

Supports = new Meteor.Collection('supports');
Supports.attachSchema( SchemaSupports );