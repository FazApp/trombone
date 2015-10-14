SchemaSchools = new SimpleSchema({
	name: {
		type: String,
		label: 'Nome'
	},
	avatarId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: 'Imagem',
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
	city: {
		type: String,
		label: 'Cidade'
	},
	state: {
		type: String,
		label: 'Estado'
	},
	country: {
		type: String,
		label: 'País'
	}
});

Schools = new Meteor.Collection('schools');
Schools.attachSchema( SchemaSchools );