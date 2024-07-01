<?php
session_start();


if (isset($_POST['usuario']) && !empty($_POST['usuario']) && isset($_POST['password']) && !empty($_POST['password'])) {

    function limpiar_cadena($cadena)
    {
        $cadena = trim($cadena);
        $cadena = stripslashes($cadena);
        $cadena = str_ireplace("<script>", "", $cadena);
        $cadena = str_ireplace("</script>", "", $cadena);
        $cadena = str_ireplace("<script src", "", $cadena);
        $cadena = str_ireplace("<script type=", "", $cadena);
        $cadena = str_ireplace("SELECT * FROM", "", $cadena);
        $cadena = str_ireplace("DELETE FROM", "", $cadena);
        $cadena = str_ireplace("INSERT INTO", "", $cadena);
        $cadena = str_ireplace("DROP TABLE", "", $cadena);
        $cadena = str_ireplace("DROP DATABASE", "", $cadena);
        $cadena = str_ireplace("TRUNCATE TABLE", "", $cadena);
        $cadena = str_ireplace("SHOW TABLES;", "", $cadena);
        $cadena = str_ireplace("SHOW DATABASES;", "", $cadena);
        $cadena = str_ireplace("<?php", "", $cadena);
        $cadena = str_ireplace("?>", "", $cadena);
        $cadena = str_ireplace("--", "", $cadena);
        $cadena = str_ireplace("^", "", $cadena);
        $cadena = str_ireplace("<", "", $cadena);
        $cadena = str_ireplace("[", "", $cadena);
        $cadena = str_ireplace("]", "", $cadena);
        $cadena = str_ireplace("==", "", $cadena);
        $cadena = str_ireplace(";", "", $cadena);
        $cadena = str_ireplace("::", "", $cadena);
        $cadena = trim($cadena);
        $cadena = stripslashes($cadena);
        return $cadena;
    }

    function sanitizing_filter($string)
    {
        $pattern = '/(DROP TABLE|SELECT \* FROM|TRUNCATE TABLE|SHOW TABLES|\<|==|\s|\<?php|\?|\/|--|\:|\;|script|\>|\^|\[|\]|DELETE FROM|INSERT INTO|DROP DATABASE|SHOW DATABASE)/i';
        $string =  preg_replace($pattern, '', $string);
        return  $string;
    }

    // $usuario = $_POST['usuario'];
    // $password = $_POST['password'];
    // $usuario = limpiar_cadena($_POST['usuario']);
    // $password = limpiar_cadena($_POST['password']);
    $usuario = sanitizing_filter($_POST['usuario']);
    $password = sanitizing_filter($_POST['password']);
    $_SESSION['usuario'] = $usuario;
    require "conexion.php";
    $consulta = $pdo->prepare("SELECT * FROM usuarios WHERE nom_usuario = :usuario AND password = :password");
    $consulta->execute(['usuario' => $usuario, 'password' => $password]);
    // $consulta = $pdo->prepare("SELECT * FROM usuarios WHERE nom_usuario = '$usuario' AND password = '$password'");
    // $consulta->execute();

    $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);



    if (empty($resultado)) {
        echo json_encode(array('success' => 0));
        // si no hay resultados es 0
    } else {
        echo json_encode(array('success' => 1));
    };
} else {
    echo json_encode(array('success' => 123));
    // echo'<script type="text/javascript">
    // alert("VACIO");
    // </script>';
};
