SchoolAvatar = new FS.Collection('schoolAvatar', {
	stores: [dropboxStore],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});