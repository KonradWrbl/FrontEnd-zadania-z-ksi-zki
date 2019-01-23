(function(window) {
    'use strict';
    var aplication = window.aplication || {};

    function Van(id, DataBase) {
        this.id = id;
        this.DataBase = DataBase;
    }

    Van.prototype.placeAnOrder = function(order) {
        console.log(`Złożenie zamówienia dla '${order.email}'`);
        this.DataBase.add(order.email, order);
    };

    Van.prototype.completeOrder = function(clientsId) {
        console.log(`Zrealizowane zamówienie dla '${clientsId}'`);
        this.DataBase.delete(clientsId);
    };

    Van.prototype.printOreder = function() {
        var tabOfClients = Object.keys(this.DataBase.downloadAll());
        console.log(`Furgonetka nr '${this.id}' ma niezrealizowane zamówienia:`);
        tabOfClients.forEach(function(id) {
            console.log(this.DataBase.download(id));
        }.bind(this));
    };

    aplication.Van = Van;
    window.aplication = aplication
}) (window);