import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		updateLeaveStatus(leave, status){
			leave.set('status', status);
		}
	},
	model(params){
		const record = this.get('record');
		return record.getLeaveById(params.leave_id);
	},

	record: Ember.inject.service()
});
