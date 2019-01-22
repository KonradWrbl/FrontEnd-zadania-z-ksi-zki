import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      obserwacja: this.store.createRecord('obserwacja'),
      stwory: this.store.findAll('stwor'),
      swiadkowie: this.store.findAll('swiadek')
    });
  },
  obserwacja: Ember.computed.alias('controller.model.obserwacja'),
  actions: {
    willTransition() {
      var obserwacja = this.get('controller.model.obserwacja');
      if(obserwacja.get('hasDirtyAttributes')){
        obserwacja.deleteRecord();
      }
    },
    zapisz() {
      var self = this;
      this.get('obserwacja').save().then(function(dane) {
        self.transitionTo('obserwacje');
      });
    },
    anuluj() {
      this.get('obserwacja').deleteRecord();
      this.transitionToRoute('obserwacje');
    }
  }
});
