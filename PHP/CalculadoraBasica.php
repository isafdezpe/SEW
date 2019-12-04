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

            $calc = new CalculadoraBasica();
        ?>
    </body>
</html>