import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('leaves', function(){
  	this.route('leave', {path: '/:leave_id'});
  });
});

export default Router;
