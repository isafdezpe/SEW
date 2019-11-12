class CalculadoraRPN {

    constructor() {
        this.memoria = 0.0;
        this.pila = new Array();
    }

    get input() {
        return document.querySelector('.result');
    }

    clickDivision() {
        if (this.checkSizePila(2)) {
			var divisor = this.pila.pop();
			var dividendo = this.pila.pop();
			this.input.value = parseFloat(dividendo) / parseFloat(divisor);
		}
    }

    clickMult() {
        if (this.checkSizePila(2)) {
			var factor2 = this.pila.pop();
			var factor1 = this.pila.pop();
			this.input.value = parseFloat(factor1) * parseFloat(factor2);
		}
    }

    clickResta() {
        if (this.checkSizePila(2)) {
			var operando2 = this.pila.pop();
			var operando1 = this.pila.pop();
			this.input.value = parseFloat(operando1) - parseFloat(operando2);
		}
    }

    clickSuma() {
        if (this.checkSizePila(2)) {
			var operando2 = this.pila.pop();
			var operando1 = this.pila.pop();
			this.input.value = parseFloat(operando1) + parseFloat(operando2);
		}
    }

    clickNumero(valor) {
        this.input.value += valor.toString();
    }

    clickDecimal() {
        this.input.value += ",";
    }

    clickBorrar() {
        this.input.value = "";
        this.clear();
    }

    clickExpY() {
        if (this.checkSizePila(2)) {
			var operando2 = this.pila.pop();
			var operando1 = this.pila.pop();
			this.input.value = parseFloat(operando1) ^ parseFloat(operando2);
		}
    }

    clickSeno() {
        if (this.checkSizePila(1)) {
			var num = this.pila.pop();
			this.input.value = Math.sin(num);
		}
    }

    clickCoseno() {
        if (this.checkSizePila(1)) {
			var num = this.pila.pop();
			this.input.value = Math.cos(num);
		}
    }

    clickTangente() {
        if (this.checkSizePila(1)) {
			var num = this.pila.pop();
			this.input.value = Math.tan(num);
		}
    }

    clickRaiz() {
        if (this.checkSizePila(1)) {
			var num = this.pila.pop();
			this.input.value = Math.sqrt(num);
		}
    }

    clickLog() {
        if (this.checkSizePila(1)) {
			var num = this.pila.pop();
			this.input.value = Math.log(num);
		}
    }

    clickExp() {
        if (this.checkSizePila(1)) {
            var num = this.pila.pop();
            this.input.value = Math.exp();
        }
    }

    clickEnter() {
        this.pila.push(this.input.value);
		this.input.value = "";
    }

    clear() {
		this.pila = new Array();
    }
    
    checkSizePila(size) {
		return size == this.pila.length;
	}
}

//script
var calculadora = new CalculadoraRPN();