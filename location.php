<?php
// ubicacion.php

// Incluir el archivo de conexión
include 'conexion.php';

// Obtener los datos de ubicación del cuerpo de la solicitud
$data = file_get_contents('php://input');
$json_data = json_decode($data, true);

$latitud = $json_data['lat'];
$longitud = $json_data['lon'];

// Insertar las coordenadas en la base de datos
$sql = "INSERT INTO ubicaciones (latitud, longitud, timestamp) VALUES (:latitud, :longitud, NOW())";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':latitud', $latitud, PDO::PARAM_STR);
    $stmt->bindParam(':longitud', $longitud, PDO::PARAM_STR);
    $stmt->execute();
    echo "Ubicación registrada correctamente";
} catch (PDOException $e) {
    echo "Error al registrar la ubicación: " . $e->getMessage();
}
