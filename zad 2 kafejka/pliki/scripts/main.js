(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-order="form"]';
    var aplication = window.aplication;
    var Van = aplication.Van;
    var DataBase = aplication.DataBase;
    var FormSupport = aplication.FormSupport;
    var myVan = new Van('ncc-1701', new DataBase());
    window.myVan = myVan;
    var formSupport = new FormSupport(FORM_SELECTOR);
    formSupport.addShipmentSupport(myVan.placeAnOrder.bind(myVan));
    console.log(formSupport);
})(window);