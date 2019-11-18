"use strict";
class CalculadoraBasica {

    constructor() {
        this.memoria = 0.0;
    }

    get input() {
        return document.querySelector('.result');
    }

    clickMrc() {
        this.input.value = parseFloat(this.memoria);
    }

    clickMMas() {
        this.memoria += this.input.value;
        this.clickBorrar();
    }

    clickMMenos() {
        this.memoria -= this.input.value;
        this.clickBorrar();
    }

    clickDivision() {
        this.input.value += "/";
    }

    clickMult() {
        this.input.value += "*";
    }

    clickResta() {
        this.input.value += "-";
    }

    clickSuma() {
        this.input.value += "+";
    }

    clickNumero(valor) {
        this.input.value += valor.toString();
    }

    clickDecimal() {
        this.input.value += ",";
    }

    clickBorrar() {
        this.input.value = "";
    }

    clickIgual() {
        if (this.input.value == "")
            this.input.value = "0";
        else
            this.input.value = eval(this.input.value);
    }

}

//script
var calculadora = new CalculadoraBasica();