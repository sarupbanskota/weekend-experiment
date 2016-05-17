import Ember from 'ember';

export default Ember.Controller.extend({
  emailIsValid: Ember.computed.notEmpty('email'),
  firstNameIsValid: Ember.computed.notEmpty('firstName'),
  lastNameIsValid: Ember.computed.notEmpty('lastName'),
  categoryIsValid: Ember.computed.notEmpty('category'),
  managerIsValid: Ember.computed.notEmpty('manager'),
  inputIsValid: Ember.computed.and(
    'emailIsValid',
    'firstNameIsValid',
    'lastNameIsValid',
    'categoryIsValid',
    'managerIsValid'
    ),
  isDisabled: Ember.computed.not('inputIsValid'),
  actions: {
    processNewEmployee(){
      const newEmployee = this.store.createRecord('employee', {
        email: this.get('email'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        category: this.get('category'),
        manager: this.get('manager')
      });
      console.log(newEmployee);
      newEmployee.save().then(() => {
        this.set('responseMessage', `New employee has been saved!`);
        this.set('responseMessageHeader', 'Done!');
        this.set('email', '');
        this.set('firstName', '');
        this.set('lastName', '');
        this.set('category', '');
        this.set('manager', '');
      });
    }
  }
});
