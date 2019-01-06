(function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};
  var $ = window.jQuery;
  function ZdalnaBazaDanych(url) {
    if (!url) {
      throw new Error('Brak ścieżki URL.');
    }
    this.ścieżkaUrl = url;
  }
  ZdalnaBazaDanych.prototype.dodaj = function(klucz, wartość) {
    $.post(this.ścieżkaUrl, wartość, function(odpowiedźSerwera) {
      console.log(odpowiedźSerwera);
    });
  };

  ZdalnaBazaDanych.prototype.pobierzWszystko = function(fzwr) {
    $.get(this.ścieżkaUrl, function(odpowiedźSerwera) {
      console.log(odpowiedźSerwera);
      fzwr(odpowiedźSerwera);
    });
  };

  ZdalnaBazaDanych.prototype.pobierz = function(klucz, fzwr) {
    $.get(this.ścieżkaUrl + '/' + klucz, function(odpowiedźSerwera) {
      console.log(odpowiedźSerwera);
      fzwr(odpowiedźSerwera);
    });
  };

  ZdalnaBazaDanych.prototype.usuń = function(klucz) {
    $.ajax(this.ścieżkaUrl+ '/' + klucz, {
      type: 'DELETE'
    });
  };

  Aplikacja.ZdalnaBazaDanych = ZdalnaBazaDanych;
  window.Aplikacja = Aplikacja;
})(window);
