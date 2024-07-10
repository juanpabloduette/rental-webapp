<?php

$idprimary = $_POST['id'];
$fechaventa = $_POST['fechaventa'];
$fechaventadesde = $_POST['fechaventadesde'];
$fechaventahasta = $_POST['fechaventahasta'];
$cantdias = $_POST['cantdias'];
$vehiculoventa = $_POST['vehiculoventa'];
$precioventa = $_POST['precioventa'];
$pagoventa = $_POST['pagoventa'];
$depositoventa = $_POST['depositoventa'];
$vendedorventa = $_POST['vendedorventa'];
$notaventa = $_POST['notaventa'];

require("../../conexion.php");

$cons = $pdo->prepare("SELECT * FROM rentas WHERE id = :id");
$cons->bindParam(":id", $idprimary);
$cons->execute();
$resultado = $cons->fetchAll(PDO::FETCH_ASSOC);


if (!empty($idprimary)) {

    foreach ($resultado as $data) {
        $fechaventa_db = $data['fecha'];
        $fechaventadesde_db = $data['desde'];
        $fechaventahasta_db = $data['hasta'];
        $cantdias_db = $data['dias'];
        $vehiculoventa_db = $data['nrovehiculo'];
        $precioventa_db = $data['precio'];
        $pagoventa_db = $data['pago'];
        $depositoventa_db = $data['deposito'];
        $vendedorventa_db = $data['vendedor'];
        $notaventa_db = $data['nota'];
        // $idprimary_db = $data['id'];
    };
    // Eliminar espacios y ajustar el formato
    // $fechaventadesde_db = trim($fechaventadesde_db);
    $fechaventadesde_db = str_replace(' ', 'T', $fechaventadesde_db);
    $fechaventadesde_db = substr($fechaventadesde_db, 0, 16); // Ejemplo: '2024-07-16T00:00'
    $fechaventahasta_db = str_replace(' ', 'T', $fechaventahasta_db);
    $fechaventahasta_db = substr($fechaventahasta_db, 0, 16); // Ejemplo: '2024-07-16T00:00'

    if (
        $fechaventa === $fechaventa_db
        &&
        $fechaventadesde === $fechaventadesde_db
        &&
        $fechaventahasta === $fechaventahasta_db
        &&
        $cantdias == $cantdias_db
        &&
        $vehiculoventa == $vehiculoventa_db
        &&
        $precioventa == $precioventa_db
        &&
        $pagoventa === $pagoventa_db
        &&
        $depositoventa === $depositoventa_db
        &&
        $vendedorventa === $vendedorventa_db
        &&
        $notaventa === $notaventa_db
    ) {
        echo "sinmodif";
        die(); // SEGUN CHAT GPT, CON UN RETURN SOLAMENTE SALE DEL IF NO?
    };
};


if (!empty($idprimary)) {
    $query = $pdo->prepare("UPDATE rentas SET fecha = :fvt, desde = :fde, hasta = :fht, dias = :ctd, nrovehiculo = :nvv, precio = :prc, pago = :pgo, deposito = :dep, vendedor = :ven, nota = :nta WHERE id = :id");
    $query->bindParam(":fvt", $fechaventa);
    $query->bindParam(":fde", $fechaventadesde);
    $query->bindParam(":fht", $fechaventahasta);
    $query->bindParam(":ctd", $cantdias);
    $query->bindParam(":nvv", $vehiculoventa);
    $query->bindParam(":prc", $precioventa);
    $query->bindParam(":pgo", $pagoventa);
    $query->bindParam(":dep", $depositoventa);
    $query->bindParam(":ven", $vendedorventa);
    $query->bindParam(":nta", $notaventa);
    $query->bindParam(":id", $idprimary);
    $query->execute();
    echo "actualizado";
} else {
    $query = $pdo->prepare("INSERT INTO rentas (fecha,desde,hasta,dias,nrovehiculo,precio,pago,deposito,vendedor,nota,id) VALUES (:fvt, :fde, :fht, :ctd, :nvv, :prc, :pgo, :dep, :ven, :nta, :idr)");
    $query->bindParam(":fvt", $fechaventa);
    $query->bindParam(":fde", $fechaventadesde);
    $query->bindParam(":fht", $fechaventahasta);
    $query->bindParam(":ctd", $cantdias);
    $query->bindParam(":nvv", $vehiculoventa);
    $query->bindParam(":prc", $precioventa);
    $query->bindParam(":pgo", $pagoventa);
    $query->bindParam(":dep", $depositoventa);
    $query->bindParam(":ven", $vendedorventa);
    $query->bindParam(":nta", $notaventa);
    $query->bindParam(":idr", $idprimary);
    $query->execute();
    echo "ingresado";
}
