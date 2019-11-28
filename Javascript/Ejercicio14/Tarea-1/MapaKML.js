class MapaKML {

    initMap() {
        var mapOptions = {
            zoom: 7,
            center: new google.maps.LatLng(40.4167, -3.70325),
            mapTypeId: "terrain"
        };
        var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
        
        var kmlLayer = new google.maps.KmlLayer("rutas.kml", {
            suppressInfoWindows: true,
            preserveViewport: false,
            map: map
        });
    }

}

var kml = new MapaKML();