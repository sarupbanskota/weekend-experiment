import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		createLeave(leave){
			this.get('record').saveLeave(leave);
			this.transitionTo('leaves.leave', leave);
		}
	},
	model(){
		const record = this.get('record');
		return record.newLeave();
	},

	record: Ember.inject.service()

});