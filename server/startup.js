Meteor.startup(function(){
	
	if( !Schools.findOne() ){
		
		var idA = Schools.insert({
			name:'Escola Municipal Mario do Carmo Ennes Fonseca',
			position: {
				lat: -5.8955322,
				long: -42.6342985 
			},
			city: 'Água Branca',
			state: 'PI',
			country: 'BR'
		});

		var idB = Schools.insert({
			name:'Escola Estadual Monsenhor Boson',
			position: {
				lat: -5.8955320,
				long: -42.6342981 
			},
			city: 'Água Branca',
			state: 'PI',
			country: 'BR'
		});
	}

	if( !Complaints.findOne() ){

		Complaints.insert({
			complainerId: 'uc4XwSDZKycpi8mSr',
			schoolId: idA,
			descripition:'Parede Rachada',
			media: 'tst',
			position: {
				lat: -5.8955324,
				long: -42.6342983 
			}
		});

		Complaints.insert({
			complainerId: 'uc4XwSDZKycpi8mSr',
			schoolId: idB,
			descripition:'Porta Quebrada',
			media: 'tst',
			position: {
				lat: -5.8955326,
				long: -42.6342982
			}
		});
		
	}

});