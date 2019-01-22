var SELEKTOR_DUŻEGO_OBRAZU = '[data-typ-obrazu="cel"]'
var SELEKTOR_TYTUŁU_OBRAZU = '[data-typ-obrazu="tytuł"]';
var SELEKTOR_MINIATURY = '[data-typ-obrazu="wyzwalacz"]';

function zmieńObraz(urlObrazu, tekstTytułu) {
  'use strict';
  var dużyObraz = document.querySelector(SELEKTOR_DUŻEGO_OBRAZU);
  dużyObraz.setAttribute('src', urlObrazu);
  var tytułObrazu = document.querySelector(SELEKTOR_TYTUŁU_OBRAZU);
  tytułObrazu.textContent = tekstTytułu;
}

function obrazMiniatury(miniatura) {
  'use strict';
  return miniatura.getAttribute('data-url-obrazu');
}

function tytułMiniatury(miniatura) {
  'use strict';
  return miniatura.getAttribute('data-tytuł-obrazu');
}

function zmieńObrazNaPodstMiniatury(miniatura) {
  'use strict';
  zmieńObraz(obrazMiniatury(miniatura), tytułMiniatury(miniatura));
}

function dodajObsługęKliknięciaMiniatury(miniatura) {
  'use strict';
  miniatura.addEventListener('click', function(zdarzenie) {
    zdarzenie.preventDefault();
    zmieńObrazNaPodstMiniatury(miniatura);
  });
}

function odczytajTablicęMiniatur() {
  'use strict';
  var miniatury = document.querySelectorAll(SELEKTOR_MINIATURY);
  var tablicaMiniatur = [].slice.call(miniatury);
  return tablicaMiniatur;
}

function inicjujZdarzenia() {
  'use strict';
  var miniatury = odczytajTablicęMiniatur();
  miniatury.forEach(dodajObsługęKliknięciaMiniatury);
}

inicjujZdarzenia();
