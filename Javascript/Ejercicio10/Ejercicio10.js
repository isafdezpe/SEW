class CambioDivisas {

    constructor() {
        this.apikey = "e4e8ff42fb150611aec892e471ff09f2";
        this.url = "http://www.apilayer.net/api/live?access_key=" + this.apikey;
        this.correcto = "¡Todo correcto! JSON recibido de <a href='https://currencylayer.com/'>CurrencyLayer</a>"
    }

    convertir() {
        $("#error").remove();
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos) {
                for (var cambio in datos.quotes) {
                    switch (cambio) {
                        case "USDEUR":
                            this.dolar = $("#euro").val() / parseFloat(datos.quotes[cambio]);
                            $("#usd").val(this.dolar);
                            break;
                    }
                }
                for (var cambio in datos.quotes) {
                    switch (cambio) {
                        case "USDGBP":
                            $("#libra").val(parseFloat(this.dolar * datos.quotes[cambio]));
                            break;
                        case "USDAUD":
                            $("#aud").val(parseFloat(this.dolar * datos.quotes[cambio]));
                            break;
                        case "USDJPY":
                            $("#yen").val(parseFloat(this.dolar * datos.quotes[cambio]));
                            break;
                        case "USDCHF":
                            $("#fr").val(parseFloat(this.dolar * datos.quotes[cambio]));
                            break;
                    }
                }
            },
            error: function() {
                $("table").after("<p id='error'>¡Tenemos problemas! No puedo obtener JSON de <a href='https://currencylayer.com/'>CurrencyLayer</a></p>");
            }
        });
    }

}

var cambio = new CambioDivisas();