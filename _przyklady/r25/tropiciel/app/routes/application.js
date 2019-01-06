import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    flash(dane){
      this.controller.set('trescAlertu', dane.komunikat);
      this.controller.set('typAlertu', dane.typAlertu);
      this.controller.set('alertWidoczny', true);
    }
  }
});
