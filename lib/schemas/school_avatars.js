SchoolAvatars = new FS.Collection('schoolAvatars', {
	stores: [new FS.Store.FileSystem("avatars")],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});

if( Meteor.isServer ){
	SchoolAvatars.allow({
		'insert': function () {
			return true;
		}
	});
}