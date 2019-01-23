(function(window) {
    'use strict';
    var aplication = window.aplication || {};

    function DataBase() {
        this.data = {}
    } 

    DataBase.prototype.add = function(key, value) {
        return this.data[key] = value;
    };

    DataBase.prototype.download = function(key) {
        this.data.data[key];
    };

    DataBase.prototype.downloadAll = function() {
        return this.data;
    };

    DataBase.prototype.delete = function(key) {
        delete this.data[key];
    };

    aplication.DataBase = DataBase;
    window.aplication = aplication;
}) (window);