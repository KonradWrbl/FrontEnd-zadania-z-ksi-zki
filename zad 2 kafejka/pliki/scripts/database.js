(function(window) {
    'use strict';
    var aplication = window.aplication || {};

    function dataBase() {
        console.log('Wywołanie funkcji dataBase');
    }
    aplication.dataBase = dataBase;
    window.aplication = aplication;
}) (window);