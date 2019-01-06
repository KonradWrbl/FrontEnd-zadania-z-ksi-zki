class Sesja {
  constructor(apiSesji) {
    this.api = apiSesji;
  }
  odczytaj() {
    return this.api.getItem(this.klucz);
  }
  zapisz(wartość) {
    this.api.setItem(this.klucz, wartość);
  }
}

export class SesjaUżytkownika extends Sesja {
  constructor(klucz) {
    super(sessionStorage);
    this.klucz = klucz;
  }
}
