import Ember from 'ember';

export function dataOd(params) {
  var czas = window.moment(...params);
  var czasSformatowany = czas.fromNow();
  return new Ember.Handlebars.SafeString(
    '<span class="text-primary">'
    + czasSformatowany + '</span>'
  );
}
export default Ember.Helper.helper(dataOd);
