SchemaComplaint = new SimpleSchema({
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
	descripition: {
		type: String,
		label: 'Descrição'
	},
	media: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: 'Arquivo'
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
	}
});