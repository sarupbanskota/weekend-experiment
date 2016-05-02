import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('leaves', function(){
  	this.route('leave', {path: '/:leave_id'});
  });
  this.route('admin', function() {
    this.route('leaves');
  });
  this.route('employees', function(){
  	this.route('new');
  });
});

export default Router;
