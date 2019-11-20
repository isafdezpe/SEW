class Meteorologia {

    constructor() {
        this.apikey = "1b5cf3753b57d495a7ed646956c3d6f4";
        this.tipo = "&mode=json";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.apicall = "api.openweathermap.org/data/2.5/weather?q=";
        this.correcto = "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>";
    }

    tiempo(ciudad) {
        $("section").remove();
        $("p").remove();
        var url = this.apicall + ciudad + this.tipo + this.unidades 
            + this.idioma + "&APPID=" + this.apikey;
        $("section").insertAfter("#" + ciudad);
        $("p").insertAfter("#" + ciudad);
        this.cargarJson(url);
    }

    cargarJson(urlSitio) {
        $.ajax({
            dataType: "json",
            url: urlSitio,
            method: 'GET',
            success: function(datos) {
                var content = "<img src=\"http://openweathermap.org/img/w/"
                    + datos.weather[0].icon +".png\" alt=Tiempo>" 
                    + "<ul><li>Ciudad: " + datos.name + "</li>"
                    + "<li>País: " + datos.sys.country + "</li>"
                    + "<li>Coordenadas: " + datos.coord.lon + ", " + datos.coord.lat + "</li>"
                    + "<li>Tiempo: " + datos.weather[0].main + ", " + datos.weather[0].description + "</li>"
                    + "<li>Temperatura: " + datos.main.temp + "</li>"
                    + "<li>Temperatura mínima: " + datos.main.temp_min + "</li>"
                    + "<li>Temperatura máxima: " + datos.main.temp_max + "</li>"
                    + "<li>Humedad: " + datos.main.humidity + "</li>"
                    + "<li>Presión: " + datos.main.pressure + "</li>"
                    + "<li>Visibilidad: " + datos.visibility + "</li>"
                    + "<li>Velocidad y dirección del viento: " + datos.wind.speed + ", " + datos.wind.deg + "</li>"
                    + "<li>Nubosidad: " + datos.cloud.all + "</li>"
                    + "<li>Amanecer: " + datos.sys.sunrise + "</li>"
                    + "<li>Atardecer: " + datos.sys.sunset + "</li></ul>";
                $("section").html(content);
            },
            error: function() {
                $("p").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
            }
        });
        
    }

}

var meteo = new Meteorologia();