<?php

$idv = $_POST['idv'];
$fecha = $_POST['fecha'];
$servicio = $_POST['servicio'];
$lugar = $_POST['lugar'];
$costo = $_POST['costo'];
$kilometros = $_POST['kilometros'];
$nota = $_POST['nota'];

require("conexion.php");

$query = $pdo->prepare("INSERT INTO historial_service (id_vehiculo,fecha,servicio,lugar,costo,kilometros,notas) VALUES (:idv, :fec, :ser, :lug, :cos, :kms, :nta)");
$query->bindParam(":idv", $idv);
$query->bindParam(":fec", $fecha);
$query->bindParam(":ser", $servicio);
$query->bindParam(":lug", $lugar);
$query->bindParam(":cos", $costo);
$query->bindParam(":kms", $kilometros);
$query->bindParam(":nta", $nota);
$query->execute();
echo "ingresado";
