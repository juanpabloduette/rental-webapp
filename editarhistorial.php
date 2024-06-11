<?php
$data = file_get_contents("php://input");
require "conexion.php";
$query = $pdo->prepare("SELECT * FROM historial_service WHERE id = :id");
$query->bindParam(":id", $data);
$query->execute();
$resultado = $query->fetch(PDO::FETCH_ASSOC);
echo json_encode($resultado);
