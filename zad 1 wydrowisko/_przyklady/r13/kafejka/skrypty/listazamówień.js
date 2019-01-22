(function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};
  var $ = window.jQuery;

  function ListaZamówień(selektor) {
    if (!selektor) {
      throw new Error('Brak selektora');
    }
    this.$element = $(selektor);
    if (this.$element.length === 0) {
      throw new Error('Brak elementów odpowiadających selektorowi: ' + selektor);
    }
  }

  ListaZamówień.prototype.dodajObsługęKliknięcia = function(fn) {
    this.$element.on('click', 'input', function(zdarzenie) {
      var email = event.target.value;
      this.usuńWiersz(email);
      fn(email);
    }.bind(this));
  };

  ListaZamówień.prototype.dodajWiersz = function(zamówienie) {
    // Usunięcie wszystkich wierszy zawierających określony adres e-mail
    this.usuńWiersz(zamówienie.adresEmail);
    // Utworzenie nowego obiektu wiersza na podstawie danych zamówienia
    var elementWiersza = new Wiersz(zamówienie);
    // Dodanie właściwości $element nowego obiektu do listy kontrolnej
    this.$element.append(elementWiersza.$element);
  };

  ListaZamówień.prototype.usuńWiersz = function(email) {
    this.$element
      .find('[value="' + email + '"]')
      .closest('[data-zamówienie="poleWyboru"]')
      .remove();
  };

  function Wiersz(zamówienie) {
    var $div = $('<div></div>', {
      'data-zamówienie': 'poleWyboru',
      'class': 'checkbox'
    });
    var $etykieta = $('<label></label>');
    var $poleWyboru = $('<input></input>', {
      type: 'checkbox',
      value: zamówienie.adresEmail
    });
    var opis = zamówienie.wielkość + ' ';
    if (zamówienie.smak) {
      opis += zamówienie.smak + ' ';
    }
    opis += zamówienie.kawa + ', ';
    opis += ' (' + zamówienie.adresEmail + ')';
    opis += ' [' + zamówienie.moc + 'x]';

    $etykieta.append($poleWyboru);
    $etykieta.append(opis);
    $div.append($etykieta);

    this.$element = $div;
  }
  Aplikacja.ListaZamówień = ListaZamówień;
  window.Aplikacja = Aplikacja;
})(window);
