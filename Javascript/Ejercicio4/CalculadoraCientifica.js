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

class CalculadoraCientifica extends CalculadoraBasica {
    
    clickMc() {
        this.memoria = "0.0";
    }

    clickMr() {
        this.input.value = parseFloat(this.memoria);
    }

    clickMs() {
        this.memoria = this.input.value;
    }

    clickExp2() {
        this.input.value += "**2";
    }

    clickExpY() {
        this.input.value += "**";
    }

    clickSeno() {
        this.input.value = Math.sin(this.input.value);
    }

    clickCoseno() {
        this.input.value = Math.cos(this.input.value);
    }

    clickTangente() {
        this.input.value = Math.tan(this.input.value);
    }

    clickRaiz() {
        this.input.value = Math.sqrt(this.input.value);
    }

    click10Exp() {
        this.input.value += "10**";
    }

    clickLog() {
        this.input.value = Math.log(this.input.value);
    }

    clickExp() {
        this.input.value += "e";
    }

    clickModulo() {
        this.input.value += "%";
    }

    clickFactorial() {
        var total = 1.0;
		for (var i = this.input.value; i > 0; i--)
			total *= i;
		this.input.value = total;
    }

    clickBracket1() {
        this.input.value += "(";
    }

    clickBracket2() {
        this.input.value += ")";
    }
}

//script
var calculadora = new CalculadoraCientifica();