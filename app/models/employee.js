import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  email: attr('string'),
  role: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  category: attr('string'),
  manager: attr('string')
});
