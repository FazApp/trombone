SchoolAvatar = new FS.Collection('media', {
	stores: [dropboxStore],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});