(function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};
  var $ = window.jQuery;
  function ObsługaFormularza(selektor) {
    if (!selektor) {
      throw new Error('Brak selektora');
    }
    this.$elementFormularza = $(selektor);
    if (this.$elementFormularza.length === 0) {
      throw new Error('Brak elementów odpowiadających selektorowi: ' + selektor);
    }
  }

  ObsługaFormularza.prototype.dodajObsługęWysyłki = function(fn) {
    console.log('Utworzenie obsługi zdarzenia submit formularza');
    this.$elementFormularza.on('submit', function(zdarzenie) {
      zdarzenie.preventDefault();
      var dane = {};
      $(this).serializeArray().forEach(function(element) {
        dane[element.name] = element.value;
        console.log('Element ' + element.name + ' ma wartość ' + element.value);
      });
      console.log(dane);
      fn(dane);
      this.reset();
      this.elements[0].focus();
    });
  };

  ObsługaFormularza.prototype.dodajObsługęZnaku = function(fn) {
    console.log('Utworzenie obsługi zdarzenia input formularza');
    this.$elementFormularza.on('input', '[name="adresEmail"]', function(event) {
      var adresEmail = event.target.value;
      var komunikat = '';
      if (fn(adresEmail)) {
        $(event.target).setCustomValidity('');
      } else {
        komunikat = 'Adres ' + adresEmail + ' nie jest dozwolony!'
        $(event.target).setCustomValidity(komunikat);
      }
    });
  };

  Aplikacja.ObsługaFormularza = ObsługaFormularza;
  window.Aplikacja = Aplikacja;
})(window);
