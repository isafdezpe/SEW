class Ejercicio7 {

    ocultarOMostrar() {
        $(".titulo").toggle();
    }

    modificar() {
        $("p").html("Párrafo de ejemplo modificado.");
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

    }

    sumarFilasYCols() {

    }

}

var page = new Ejercicio7();