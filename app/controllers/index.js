import Ember from 'ember';

export default Ember.Controller.extend({
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
			this.set('responseMessage', `${this.get('leaveNote')} saved!`);
			this.set('leaveNote', '')
		}
	}
});
