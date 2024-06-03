<?php
session_start();


if (isset($_POST['usuario']) && !empty($_POST['usuario']) && isset($_POST['password']) && !empty($_POST['password'])) {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
    $_SESSION['usuario'] = $usuario;
    require "conexion.php";
    $consulta = $pdo->prepare("SELECT * FROM usuarios WHERE nom_usuario = '$usuario' AND password = '$password'");
    $consulta->execute();

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
