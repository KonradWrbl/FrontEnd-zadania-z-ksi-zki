(function(window) {
    var aplication = window.aplication || {};
    var $ = window.jQuery;
    function FormSupport(selector) {
        if(!selector) {
            throw new Error('Brak selektora');
        }
        this.$formElement = $(selector);
        if(this.$formElement.length === 0) {
            throw new Error(`Brak elementów odpowiadających selektorowi'${selector}'`);
        }
    }

    FormSupport.prototype.addShipmentSupport = function(fn) {
        console.log('Utworzenie zdażenia submit formularza');
        this.$formElement.on('submit', function(e) {
            e.preventDefault();
            var data = {};
            $(this).serializeArray().forEach(function(e) {
                data[e.name] = e.value;
                console.log(`Element '${e.name}' ma wartość '${e.value}'`);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    aplication.FormSupport = FormSupport;
    window.aplication = aplication;

}) (window);