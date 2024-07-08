<?php
session_start();
require "conexion.php";

if (isset($_POST['usuario']) && !empty($_POST['usuario']) && isset($_POST['password']) && !empty($_POST['password'])) {

    $usuario = filter_input(INPUT_POST, 'usuario', FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_SPECIAL_CHARS);

    $consulta = $pdo->prepare("SELECT * FROM usuarios WHERE nom_usuario = :usuario");
    $consulta->execute(['usuario' => $usuario]);
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);

    if ($resultado) {
        $hash_guardado = $resultado['password'];

        // Verificar la contraseña utilizando password_verify
        if (password_verify($password, $hash_guardado)) {
            // Contraseña válida, iniciar sesión
            $_SESSION['usuario'] = $usuario;
            echo json_encode(['success' => 1]);
        } else {
            // Contraseña incorrecta
            echo json_encode(['success' => 0]);
        }
    } else {
        // Usuario no encontrado en la base de datos
        echo json_encode(['success' => 0]);
    }
} else {
    // Datos de usuario o contraseña vacíos
    echo json_encode(['success' => 123]);
}
