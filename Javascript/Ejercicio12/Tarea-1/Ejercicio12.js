class Geolocalizacion {

    localizar() {
        navigator.geolocation.getCurrentPosition(this.mostrar);
    }

    mostrar(posicion) {
        var loc = document.getElementById("localizacion");
        var content = "<p>Latitud: " + posicion.coords.latitude + " º</p>"
            + "<p>Longitud: " + posicion.coords.longitude + " º</p>"
            + "<p>Precisión de las coordenadas: " + posicion.coords.accuracy + "</p>"
            + "<p>Altitud: " + posicion.coords.altitude + " m</p>"
            + "<p>Precisión de la altitud: " + posicion.coords.altitudeAccuracy + "</p>"
            + "<p>Rumbo: " + posicion.coords.heading + " º</p>"
            + "<p>Velocidad: " + posicion.coords.speed + " m/s</p>";

        loc.innerHTML = content;
    }
}

var geoloc = new Geolocalizacion();