(function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};

  function Furgonetka(identyfikator, bazadanych) {
    this.identyfikator = identyfikator;
    this.bazadanych = bazadanych;
  }

  Furgonetka.prototype.złóżZamówienie = function(zamówienie) {
    console.log('Złożenie zamówienia dla ' + zamówienie.adresEmail);
    this.bazadanych.dodaj(zamówienie.adresEmail, zamówienie);
  };

  Furgonetka.prototype.zrealizujZamówienie = function(idklienta) {
    console.log('Zrealizowane zamówienie dla ' + idklienta);
    this.bazadanych.usuń(idklienta);
  };

  Furgonetka.prototype.drukujZamówienia = function() {
    var tablicaKlientów = Object.keys(this.bazadanych.pobierzWszystko());
    console.log('Furgonetka nr ' + this.identyfikator + ' ma niezrealizowane zamówienia:');
    tablicaKlientów.forEach(function(id) {
      console.log(this.bazadanych.pobierz(id));
    }.bind(this));
  };

  Aplikacja.Furgonetka = Furgonetka;
  window.Aplikacja = Aplikacja;
})(window);
