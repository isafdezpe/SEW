class Geolocalizacion {

    constructor() {
        this.latitud = 40.4167;
        this.longitud = -3.70325;
    }

    localizar() {
        navigator.geolocation.getCurrentPosition(this.mostrar, this.error);
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

    initMap() {
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(this.latitud, this.longitud)
        };
        var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
        var marker = new google.maps.Marker({position: mapOptions.center, map: map});
    }
}

var geoloc = new Geolocalizacion();