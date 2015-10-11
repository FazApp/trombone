SchoolAvatars = new FS.Collection('schoolAvatars', {
	stores: [dropboxStore],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});