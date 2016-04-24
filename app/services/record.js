import Ember from 'ember';

import Leave from '../models/leave';
import Employee from '../models/employee';

const leaves = [
	Leave.create({
		id: 1,
		employee: "sarup.banskota@mesitis.com",
		from: "12-12-2014",
		to: "14-12-2014",
		reason: "Need to shampoo my hair",
		status: "Approved"
	}),
	Leave.create({
		id: 2,
		employee: "martin.pickrodt@mesitis.com",
		from: "14-12-2015",
		to: "16-12-2015",
		reason: "Cat ate my pajamas",
		status: "Approved"
	}),
	Leave.create({
		id: 3,
		employee: "tanmai.sharma@mesitis.com",
		from: "2-1-2016",
		to: "6-1-2016",
		reason: "huh?",
		status: "Rejected"
	})
];

export default Ember.Service.extend({
	newLeave(){
		return Leave.create();
	},
	saveLeave(leave){
		leave.set('id', 9090);
		leaves.pushObject(leave);
	},
	getLeaves(){
		return leaves;
	},
	getLeaveById(id){
		return this.getLeaves().findBy('id', id);
	}
});
