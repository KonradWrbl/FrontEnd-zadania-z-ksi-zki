import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('obserwacje', function() {
    this.route('nowa');
  });
  this.route('obserwacja', function() {
    this.route('edycja');
  });
  this.route('stwory');
  this.route('stwor', {path: 'stwory/:stwor_id'});
  this.route('swiadkowie');
  this.route('swiadek');
});

export default Router;
