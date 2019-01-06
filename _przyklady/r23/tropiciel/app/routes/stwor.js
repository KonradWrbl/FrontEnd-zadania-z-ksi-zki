import Ember from 'ember';

export default Ember.Route.extend({
  model(parametry){
    return this.store.findRecord('stwor', parametry.stwor_id);
  }
});
