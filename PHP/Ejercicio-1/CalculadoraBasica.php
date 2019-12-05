<!DOCTYPE HTML>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 1</title>
        <meta name="author" content="UO257829">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" type="text/css" href="CalculadoraBasica.css" />
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

            $calculadora = new CalculadoraBasica();
        ?>
        <h1>Calculadora básica</h1>
        <form action="#" method="post" name="calculadora"> 
            <input class="result" name="operacion" type="text" readonly
                value="<?php echo $calculadora->getResultado() ?>"/>
            <div>
                <button class="m" type="submit" name="mrc" value="mrc">mrc</button>
                <button class="m" type="submit" name="m" value="m+">m+</button>
                <button class="m" type="submit" name="m" value="m-">m-</button>
                <button class="op" type="submit" name="accion" value="/">/</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="7">7</button>
                <button class="number" type="submit" name="accion" value="8">8</button>
                <button class="number" type="submit" name="accion" value="9">9</button>
                <button class="op" type="submit" name="accion" value="*">*</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="4">4</button>
                <button class="number" type="submit" name="accion" value="5">5</button>
                <button class="number" type="submit" name="accion" value="6">6</button>
                <button class="op" type="submit" name="accion" value="-">-</button>
            </div>
            <div>
                <button class="number" type="submit" name="accion" value="1">1</button>
                <button class="number" type="submit" name="accion" value="2">2</button>
                <button class="number" type="submit" name="accion" value="3">3</button>
                <button class="op" type="submit" name="accion" value="+">+</button>
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