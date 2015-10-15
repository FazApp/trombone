SchemaComplaints = new SimpleSchema({
	complainerId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: 'Reclamante'
	},
	schoolId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: 'Escola'
	},
	description: {
		type: String,
		label: 'Descrição'
	},
	media: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: 'Arquivo',
		optional: true
	},
	position: {
		type: Object,
		label: 'Posição'
	},
	'position.$.lat': {
		type: Number,
		label: 'Latitude'
	},
	'position.$.long': {
		type: Number,
		label: 'Longitude'
	},
	status: {
		type: Number,
		label: 'Estatus'
	}
});

Complaints = new Meteor.Collection('complaints');
Complaints.attachSchema( SchemaComplaints );

Complaints.helpers({
	school: function(){
		return Schools.findOne( this.schoolId );
	},
	image: function(){
		var image = ComplaintMedias.findOne( this.media );
		return image? image.url(): '/icone_quadrado.png';
	},
	supported: function(){
		return Supports.findOne({
			complainerId: Meteor.userId(),
			complaintId: this._id
		}) ? true: false;
	},
	comments: function(){
		return Comments.find({ complaintId: this._id });
	}
});