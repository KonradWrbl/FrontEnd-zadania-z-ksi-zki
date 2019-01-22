(function(window) {
  'use strict';
  var SELEKTOR_FORMULARZA = '[data-zamówienie="formularz"]';
  var SELEKTOR_LISTY_ZAMÓWIEŃ = '[data-zamówienie="listaZamówień"]';
  var Aplikacja = window.Aplikacja;
  var Furgonetka = Aplikacja.Furgonetka;
  var BazaDanych = Aplikacja.BazaDanych;
  var ObsługaFormularza = Aplikacja.ObsługaFormularza;
  var ListaZamówień = Aplikacja.ListaZamówień;
  var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
  window.mojaFurgonetka = mojaFurgonetka;
  var listaZamówień = new ListaZamówień(SELEKTOR_LISTY_ZAMÓWIEŃ);
  listaZamówień.dodajObsługęKliknięcia(mojaFurgonetka.zrealizujZamówienie.bind(mojaFurgonetka));
  var obsługaFormularza = new ObsługaFormularza(SELEKTOR_FORMULARZA);
  obsługaFormularza.dodajObsługęWysyłki(function(dane) {
    mojaFurgonetka.złóżZamówienie.call(mojaFurgonetka, dane);
    listaZamówień.dodajWiersz.call(listaZamówień, dane);
  });
})(window);
