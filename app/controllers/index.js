import Ember from 'ember';

export default Ember.Controller.extend({
	responseMessage: '',
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
			const newLeave = this.store.createRecord('leave', 
				{
					email: email,
					leaveNode: note
				}
			);
			newLeave.save();
			this.set('responseMessage', `${this.get('leaveNote')} has just been saved!`);
			this.set('leaveNote', '');
			this.set('employeeEmail', '');
		}
	}
});
