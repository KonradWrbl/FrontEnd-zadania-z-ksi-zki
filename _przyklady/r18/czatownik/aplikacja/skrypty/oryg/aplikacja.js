import gniazdo from './ws-klient';
import {SesjaUżytkownika} from './sesja';
import {CzatFormularz, CzatLista, wprowadźNazwęUżytkownika} from './dom';

const SELEKTOR_FORMULARZA = '[data-czat="czat-formularz"]';
const SELEKTOR_POLA = '[data-czat="pole-komunikatu"]';
const SELEKTOR_LISTY = '[data-czat="lista-komunikatów"]';

let sesjaUżytkownika = new SesjaUżytkownika('x-czatownik/u');
let użytkownik = sesjaUżytkownika.odczytaj();
if (!użytkownik) {
  użytkownik = wprowadźNazwęUżytkownika();
  sesjaUżytkownika.zapisz(użytkownik);
}

class CzatAplikacja {
  constructor() {
    this.czatFormularz = new CzatFormularz(SELEKTOR_FORMULARZA, SELEKTOR_POLA);
    this.czatLista = new CzatLista(SELEKTOR_LISTY, użytkownik);
    gniazdo.inicjuj('ws://localhost:3001');
    gniazdo.zarejestrujObsługęOtwarcia(() => {
      this.czatFormularz.inicjuj((dane) => {
        let komunikat = new CzatKomunikat({ komunikat: dane });
        gniazdo.wyślijKomunikat(komunikat.serializuj());
      });
      this.czatLista.inicjuj();
    });
    gniazdo.zarejestrujObsługęKomunikatu((dane) => {
      let komunikat = new CzatKomunikat(dane);
      this.czatLista.wyświetlKomunikat(komunikat.serializuj());
    });
  }
}

class CzatKomunikat {
  constructor({
    komunikat: k,
    użytkownik: u=użytkownik,
    czas: c=(new Date()).getTime()
  }) {
    this.komunikat = k;
    this.użytkownik = u;
    this.czas = c;
  }
  serializuj() {
    return {
      komunikat: this.komunikat,
      użytkownik: this.użytkownik,
      czas: this.czas
    }
  }
}
export default CzatAplikacja;
