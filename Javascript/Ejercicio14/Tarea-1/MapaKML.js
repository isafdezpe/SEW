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
        var tipo = "application/vnd.google-earth.kml+xml";

        var parser = new geoXML3.parser({
            map: this.map,
            singleInfoWindow: true,
            afterParse: this.useTheData
        });

        if (archivo.type == tipo) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var text = reader.result;

                parser.fetchXML = function (url, callback) {
                    function timeoutHandler() {
                        callback();
                    };
                    $.ajax({
                        type: "GET",
                        url: url,
                        success: function (xml) {
                            callback(xml);
                        }
                    });
                };

                parser.parseKmlString(text);
            }
            lector.readAsText(archivo);
        }
    }

}

var kml = new MapaKML();