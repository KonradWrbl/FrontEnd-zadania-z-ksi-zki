import Ember from 'ember';

export default Ember.Route.extend({
  model(parametry) {
    return Ember.RSVP.hash({
      obserwacja: this.store.findRecord('obserwacja', parametry.obserwacja_id),
      stwory: this.store.findAll('stwor'),
      swiadkowie: this.store.findAll('swiadek')
    });
  }
});
