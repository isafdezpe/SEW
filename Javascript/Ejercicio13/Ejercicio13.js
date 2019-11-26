class CargaArchivos {

    cargar(files) {
        var archivo = files[0];
        var content = "<p>Nombre de archivo: " + archivo.name + "</p>"
            + "<p>Tipo de archivo: " + archivo.type + "</p>"
            + "<p>Tamaño de archivo: " + archivo.size + "B</p>"
            + "<p>Última modificación: " + archivo.lastModifiedDate + "</p>";

        var propiedades = document.getElementById("propiedades");
        propiedades.innerHTML = content;

        var contenido = document.getElementById("contenido");

        if (archivo.type.match("text/plain") || archivo.type.match("application/json")
            || archivo.type.match("text/xml")) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    contenido.innerHTML = "<h3>Contenido del archivo:</h3><p>"
                        + reader.result + "</p>";
                };
                reader.readAsText(archivo);
        }
    }

}

var file = new CargaArchivos();