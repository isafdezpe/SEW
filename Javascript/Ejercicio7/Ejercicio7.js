class Ejercicio7 {

    ocultarOMostrar() {
        $(".titulo").toggle();
    }

    modificar() {
        $(".parrafo").html("Párrafo de ejemplo modificado.");
    }

    añadir() {
        var content = "<ul><li>Elemento 1 de lista</li>"
            + "<li>Elemento 2 de lista</li>"
            + "<li>Elemento 3 de lista</li></ul>"
        $(content).insertBefore("#input1");
    }

    borrar() {
        $(".col-borrar").remove();
    }

    mostrarElementos() {
        $("*", document.body).each(function() {
            var elemento = $(this).get(0).tagName;
            var padre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("Padre: <" + padre + 
            ">, elemento: <" + elemento + ">, valor:"));
        });
    }

    sumarFilasYCols() {
        var numFilas = $("table tr").length;
        var numCols = $("table tr th").length;
        var content = "<p>Filas: " + numFilas 
            + "</p><p>Columnas: " + numCols + "</p>";
        $(content).insertAfter("table");
    }

}

var page = new Ejercicio7();