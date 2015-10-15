SchemaComments = new SimpleSchema({
	complaintId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id
	},
	text: {
		type: String
	},
	complainerId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	}
});

Comments = new Meteor.Collection('comments');
Comments.attachSchema( SchemaComments );