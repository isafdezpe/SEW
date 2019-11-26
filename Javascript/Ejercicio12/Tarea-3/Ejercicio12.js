class Geolocalizacion {

    localizar() {
        navigator.geolocation.getCurrentPosition(this.mostrar, this.error);
    }

    mostrar(posicion) {
        var loc = document.getElementById("localizacion");
        var mapurl = "https://maps.google.com/maps/api/staticmap?center=" 
            + posicion.coords.latitude + "," + posicion.coords.longitude
            + "&zoom=15&size=400x400&sensor=false&markers="
            + posicion.coords.latitude + "," + posicion.coords.longitude 
            + "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU&callback=initMap";
        var content = "<p>Latitud: " + posicion.coords.latitude + " º</p>"
            + "<p>Longitud: " + posicion.coords.longitude + " º</p>"
            + "<p>Precisión de las coordenadas: " + posicion.coords.accuracy + "</p>"
            + "<p>Altitud: " + posicion.coords.altitude + " m</p>"
            + "<p>Precisión de la altitud: " + posicion.coords.altitudeAccuracy + "</p>"
            + "<p>Rumbo: " + posicion.coords.heading + " º</p>"
            + "<p>Velocidad: " + posicion.coords.speed + " m/s</p>"
            + "<img src='" + mapurl + "'>";
        
        loc.innerHTML = content;
    }

    error(error) {
        var loc = document.getElementById("localizacion");
        var content = "<p>";
        switch(error.code) {
            case (error.PERMISSION_DENIED):
                content += "Permiso para utilizar la ubicación denegado</p>";
                break;
            case(error.POSITION_UNAVAILABLE):
                content += "Información de geolocalización no disponible</p>";
                break;
            case(error.POSITION_UNAVAILABLE):
                content += "Petición de geolocalización caducada</p>";
                break;  
            default:
                content += "Se ha producido un error</p>";
                break;
        }
        loc.innerHTML = content;
    }
}

var geoloc = new Geolocalizacion();