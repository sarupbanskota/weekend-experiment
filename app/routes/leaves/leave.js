import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		const record = this.get('record');
		return record.getLeaveById(params.leave_id);
	},

	record: Ember.inject.service()
});
