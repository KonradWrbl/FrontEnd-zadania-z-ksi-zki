import DS from 'ember-data';

export default DS.Model.extend({
  nazwa: DS.attr('string'),
  typStwora: DS.attr('string'),
  zdjecie: DS.attr('string'),
  obserwacje: DS.hasMany('obserwacja')
});
