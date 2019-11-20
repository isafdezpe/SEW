class Meteorologia {

    constructor() {
        this.apikey = "1b5cf3753b57d495a7ed646956c3d6f4";
        this.tipo = "&mode=json";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.apicall = "https://api.openweathermap.org/data/2.5/weather?q=";
        this.correcto = "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>";
    }

    tiempo(ciudad) {
        $("#tiempo" + ciudad).remove();
        $("#error" + ciudad).remove();
        var url = this.apicall + ciudad + this.tipo + this.unidades +
            this.idioma + "&APPID=" + this.apikey;
        this.cargarJson(url, ciudad);
    }

    cargarJson(urlSitio, ciudad) {
        $.ajax({
            dataType: "json",
            url: urlSitio,
            method: 'GET',
            success: function(datos) {
                var content = "<img src=\"http://openweathermap.org/img/w/" +
                    datos.weather[0].icon + ".png\" alt=Tiempo>" +
                    "<ul><li>País: " + datos.sys.country + "</li>" +
                    "<li>Coordenadas: " + datos.coord.lon + ", " + datos.coord.lat + "</li>" +
                    "<li>Tiempo: " + datos.weather[0].description + "</li>" +
                    "<li>Temperatura: " + datos.main.temp + "ºC</li>" +
                    "<li>Temperatura mínima: " + datos.main.temp_min + "ºC</li>" +
                    "<li>Temperatura máxima: " + datos.main.temp_max + "ºC</li>" +
                    "<li>Humedad: " + datos.main.humidity + "%</li>" +
                    "<li>Presión: " + datos.main.pressure + "mb</li>" +
                    "<li>Visibilidad: " + datos.visibility + "</li>" +
                    "<li>Velocidad del viento: " + datos.wind.speed + "m/s</li>" +
                    "<li>Nubosidad: " + datos.clouds.all + "</li>" +
                    "<li>Amanecer: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>" +
                    "<li>Atardecer: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li></ul>";
                $("#" + ciudad).after("<section id='tiempo" + ciudad +"'></section>")
                $("#tiempo" + ciudad).html(content);
            },
            error: function() {
                $("#results").after("<p id='error" + ciudad +"'></p>")
                $("#error" + ciudad).html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
            }
        });

    }

}

var meteo = new Meteorologia();