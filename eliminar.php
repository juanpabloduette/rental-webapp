<?php
$data = json_decode(file_get_contents("php://input"), true);
require "conexion.php";

try {
    $pdo->beginTransaction();

    // Primer query para eliminar en la tabla 'productos'
    $query1 = $pdo->prepare("DELETE FROM productos WHERE id = :id");
    $query1->bindParam(":id", $data['id']);
    $query1->execute();

    // Segundo query para eliminar en la tabla 'historial_service'
    $query2 = $pdo->prepare("DELETE FROM historial_service WHERE id_vehiculo = :cod");
    $query2->bindParam(":cod", $data['cod']);
    $query2->execute();

    $pdo->commit();
    echo "okk";
} catch (Exception $e) {
    $pdo->rollBack();
    echo "Error: " . $e->getMessage();
}
