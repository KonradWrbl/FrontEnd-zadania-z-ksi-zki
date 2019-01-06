import Ember from 'ember';

export default Ember.Controller.extend({
  obserwacja: Ember.computed.alias('model.obserwacja'),
  actions: {
    zmien() {
      if(this.get('obserwacja').get('hasDirtyAttributes')) {
        this.get('obserwacja').save().then(() => {
          this.transitionToRoute('obserwacje');
        });
      }
    },
    anuluj() {
      if(this.get('obserwacja').get('hasDirtyAttributes')) {
        this.get('obserwacja').rollbackAttributes();
      }
      this.transitionToRoute('obserwacje');
    },
    usun() {
      var self = this;
      if (window.confirm("Czy naprawdę chcesz usunąć tę obserwację?")) {
        this.get('obserwacja').destroyRecord().then(() => {
          self.transitionToRoute('obserwacje');
        });
      }
    }
  }
});
