import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		const record = this.get('record');
		return record.getLeaves();
	},

	record: Ember.inject.service()
});
