class Planificador {
    
    get lunesInput() {
        return document.getElementById("lunes");
    }

    get lunesList() {
        return document.getElementById("listLunes");
    }

    addLunes() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(this.lunesInput.value));
        this.lunesList.appendChild(li);
        this.lunesInput.value = "";
    }

    get martesInput() {
        return document.getElementById("martes");
    }

    get martesList() {
        return document.getElementById("listMartes");
    }

    addMartes() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(this.martesInput.value));
        this.martesList.appendChild(li);
        this.martesInput.value = "";
    }

    get miercolesInput() {
        return document.getElementById("miercoles");
    }

    get miercolesList() {
        return document.getElementById("listMiercoles");
    }

    addMiercoles() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(this.miercolesInput.value));
        this.miercolesList.appendChild(li);
        this.miercolesInput.value = "";
    }

    get juevesInput() {
        return document.getElementById("jueves");
    }

    get juevesList() {
        return document.getElementById("listJueves");
    }

    addJueves() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(this.juevesInput.value));
        this.juevesList.appendChild(li);
        this.juevesInput.value = "";
    }

    get viernesInput() {
        return document.getElementById("viernes");
    }

    get viernesList() {
        return document.getElementById("listViernes");
    }

    addViernes() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(this.viernesInput.value));
        this.viernesList.appendChild(li);
        this.viernesInput.value = "";
    }

    get sabadoInput() {
        return document.getElementById("sabado");
    }

    get sabadoList() {
        return document.getElementById("listSabado");
    }

    addSabado() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(this.sabadoInput.value));
        this.sabadoList.appendChild(li);
        this.sabadoInput.value = "";
    }

    get domingoInput() {
        return document.getElementById("domingo");
    }

    get domingoList() {
        return document.getElementById("listDomingo");
    }

    addDomingo() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(this.domingoInput.value));
        this.domingoList.appendChild(li);
        this.domingoInput.value = "";
    }
   
}

var plan = new Planificador();