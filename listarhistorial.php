<?php
$data = file_get_contents("php://input");
require "conexion.php";
$query = $pdo->prepare("SELECT * FROM historial_service WHERE id_vehiculo = :cod");
$query->bindParam(":cod", $data);
$query->execute();
$resultado = $query->fetchAll(PDO::FETCH_ASSOC);
if (empty($resultado)) {
    echo "<tr>NO HAY RESULTADOS</tr>";
    return;
}

foreach ($resultado as $data) {
    $cod = $data['id_vehiculo'];
    $fecha = $data['fecha'];
    $servicio = $data['servicio'];
    $lugar = $data['lugar'];
    $costo = $data['costo'];
    $kms = $data['kilometros'];
    $nota = $data['notas'];

    echo "<tr>
            <td>$fecha</td>
            <td>$servicio</td>
            <td>$lugar</td>
            <td>$costo</td>
            <td>$kms</td>
            <td>$nota</td>
            <td>
                <div class='acciones-buttons'>
                    <div style='position: relative;'>
                        <button type='button' class='btn btn-warning btn-box-comment' aria-label='Editar' style='padding: 3px 7px; max-width: 40px; margin: 1px;'><i class='fa-solid fa-file-pen'></i></button>
                    </div>
                    <div style='position: relative;'>
                        <button type='button' class='btn btn-danger btn-box-danger' aria-label='Borrar' style='padding: 3px 7px; width: 33px; margin: 1px;'><i class='fa-solid fa-trash'></i></button>
                    </div>
                </div>
            </td>
         </tr>";
}
