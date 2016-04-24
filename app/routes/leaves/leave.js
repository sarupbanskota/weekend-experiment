import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		const store = this.get('store');
		return store.getLeaveById(params.store_id);
	},

	store: Ember.inject.service()
});
