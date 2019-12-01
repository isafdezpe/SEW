class Mapa {

    constructor() {
        this.latitud = 43.3694815;
        this.longitud = -5.8836772;
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
        this.map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
    }

    mostrarGijon() {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.525867, -5.662282), map: this.map});
    }

    mostrarOviedo() {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.370027,-5.8835068), map: this.map});
    }

    mostrarAviles() {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.555637, -5.922807), map: this.map});
    }

    mostrarSiero() {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.392329, -5.659687), map: this.map});
    }

    mostrarLangreo() {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.304240, -5.694636), map: this.map});
    }

    mostrarCangas() {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.1779539,-6.5521437), map: this.map});
    }

}

var miMapa = new Mapa();