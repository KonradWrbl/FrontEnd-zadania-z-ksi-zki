import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let daneSwiadka = this.store.createRecord('swiadek', {
      imie: "Jan",
      nazwisko: "Nowak",
      email: "jan.nowak@gmail.com"
    });
    return [daneSwiadka];
  }
});
