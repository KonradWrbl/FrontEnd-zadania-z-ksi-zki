(function(window) {
  'use strict';
  var SELEKTOR_FORMULARZA = '[data-zamówienie="formularz"]';
  var Aplikacja = window.Aplikacja;
  var Furgonetka = Aplikacja.Furgonetka;
  var BazaDanych = Aplikacja.BazaDanych;
  var ObsługaFormularza = Aplikacja.ObsługaFormularza;
  var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
  window.mojaFurgonetka = mojaFurgonetka;
  var obsługaFormularza = new ObsługaFormularza(SELEKTOR_FORMULARZA);
  obsługaFormularza.dodajObsługęWysyłki(mojaFurgonetka.złóżZamówienie.bind(mojaFurgonetka));
  console.log(obsługaFormularza);
})(window);
