import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["alert"],
  classNameBindings: ['typKlasy'],
  typKlasy: Ember.computed('typAlertu', function() {
    let atrybut = {'sukces': 'success',
                   'informacja': 'info',
                   'ostrzeżenie': 'warning',
                   'niebezpieczeństwo': 'danger'};
    return "alert-" + atrybut[this.get('typAlertu')];
  }),
  typTytulu: Ember.computed('typAlertu', function() {
    return Ember.String.capitalize(this.get('typAlertu'));
  }),
  click() {
    this.get('zamknij')();
  }
});
