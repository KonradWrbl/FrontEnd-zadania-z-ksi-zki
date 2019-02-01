(function(window) {
    'use strict';
    var aplication = window.aplication || {};
    var $ = window.jQuery;
    function OrderList(selector) {
        if(!selector) {
            throw new Error('Brak selektora');
        }
        this.$element = $(selector);
        if(this.$element.length === 0) {
            throw new Error(`Brak elementów odpowiadających selektorowi ${selector}`);
        }
    }

    OrderList.prototype.addClickSupport = function(fn) {
        this.$element.on('click', 'input', function(event) {
            var emailAdres = event.target.value;
            this.removeVerse(emailAdres);
            fn(emailAdres);
        }.bind(this));
    };

    OrderList.prototype.addVerse = function(order) {
        this.removeVerse(order.emailAdres);
        var verseElement = new Verse(order);
        this.$element.append(verseElement.$element);
    };

    OrderList.prototype.removeVerse = function(emailAdres) {
        this.$element
        .find(`[value="${emailAdres}"]`)
        .closest('[data-order="poleWyboru]')
        .remove();
    };

    function Verse(order) {
        var $div = $('<div></div>', {
            'data-order': 'poleWyboru', 'class': 'checkbox'
        });
        var $label = $('<label></label>');
        var $poleWyboru = $('<input></input>', {
            type: 'checkbox', value: order.emailAdres
        });
        var description = order.size + ' ';
        if(order.taste) {
            description += order.taste + ' ';
        }
        description += order.coffe;
        description += ' (' + order.emailAdres + ')';
        description += ' [' + order.moc + 'x] ';

        $label.append($poleWyboru);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    aplication.OrderList = OrderList;
    window.aplication = aplication;
}) (window);