class Meteorologia {

    constructor() {
        this.apikey = "1b5cf3753b57d495a7ed646956c3d6f4";
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.apicall = "https://api.openweathermap.org/data/2.5/weather?q=";
        this.correcto = "¡Todo correcto! XML recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>";
    }

    tiempo(ciudad) {
        var url = this.apicall + ciudad + this.tipo + this.unidades +
            this.idioma + "&APPID=" + this.apikey;
        this.cargarJson(url, ciudad);
    }

    cargarJson(urlSitio, ciudad) {
        $.ajax({
            dataType: "xml",
            url: urlSitio,
            method: 'GET',
            success: function(datos) {
                var content = "<img src=\"http://openweathermap.org/img/w/" +
                    $('weather', datos).attr("icon") + ".png\" alt=Tiempo>" +
                    "<ul><li>País: " + $('country', datos).text() + "</li>" +
                    "<li>Coordenadas: " + $('coord', datos).attr("lon") + ", " + $('coord', datos).attr("lat") + "</li>" +
                    "<li>Tiempo: " + $('weather', datos).attr("value") + "</li>" +
                    "<li>Temperatura: " + $('temperature', datos).attr("value") + $('temperature', datos).attr("unit") + "</li>" +
                    "<li>Temperatura mínima: " + $('temperature', datos).attr("min") + $('temperature', datos).attr("unit") + "</li>" +
                    "<li>Temperatura máxima: " + $('temperature', datos).attr("max") + $('temperature', datos).attr("unit") + "</li>" +
                    "<li>Humedad: " + $('humidity', datos).attr("value") + $('humidity', datos).attr("unit") + "</li>" +
                    "<li>Presión: " + $('pressure', datos).attr("value") + $('pressure', datos).attr("unit") + "</li>" +
                    "<li>Visibilidad: " + $('visibility', datos).attr("value") + "</li>" +
                    "<li>Viento: " + $('speed', datos).attr("value") + $('speed', datos).attr("unit") + " " + $('speed', datos).attr("name") + "</li>" +
                    "<li>Dirección del viento: " + $('direction', datos).attr("value") + ", " + $('direction', datos).attr("name") + "</li>" +
                    "<li>Nubosidad: " + $('clouds', datos).attr("value") + ", " + $('clouds', datos).attr("name") + "</li>" +
                    "<li>Amanecer: " + new Date($('sun', datos).attr("rise")).toLocaleTimeString() + "</li>" +
                    "<li>Atardecer: " + new Date($('sun', datos).attr("set")).toLocaleTimeString() + "</li></ul>";
                $("#" + ciudad).html(content);
            },
            error: function() {
                $("#" + ciudad).html("<p>¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>");
            }
        });

    }

}

var meteo = new Meteorologia();