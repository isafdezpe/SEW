<!DOCTYPE HTML>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 3</title>
        <meta name="author" content="UO257829">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" type="text/css" href="CalculadoraRPN.css" />
    </head>
    <body>
        <?php 
            class Pila {

                private $pila;

                public function __construct() {
                    $this->pila = array();
                }

                public function push($v){
                    $this->pila[] = $v;
                }

                public function pop(){
                    return array_pop($this->pila);
                }

                public function isEmpty(){
                    return empty($this->pila);
                }

                public function length(){
                    return count($this->pila);
                }

                public function peek(){
                    return $this->pila[($this->length() - 1)];
                }

            }

            class CalculadoraRPN {

                protected $res = "";

                public function __construct() {
                    session_start();
                    $this->cambiarOperacion();
                }

                public function getPila() {
                    if (!isset($_SESSION["pila"])) {
                        $_SESSION["pila"] = new Pila();
                    }
                    return $_SESSION["pila"];
                }

                public function getResultado() {
                    return $this->res;
                }

                private function getMemoria() {
                    if (!isset($_SESSION["memoria"])) {
                        $_SESSION["memoria"] = 0;
                    }
                    return $_SESSION["memoria"];
                }

                protected function cambiarOperacion() {
                    $this->accion();
                    $this->borrar();
                    $this->apilar();
                    $this->mrc();
                    $this->mMas();
                    $this->mMenos();
                    $this->suma();
                    $this->resta();
                    $this->mult();
                    $this->div();
                    $this->exp2();
                    $this->exp10();
                    $this->log();
                    $this->sqrt();
                    $this->sin();
                    $this->cos();
                    $this->tan();
                    $this->factorial();
                }

                private function accion() {
                    if (!isset($_POST["accion"])) {
                        $this->res = $_POST["operacion"] . $_POST["accion"];
                    }
                }

                private function borrar() {
                    if (!isset($_POST["borrar"])) {
                        $this->clear();
                    }
                }

                private function clear() {
                    $this->res = "";
                }

                private function apilar() {
                    if (isset($_POST["apilar"])) {
                        $this->getPila()->push($_POST["operacion"]);
                        $this->clear();
                    }
                }

                private function checkSizePila($number) {
                    echo $this->getPila()->length();
                    return $number <= $this->getPila()->length();
                }

                private function mrc() {
                    if (!isset($_POST["mrc"])) {
                        $this->res = $this->getMemoria();
                    }
                }

                private function mMas() {
                    if (isset($_POST["m+"])) {
                        $valorMemoria = $this->getMemoria();
                        $numero = (float)$_POST["operacion"];
                        $valor = $valorMemoria + $numero;
                        $_SESSION["memoria"] = $valor;
                        $this->borrar();
                    }
                }
        
                private function mMenos() {
                    if (isset($_POST["m-"])) {
                        $valorMemoria = (float)$this->getMemoria();
                        $numero = (float)$_POST["operacion"];
                        $valor = $valorMemoria - $numero;
                        $_SESSION["memoria"] = $valor;
                        $this->borrar();
                    }
                }

                private function suma() {
                    if (isset($_POST["mas"]) && $this->checkSizePila(2)) {
                        $operando2 = $this->getPila()->pop();
                        $operando1 = $this->getPila()->pop();
                        $this->res = $operando1 + $operando2;
                    }
                }
        
                private function resta() {
                    if (isset($_POST["menos"]) && $this->checkSizePila(2)) {
                        $operando2 = $this->getPila()->pop();
                        $operando1 = $this->getPila()->pop();
                        $this->res = $operando1 - $operando2;
                    }
                }
        
                private function mult() {
                    if (isset($_POST["mult"]) && $this->checkSizePila(2)) {
                        $operando2 = $this->getPila()->pop();
                        $operando1 = $this->getPila()->pop();
                        $this->res = $operando1 * $operando2;
                    }
                }
        
                private function div() {
                    if (isset($_POST["div"]) && $this->checkSizePila(2)) {
                        $operando2 = $this->getPila()->pop();
                        $operando1 = $this->getPila()->pop();
                        $this->res = $operando1 / $operando2;
                    }
                }

                private function sin() {
                    if (isset($_POST["sin"])) {
                        $this->res = sin($_POST["operacion"]);
                    }
                }
        
                private function cos() {
                    if (isset($_POST["cos"])) {
                        $this->res = cos($_POST["operacion"]);
                    }
                }
        
                private function tan() {
                    if (isset($_POST["tan"])) {
                        $this->res = tan($_POST["operacion"]);
                    }
                }
        
                private function exp2() {
                    if (isset($_POST["exp2"])) {
                        $this->exp($_POST["operacion"], 2);
                    }
                }
        
                private function exp10() {
                    if (isset($_POST["exp10"])) {
                        $this->exp(10, $_POST["operacion"]);
                    }
                }
        
                private function sqrt() {
                    if (isset($_POST["sqrt"])) {
                        $this->res = sqrt((float)$_POST["operacion"]);
                    }
                }
        
                private function log() {
                    if (isset($_POST["log"])) {
                        $this->res = log10((float)$_POST["operacion"]);
                    }
                }
        
                private function factorial() {
                    if (isset($_POST["factorial"]) && isset($_POST["operacion"])) {
                        $numero = (int) $_POST["operacion"];
        
                        $total=1;
                        for ($i = $numero; $i > 0; $i--) {
                            $total=$total * $i;
                        }
        
                        $this->res = $total;
                    }
                }
        
                private function exp($base, $exp) {
                    $this->res = pow((float)$base, (float)$exp);
                }
                
            }

            $calculadora = new CalculadoraRPN();
        ?>
        <h1>Calculadora básica</h1>
        <form action="#" method="post" name="calculadora"> 
            <input class="result" name="operacion" type="text" readonly
                value="<?php echo $calculadora->getResultado() ?>"/>
            <div>
                <button class="m" type="submit" name="mrc" value="mrc">mrc</button>
                <button class="m" type="submit" name="m+" value="m+">m+</button>
                <button class="m" type="submit" name="m-" value="m-">m-</button>
                <button class="op" type="submit" name="exp2" value="**2">x&#178;</button>
                <button class="op" type="submit" name="accion" value="**">x^y</button>
            </div>
            <div>
                <button class="op" type="submit" name="sin" value="sin">sin</button>
                <button class="op" type="submit" name="cos" value="cos">cos</button>
                <button class="op" type="submit" name="tan" value="tan">tan</button>
                <button class="op" type="submit" name="log" value="log">log</button>
                <button class="op" type="submit" name="exp10" value="10**">10^x</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="7">7</button>
                <button class="number" type="submit" name="accion" value="8">8</button>
                <button class="number" type="submit" name="accion" value="9">9</button>
                <button class="op" type="submit" name="sqrt" value="sqrt">&#8730;</button>
                <button class="op" type="submit" name="factorial" value="x!">x!</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="4">4</button>
                <button class="number" type="submit" name="accion" value="5">5</button>
                <button class="number" type="submit" name="accion" value="6">6</button>
                <button class="op" type="submit" name="div" value="/">/</button>
                <button class="op" type="submit" name="mult" value="*">*</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="1">1</button>
                <button class="number" type="submit" name="accion" value="2">2</button>
                <button class="number" type="submit" name="accion" value="3">3</button>
                <button class="op" type="submit" name="mas" value="+">+</button>
                <button class="op" type="submit" name="menos" value="-">-</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="0">0</button>
                <button class="number" type="submit" name="accion" value=".">.</button>
                <button id="delete" type="submit" name="borrar" value="C">C</button>
                <button id="equals" type="submit" name="igual" value="=">=</button>
            </div>
        </form>
        <footer>
            <a href="https://validator.w3.org/check?uri=referer"><img
                src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                alt="HTML5 Válido" height="64" width="63" /></a>
            <a href=" http://jigsaw.w3.org/css-validator/check/referer ">
                <img src=" http://jigsaw.w3.org/css-validator/images/vcss"
                alt="Valid CSS!" height="31" width="88" /></a>
        </footer>
    </body>
</html>