import DS from 'ember-data';

export default DS.Model.extend({
  imie: DS.attr('string'),
  nazwisko: DS.attr('string'),
  email: DS.attr('string'),
  obserwacje: DS.hasMany('obserwacja'),
  imieNazwisko: Ember.computed('imie', 'nazwisko', function(){
    return this.get('imie') + ' ' + this.get('nazwisko');
  })
});
