class MapaKML {

    initMap() {
        var mapOptions = {
            zoom: 7,
            center: new google.maps.LatLng(43.370027,-5.8835068),
            mapTypeId: "terrain"
        };
        this.map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
    }

    cargarKml(files) {
        var archivo = files[0];

        var parser = new geoXML3.parser({
            map: this.map,
            singleInfoWindow: true,
            afterParse: this.useTheData
        });

        var reader = new FileReader();
        reader.onload = function (event) {
                var text = reader.result;
                parser.parseKmlString(text);
            }
            reader.readAsText(archivo);
    }

}

var kml = new MapaKML();