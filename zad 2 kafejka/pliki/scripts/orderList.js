(function(window) {
    'use strict';
    var aplication = window.aplication || {};
    var $ = window.jQuery;
    function OrderList(selector) {
        if(!selector) {
            throw new Error('Brak selektora');
        }
        this.$element = $(selector);
        if(this.$element.length===0) {
            throw new Error(`Brak elementów odpowiadających selektorowi ${selector}`);
        }
    }

    OrderList.prototype.addVerse = function(order) {
        var verseElement = new verse(order);
        this.$element.append(verseElement.$element);
    };

    function verse(order) {
        var $div = $('<div></div>', {
            'data-order': 'poleWyboru', 'class': 'checkedbox'
        });
        var $label = $('<label></label>');
        var $poleWyboru = $('<input></input>', {
            value: order.email
        });
        var description = order.size + ' ';
        if(order.taste) {
            description += order.taste + ' ';
        }
        description += order.coffe;
        description += ' (' + order.email + ')';
        description += ' [' + order.power + 'x] ';

        $label.apend($poleWyboru);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    aplication.OrderList = OrderList;
    window.aplication = aplication;
}) (window);