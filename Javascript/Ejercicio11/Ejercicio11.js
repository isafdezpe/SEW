class DetectorLenguaje {

    constructor() {
        this.apikey = "7e7fe3591bf9b5df1eb21a56265583a7";
        this.apicall = "http://api.languagelayer.com/detect?access_key=" 
            + this.apikey + "&query=";
            this.correcto = "¡Todo correcto! JSON recibido de <a href='https://languagelayer.com/'>LanguageLayer</a>"
    }

    detectar() {
        $("h2").remove();
        $("p").remove();
        var query = $("#detectar").val();
        query = escape(query);
        var url = this.apicall + query;
        this.cargarJson(url);
    }

    cargarJson(urlSite) {
        $.ajax({
            dataType: "json",
            url: urlSite,
            method: 'GET',
            success: function(datos) {
                var lenguaje = datos.results[0].language_code + ", " + datos.results[0].language_name;
                var prob = parseFloat(datos.results[0].probability).toFixed(2);
                $("#detectar").after("<h2>Lenguaje detectado: " + lenguaje 
                + "</h2><p>Probabilidad de acierto (en función de la longitud de la frase): " + prob + "%</p>");
            },
            error: function() {
                $("#detectar").after("<h2>¡Tenemos problemas! No puedo obtener JSON de <a href='https://languagelayer.com/'>LanguageLayer</a></h2>");
            }
        });
    }
}

var det = new DetectorLenguaje();