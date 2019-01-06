import Ember from 'ember';

export default Ember.Controller.extend({
  trescAlertu: null,
  typAlertu: null,
  alertWidoczny: false,
  actions: {
    usunAlert(){
      this.set('trescAlertu', "");
      this.set('typAlertu', "sukces");
      this.set('alertWidoczny', false);
    }
  }
});
