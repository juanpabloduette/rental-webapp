<?php
session_start();
error_reporting(0);
$varsesion = $_SESSION['usuario'];
if ($varsesion == null || $varsesion == '') {
    echo 'Sin autorizacion, redireccionando a pagina de Login';
    // Redireccionar a index.php
    // echo "<div class='content'><div class=''><b>No estas logueado, redireccionando a la pagina de login...</div></div>
    //     ";

    echo '<script>
                setTimeout(function(){ 
                window.location="index.php";
                }, 2000);
            </script>';
    die();
};
// Conectarse a la base de datos (incluyendo tu configuración de conexión PDO)
include 'conexion.php';

// Consulta para obtener las ubicaciones
// $sql = "SELECT latitud, longitud FROM ubicaciones";
// $stmt = $pdo->query($sql);

// Consulta SQL para obtener la última ubicación
$query = "SELECT latitud, longitud FROM ubicaciones ORDER BY id DESC LIMIT 1";
$statement = $pdo->query($query);

// Crear un array para almacenar las ubicaciones
$ubicaciones = [];
while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    $ubicaciones[] = $row;
}

// Devolver las ubicaciones como JSON
header('Content-Type: application/json');
echo json_encode($ubicaciones);
