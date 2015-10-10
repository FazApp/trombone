SchemaSchool = new SimpleSchema({
	name: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: 'Nome'
	},
	avatar: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: 'Imagem'
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
	}
});