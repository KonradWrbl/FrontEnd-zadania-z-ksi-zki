import gniazdo from './ws-klient';

class CzatAplikacja {
  constructor() {
    gniazdo.inicjuj('ws://localhost:3001');
    gniazdo.zarejestrujObsługęOtwarcia(() => {
      let komunikat = new CzatKomunikat({ komunikat: 'Hej!' });
      gniazdo.wyślijKomunikat(komunikat.serialize());
    });
    gniazdo.zarejestrujObsługęKomunikatu((dane) => {
      console.log(dane);
    });
  }
}

class CzatKomunikat {
  constructor({
    komunikat: k,
    użytkownik: u='Andrzej',
    czas: c=(new Date()).getTime()
  }) {
    this.komunikat = k;
    this.użytkownik = u;
    this.czas = c;
  }
  serialize() {
    return {
      komunikat: this.komunikat,
      użytkownik: this.użytkownik,
      czas: this.czas
    }
  }
}
export default CzatAplikacja;
