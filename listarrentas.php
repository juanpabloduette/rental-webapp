<?php
$data = file_get_contents("php://input");
require "conexion.php";
$query = $pdo->prepare("SELECT * FROM rentas");
$query->execute();
$resultado = $query->fetchAll(PDO::FETCH_ASSOC);
if (empty($resultado)) {
    echo "<tr>NO HAY RESULTADOS</tr>";
    return;
}

foreach ($resultado as $data) {
    $id = $data['id'];
    $desde = $data['desde'];
    $hasta = $data['hasta'];
    $dias = $data['dias'];
    $nrovehiculo = $data['nrovehiculo'];
    $horasalida = $data['horasalida'];
    $horallegada = $data['horallegada'];
    $precio = $data['precio'];
    $pago = $data['pago'];
    $deposito = $data['deposito'];
    $vendedor = $data['vendedor'];
    $nota = $data['nota'];
    $nrorenta = $data['nrorenta'];

    echo "<tr>
            <td>$desde</td>
            <td>$hasta</td>
            <td>$dias</td>
            <td>$$nrovehiculo</td>
            <td>$horasalida</td>
            <td>$horallegada</td>
            <td>$precio</td>
            <td>$pago</td>
            <td>$deposito</td>
            <td>$vendedor</td>
            <td>$nota</td>
            <td>$nrorenta</td>
            <td>
                <div class='acciones-buttons'>
                    <div style='position: relative;'>
                        <button type='button' class='btn btn-warning btn-box-comment' aria-label='Editar' onclick='editarIdHistorial($id)' style='padding: 3px 7px; max-width: 40px; margin: 1px;'><i class='fa-solid fa-file-pen'></i></button>
                    </div>
                    <div style='position: relative;'>
                        <button type='button' class='btn btn-danger btn-box-danger' aria-label='Borrar' onclick='borrarIdHistorial($id)' style='padding: 3px 7px; width: 33px; margin: 1px;'><i class='fa-solid fa-trash'></i></button>
                    </div>
                </div>
            </td>
         </tr>";
}
