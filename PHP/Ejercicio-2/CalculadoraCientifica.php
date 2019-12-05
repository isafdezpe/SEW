<!DOCTYPE HTML>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 2</title>
        <meta name="author" content="UO257829">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" type="text/css" href="CalculadoraCientifica.css" />
    </head>
    <body>
        <?php 
            class CalculadoraBasica {

                protected $res = "";

                public function __construct() {
                    session_start();
                    $this->cambiarOperacion();
                }

                private function exists() {
                    return session_status() === PHP_SESSION_ACTIVE;
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
                    $this->mrc();
                    $this->m();
                    $this->calcular();
                }

                private function accion() {
                    if (!isset($_POST["accion"])) {
                        $this->res = $_POST["operacion"] . $_POST["accion"];
                    }
                }

                private function borrar() {
                    if (!isset($_POST["borrar"])) {
                        $this->res = "";
                    }
                }

                private function mrc() {
                    if (!isset($_POST["mrc"])) {
                        $this->res = $this->getMemoria();
                    }
                }

                private function m() {
                    if (!isset($_POST["m"])) {
                        $valorMemoria = $this->getMemoria();
                        $numero = (int)$_POST["operacion"];
                        $valor = $valorMemoria . $_POST["m"] . $numero;
                        $_SESSION["memoria"] = eval("return $valor;");
                        $this->borrar();
                    }
                }

                private function calcular() {
                    if (!isset($_POST["igual"])) {
                        try {
                            $valor = $_POST["operacion"];
                            $this->res = eval("return $valor;");
                        } catch (Exception $e) {
                            $this->res = "Error";
                        }
                    }
                }
            }

            class CalculadoraCientifica extends CalculadoraBasica {

                protected function cambiarOperacion() {
                    parent::cambiarOperacion();
                    $this->exp2();
                    $this->expE();
                    $this->exp10();
                    $this->log();
                    $this->sqrt();
                    $this->sin();
                    $this->cos();
                    $this->tan();
                    $this->factorial();
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
        
                private function expE() {
                    if (isset($_POST["expE"])) {
                        $this->res = exp($_POST["operacion"]);
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

            $calculadora = new CalculadoraCientifica();
        ?>
        <h1>Calculadora básica</h1>
        <form action="#" method="post" name="calculadora"> 
            <input class="result" name="operacion" type="text" readonly
                value="<?php echo $calculadora->getResultado() ?>"/>
            <div>
                <button class="m" type="submit" name="mrc" value="mrc">mrc</button>
                <button class="m" type="submit" name="m" value="m+">m+</button>
                <button class="m" type="submit" name="m" value="m-">m-</button>
                <button class="op" type="submit" name="accion" value="**2">x&#178;</button>
                <button class="op" type="submit" name="accion" value="**">x^y</button>
            </div>
            <div>
                <button class="op" type="submit" name="accion" value="sin">sin</button>
                <button class="op" type="submit" name="accion" value="cos">cos</button>
                <button class="op" type="submit" name="accion" value="tan">tan</button>
                <button class="op" type="submit" name="accion" value="log">log</button>
                <button class="op" type="submit" name="accion" value="10**">10^x</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="7">7</button>
                <button class="number" type="submit" name="accion" value="8">8</button>
                <button class="number" type="submit" name="accion" value="9">9</button>
                <button class="op" type="submit" name="accion" value="sqrt">&#8730;</button>
                <button class="op" type="submit" name="accion" value="x!">x!</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="4">4</button>
                <button class="number" type="submit" name="accion" value="5">5</button>
                <button class="number" type="submit" name="accion" value="6">6</button>
                <button class="op" type="submit" name="accion" value="/">/</button>
                <button class="op" type="submit" name="accion" value="*">*</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="1">1</button>
                <button class="number" type="submit" name="accion" value="2">2</button>
                <button class="number" type="submit" name="accion" value="3">3</button>
                <button class="op" type="submit" name="accion" value="+">+</button>
                <button class="op" type="submit" name="accion" value="-">-</button>
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