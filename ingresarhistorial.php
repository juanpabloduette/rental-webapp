<?php

$idprimary = $_POST['idprimary'];
$idv = $_POST['idv'];
$fecha = $_POST['fecha'];
$servicio = $_POST['servicio'];
$lugar = $_POST['lugar'];
$costo = $_POST['costo'];
$kilometros = $_POST['kilometros'];
$nota = $_POST['nota'];

require("conexion.php");

$cons = $pdo->prepare("SELECT * FROM historial_service WHERE id = :idp");
$cons->bindParam(":idp", $idprimary);
$cons->execute();
$resultado = $cons->fetchAll(PDO::FETCH_ASSOC);

foreach ($resultado as $data) {
    $idv_db = $data['id_vehiculo'];
    $fecha_db = $data['fecha'];
    $servicio_db = $data['servicio'];
    $lugar_db = $data['lugar'];
    $costo_db = $data['costo'];
    $kilometros_db = $data['kilometros'];
    $nota_db = $data['notas'];
};

if ($fecha === $fecha_db && $servicio === $servicio_db && $lugar === $lugar_db && $costo == $costo_db && $kilometros == $kilometros_db && $nota === $nota_db) {
    echo "sinmodif";
    die(); // SEGUN CHAT GPT, CON UN RETURN SOLAMENTE SALE DEL IF NO?
};

if (!empty($idprimary)) {
    $query = $pdo->prepare("UPDATE historial_service SET id_vehiculo = :idv, fecha = :fec, servicio = :sev, lugar = :lug, costo = :cos, kilometros = :kms, notas = :nta WHERE id = :id");
    $query->bindParam(":idv", $idv);
    $query->bindParam(":fec", $fecha);
    $query->bindParam(":sev", $servicio);
    $query->bindParam(":lug", $lugar);
    $query->bindParam(":cos", $costo);
    $query->bindParam(":kms", $kilometros);
    $query->bindParam(":nta", $nota);
    $query->bindParam(":id", $idprimary);
    $query->execute();
    echo "actualizado";
} else {
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
}
