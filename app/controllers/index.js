import Ember from 'ember';

export default Ember.Controller.extend({
	responseMessage: '',
	responseMessageHeader: '',
	leaveNote: '',
	employeeEmail: '',

	emailIsValid: Ember.computed.match('employeeEmail', /^.+@.+\..+$/),
	leaveNoteIsValid: Ember.computed('leaveNote', function(){
		return this.get('leaveNote').length > 10;
	}),
	isValid: Ember.computed.and('emailIsValid', 'leaveNoteIsValid'),
	isDisabled: Ember.computed.not('isValid'),

	actions: {
		processLeave(){
			const email = this.get('employeeEmail');
			const note  = this.get('leaveNote');
			console.log(this.get('leaveNote'));
			const newLeave = this.store.createRecord('leave', 
				{
					email: email,
					leaveNote: note
				}
			);
			newLeave.save().then((response) => {
				this.set('responseMessage', `${email}'s leave request has been saved!`);
				this.set('responseMessageHeader', 'Done!');
				this.set('leaveNote', '');
				this.set('employeeEmail', '');
			});
		}
	}
});
