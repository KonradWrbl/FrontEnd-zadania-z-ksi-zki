var SELEKTOR_DUŻEGO_OBRAZU = '[data-typ-obrazu = "cel"]';
var SELEKTOR_TYTUŁU_OBRAZU = '[data-typ-obrazu = "tytuł"]';
var SELEKTOR_MINIATURY = '[data-typ-obrazu="wyzwalacz"]';
var classHiddenPic = 'ukryty-duży-obraz';
var keyESC = 27;
var SELEKTOR_RAMKI_OBRAZU = '[data-typ-obrazu="ramka"]';
var REGUŁA_MALEGO_OBRAZU = 'bardzo-mały-obraz';

//function changeThumbnailsUrl(miniatury);


function zmieńObraz(urlObrazu, tekstTytułu) {
    'use strict';
    var dużyObraz = document.querySelector(SELEKTOR_DUŻEGO_OBRAZU);
    dużyObraz.setAttribute('src', urlObrazu);
    var tytułObrazu = document.querySelector(SELEKTOR_DUŻEGO_OBRAZU);
    tytułObrazu.textContent = tekstTytułu;
}

function obrazMiniatury(miniatura){
    'use strict';
    return miniatura.getAttribute('data-url-obrazu');
}

function tytułMiniatury(miniatura){
    'use strict';
    return miniatura.getAttribute('data-tytuł-obrazu');
}

function zmieńObrazNaPodstawieMiniatury(miniatura){
    'use strict';
    zmieńObraz(obrazMiniatury(miniatura), tytułMiniatury(miniatura));
}

function dodajObsługęKliknięciaMiniatury(miniatura){
    'use strict';
    miniatura.addEventListener('click', function(zdarzenie){
        zdarzenie.preventDefault();
        zmieńObrazNaPodstawieMiniatury(miniatura);
        showBigPicture();    
    })
}

function odczytajTablicęMiniatur(){
    'use strict';
    var miniatury = document.querySelectorAll(SELEKTOR_MINIATURY);
    var tablicaMiniatur = [].slice.call(miniatury);
    return tablicaMiniatur;
}

function hideBigPicture(){
    'use strict';
    document.body.classList.add(classHiddenPic);
}

function showBigPicture() {
    'use strict';
    var ramka = document.querySelector(SELEKTOR_RAMKI_OBRAZU);
    document.body.classList.remove(classHiddenPic);
    ramka.classList.add(REGUŁA_MALEGO_OBRAZU);
    setTimeout(function() {
        ramka.classList.remove(REGUŁA_MALEGO_OBRAZU);
    }, 50);
    
}

function addKeysOperator() {
    'use strict';
    document.body.addEventListener('keyup', function(e) {
        e.preventDefault();
        console.log(e.keyCode);
        if (e.keyCode === keyESC) {
            hideBigPicture();
        }
    });
}

function inicjujZdarzenia(){
    'use strict';
    var miniatury = odczytajTablicęMiniatur();
    miniatury.forEach(dodajObsługęKliknięciaMiniatury);
    addKeysOperator();

    changeThumbnailsUrl(miniatury);
}

function changeThumbnailsUrl(miniatury){
    var i = Math.floor(Math.random() * 6);
    miniatury[i].setAttribute("data-url-obrazu", "obrazy/wydra5.jpg");
}

inicjujZdarzenia();

