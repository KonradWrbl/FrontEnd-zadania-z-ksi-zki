(function(window) {
    'use strict';
    var ORDER_LIST_SELECTOR = '[data-order ="orderList"]';
    var FORM_SELECTOR = '[data-order="form"]';
    var aplication = window.aplication;
    var Van = aplication.Van;
    var DataBase = aplication.DataBase;

    orderList.addClickSupport(myVan.completeOrder.bind(myVan));

    var FormSupport = aplication.FormSupport;
    var myVan = new Van('ncc-1701', new DataBase());
    var OrderList = aplication.OrderList;

    window.myVan = myVan;

    var orderList = new OrderList(ORDER_LIST_SELECTOR);
    var formSupport = new FormSupport(FORM_SELECTOR);
    formSupport.addShipmentSupport(function(data) {
        myVan.placeAnOrder.call(myVan, data);
        orderList.addVerse.call(orderList, data);
    });
    
})(window);