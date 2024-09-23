<?php
$json = file_get_contents("php://input");
// Decodificar el JSON para obtener un array asociativo
$data = json_decode($json, true);
$id = $data['cod'];
$fecha = $data['fecha']; // ******* tendria que enviar la fecha del input del dropdown ***************

require "../../conexion.php";
$query = $pdo->prepare("SELECT * FROM tarjeta_vehiculo WHERE id_vehiculo = :cod");
$query->bindParam(":cod", $id);
$query->execute();
$resultado = $query->fetch(PDO::FETCH_ASSOC);
if (empty($resultado)) {
    echo "vacio";
    return;
}

if (!empty($resultado)) {
    // var_dump($resultado);
    foreach ($resultado as $key => $value) {
        switch ($key) {
            case 'id':
                $id = $value;
                break;
            case 'id_vehiculo':
                $id_vehiculo = $value;
                break;
            case 'fecha_tarjeta':
                $fecha_tarjeta = $value;
                break;
        }
    }
    if ($fecha_tarjeta === $fecha) {
        echo "mismafecha";
        die();
    };
    echo $fecha_tarjeta . " ";
    echo $fecha;
}

$fechaParaConvertir = $resultado['fecha_tarjeta'];
$originalDate = $fechaParaConvertir;
$newDate = date("d-m-Y", strtotime($originalDate));

echo "ingresado";
