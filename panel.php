<?php
require "conexion.php";
$consulta = $pdo->prepare("SELECT * FROM productos ORDER BY codigo ASC");
$consulta->execute();

$resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($resultado);
