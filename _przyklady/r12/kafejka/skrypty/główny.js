(function(window) {
  'use strict';
  var SELEKTOR_FORMULARZA = '[data-zamówienie="formularz"]';
  var SELEKTOR_LISTY_ZAMÓWIEŃ = '[data-zamówienie="listaZamówień"]';
  var Aplikacja = window.Aplikacja;
  var Furgonetka = Aplikacja.Furgonetka;
  var BazaDanych = Aplikacja.BazaDanych;
  var ObsługaFormularza = Aplikacja.ObsługaFormularza;
  var Weryfikacja = Aplikacja.Weryfikacja;
  var ListaZamówień = Aplikacja.ListaZamówień;
  var webshim = window.webshim;
  var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
  window.mojaFurgonetka = mojaFurgonetka;
  var listaZamówień = new ListaZamówień(SELEKTOR_LISTY_ZAMÓWIEŃ);
  listaZamówień.dodajObsługęKliknięcia(mojaFurgonetka.zrealizujZamówienie.bind(mojaFurgonetka));
  var obsługaFormularza = new ObsługaFormularza(SELEKTOR_FORMULARZA);
  obsługaFormularza.dodajObsługęWysyłki(function(dane) {
    mojaFurgonetka.złóżZamówienie.call(mojaFurgonetka, dane);
    listaZamówień.dodajWiersz.call(listaZamówień, dane);
  });
  obsługaFormularza.dodajObsługęZnaku(Weryfikacja.czyAdresFirmowy);
  webshim.polyfill('forms forms-ext');
  webshim.setOptions('forms', { addValidators: true, lazyCustomMessages: true });
})(window);
