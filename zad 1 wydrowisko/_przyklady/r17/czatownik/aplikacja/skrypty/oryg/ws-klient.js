let gniazdo;

function inicjuj(url) {
  gniazdo = new WebSocket(url);
  console.log('Nawiązywanie połączenia...');
}

function zarejestrujObsługęOtwarcia(funkcjaObsługi) {
  gniazdo.onopen = () => {
    console.log('nawiązane');
    funkcjaObsługi();
  };
}

function zarejestrujObsługęKomunikatu(funkcjaObsługi) {
  gniazdo.onmessage = (e) => {
    console.log('komunikat', e.data);
    let dane = JSON.parse(e.data);
    funkcjaObsługi(dane);
  };
}

function wyślijKomunikat(zawartość) {
  gniazdo.send(JSON.stringify(zawartość));
}

export default {
  inicjuj,
  zarejestrujObsługęOtwarcia,
  zarejestrujObsługęKomunikatu,
  wyślijKomunikat
}
