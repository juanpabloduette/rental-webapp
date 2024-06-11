<?php
$data = file_get_contents("php://input");
require "conexion.php";
$query = $pdo->prepare("DELETE FROM historial_service WHERE id = :id");
$query->bindParam(":id", $data);
$query->execute();
echo "okk";
