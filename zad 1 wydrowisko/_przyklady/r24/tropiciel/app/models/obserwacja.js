import DS from 'ember-data';

export default DS.Model.extend({
  miejsce: DS.attr('string'),
  dataUtworzenia: DS.attr('date'),
  dataObserwacji: DS.attr('date'),
  stwor: DS.belongsTo('stwor'),
  swiadkowie: DS.hasMany('swiadek')
});
