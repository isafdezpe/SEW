class MostrarImagenes {

    cargar(files) {
        var file = files[0];
        this.mostrarImagen(file);
    }

    dropHandler(event) {
        event.stopPropagation();
        event.preventDefault();
        var file = event.dataTransfer.files[0];
        this.mostrarImagen(file);
    }

    dragOverHandler(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "move"
    }

    mostrarImagen(file) {
        var window = document.defaultView;
        var div = document.getElementById("img-div")
        if (file.type.startsWith('image/')) {
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(file);
            img.onload = function() {
                window.URL.revokeObjectURL(this.src);
            }
            div.appendChild(img);
        }
    }
}

var img = new MostrarImagenes();