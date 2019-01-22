(function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};

  function BazaDanych() {
    this.dane = {};
  }

  BazaDanych.prototype.dodaj = function(klucz, wartość) {
    this.dane[klucz] = wartość;
  };

  BazaDanych.prototype.pobierz = function(klucz) {
    return this.dane[klucz];
  };

  BazaDanych.prototype.pobierzWszystko = function() {
    return this.dane;
  };

  BazaDanych.prototype.usuń = function(klucz) {
    delete this.dane[klucz];
  };

  Aplikacja.BazaDanych = BazaDanych;
  window.Aplikacja = Aplikacja;
})(window);
