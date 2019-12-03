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
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        if (file.type.startsWith('image/')) {
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(file);
            img.onload = function() {
                context.drawImage(img,5,5);
            }
            
        }
    }
}

var img = new MostrarImagenes();