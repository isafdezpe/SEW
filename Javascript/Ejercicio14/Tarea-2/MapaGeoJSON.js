class MapaGeoJSON {

    initMap() {
        var mapOptions = {
            zoom: 7,
            center: new google.maps.LatLng(43.370027,-5.8835068),
            mapTypeId: "terrain"
        };
        this.map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
    }

    cargarGeoJson(files) {
        var archivo = files[0];

        var reader = new FileReader();
        reader.onload = function (event) {
                var text = reader.result;
                geojson.map.data.loadGeoJson("data:,"+text);
            }
            reader.readAsText(archivo);
    }
}

var geojson = new MapaGeoJSON();