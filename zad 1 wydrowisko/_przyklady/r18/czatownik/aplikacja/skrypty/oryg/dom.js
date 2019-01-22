import $ from 'jquery';
import md5 from 'crypto-js/md5';
import moment from 'moment';
require('moment/locale/pl');

function utwórzUrlGravatara(użytkownik) {
  let hash = md5(użytkownik);
  return `http://www.gravatar.com/avatar/${hash.toString()}`;
}

export function wprowadźNazwęUżytkownika() {
  let użytkownik = prompt('Podaj nazwę użytkownika');
  return użytkownik.toLowerCase();
}


export class CzatFormularz {
  constructor(selFormularza, selPola) {
    this.$formularz = $(selFormularza);
    this.$pole = $(selPola);
  }

  inicjuj(funkcjaSubmit) {
    this.$formularz.submit((zdarzenie) => {
      zdarzenie.preventDefault();
      let wartość = this.$pole.val();
      funkcjaSubmit(wartość);
      this.$pole.val('');
    });
    this.$formularz.find('button').on('click', () => this.$formularz.submit());
  }
}

export class CzatLista {
  constructor(selListy, użytkownik) {
    this.lista = $(selListy);
    this.użytkownik = użytkownik;
  }

  wyświetlKomunikat({użytkownik: u, czas: c, komunikat: k}) {
    let $wierszKomunikatu = $('<li>', {
      'class': 'wiersz-komunikatu'
    });
    if (this.użytkownik === u) {
      $wierszKomunikatu.addClass('ja');
    }
    let $komunikat = $('<p>');
    $komunikat.append($('<span>', {
      'class': 'komunikat-użytkownik',
      text: u
    }));
    $komunikat.append($('<span>', {
      'class': 'czas',
      'data-czas': c,
      text: moment(c).fromNow()
    }));
    $komunikat.append($('<span>', {
      'class': 'komunikat-komunikat',
      text: k
    }));
    let $obraz = $('<img>', {
      src: utwórzUrlGravatara(u),
      title: u
    });
    $wierszKomunikatu.append($obraz);

    $wierszKomunikatu.append($komunikat);
    $(this.lista).append($wierszKomunikatu);
    $wierszKomunikatu.get(0).scrollIntoView();
  }

  inicjuj() {
    this.zegar = setInterval(() => {
      $('[data-czas]').each((indeks, element) => {
        let $element = $(element);
        let znacznik = new Date().setTime($element.attr('data-czas'));
        let odstęp = moment(znacznik).fromNow();
        $element.html(odstęp);
      });
    }, 1000);
  }
}
