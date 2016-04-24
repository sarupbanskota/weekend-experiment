import Ember from 'ember';

export default Ember.Service.extend({
	getLeaves(){
		return [{
			id: 1,
			employee: "sarup.banskota@mesitis.com",
			from: "12-12-2014",
			to: "14-12-2014",
			reason: "Need to shampoo my hair"
		},{
			id: 2,
			employee: "martin.pickrodt@mesitis.com",
			from: "14-12-2015",
			to: "16-12-2015",
			reason: "Cat ate my pajamas"
		},{
			id: 3,
			employee: "tanmai.sharma@mesitis.com",
			from: "2-1-2016",
			to: "6-1-2016",
			reason: "huh?"
		}];
	},

	getLeavesById(id){
		return this.getLeaves().findBy('id', id);
	}
});
