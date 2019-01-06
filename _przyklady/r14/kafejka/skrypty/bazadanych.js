(function(window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};
  var Obietnica = window.Promise;

  function BazaDanych() {
    this.dane = {};
  }

  function akceptacjaObietnicy(wartość) {
    var obietnica = new Promise(function(akceptuj, odrzuć) {
      akceptuj(wartość);
    });
    return obietnica;
  }

  BazaDanych.prototype.dodaj = function(klucz, wartość) {
    this.dane[klucz] = wartość;
    return akceptacjaObietnicy(null);
  };

  BazaDanych.prototype.pobierz = function(klucz) {
    return akceptacjaObietnicy(this.dane[klucz]);
  };

  BazaDanych.prototype.pobierzWszystko = function() {
    return akceptacjaObietnicy(this.dane);
  };

  BazaDanych.prototype.usuń = function(klucz) {
    delete this.dane[klucz];
    return akceptacjaObietnicy(null);
  };

  Aplikacja.BazaDanych = BazaDanych;
  window.Aplikacja = Aplikacja;
})(window);
