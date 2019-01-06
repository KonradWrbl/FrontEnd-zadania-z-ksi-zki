(function(window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};

  function Furgonetka(identyfikator, bazadanych) {
    this.identyfikator = identyfikator;
    this.bazadanych = bazadanych;
  }

  Furgonetka.prototype.złóżZamówienie = function(zamówienie) {
    console.log('Złożenie zamówienia dla ' + zamówienie.adresEmail);
    return this.bazadanych.dodaj(zamówienie.adresEmail, zamówienie);
  };

  Furgonetka.prototype.zrealizujZamówienie = function(idklienta) {
    console.log('Zrealizowane zamówienie dla ' + idklienta);
    return this.bazadanych.usuń(idklienta);
  };

  Furgonetka.prototype.drukujZamówienia = function(funkcjaDrukująca) {
    return this.bazadanych.pobierzWszystko()
      .then(function(zamówienia) {
        var tablicaKlientów = Object.keys(zamówienia);
        console.log('Furgonetka nr ' + this.identyfikator + ' ma niezrealizowane zamówienia:');
        tablicaKlientów.forEach(function(id) {
          console.log(zamówienia[id]);
          if (funkcjaDrukująca) {
            funkcjaDrukująca(zamówienia[id]);
          }
        }.bind(this));
      }.bind(this));
  };

  Aplikacja.Furgonetka = Furgonetka;
  window.Aplikacja = Aplikacja;
})(window);
