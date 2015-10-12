Template.feed.helpers({
	complaints: function(){
		/*var locale = Session.get('locale');
		if( locale ){
			
			var schools = _.map( Schools.find({
				city: locale.city,
				state: locale.state,
				country: locale.country
			}).fecth(), function( element ){
				return { schoolId: element._id };
			});

			if( _.size(schools) > 0 ){
				return Complaints.find({
					$or: schools
				});
			} else return [];

		}
		else return [];
		*/
		return Complaints.find();
	}
});