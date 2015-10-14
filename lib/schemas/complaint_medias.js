ComplaintMedias = new FS.Collection('complaintMedias', {
  stores: [new FS.Store.FileSystem("images")]
});

if( Meteor.isServer ){
	ComplaintMedias.allow({
		'insert': function () {
			return true;
		}
	});
}