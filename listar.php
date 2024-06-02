<?php
$data = file_get_contents("php://input");
// print_r($data);
// Esta es la data para el buscador
require "conexion.php";
$consulta = $pdo->prepare("SELECT * FROM productos ORDER BY codigo ASC");
$consulta->execute();
// Esta es la condicion del boton buscar
if ($data != "") {
    $consulta = $pdo->prepare("SELECT * FROM productos WHERE codigo LIKE '%" . $data . "%' OR estado LIKE '%" . $data . "%' OR producto LIKE '%" . $data . "%' OR tienda LIKE '%" . $data . "%' ");
    $consulta->execute();
}

$resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
if (empty($resultado)) {
    echo "<tr>NO HAY RESULTADOS</tr>";
}

foreach ($resultado as $data) {
    $color = 'green';
    $estado = $data['estado'];
    if ($estado == "Rentado") {
        $color = 'yellow';
    } else if ($estado == "No Disp.") {
        $color = 'red';
    };

    $fechaParaConvertir = $data['fecha'];

    $originalDate = $fechaParaConvertir;
    $newDate = date("d-m-Y", strtotime($originalDate));
    // print_r($newDate);

    if ($estado == "Rentado") {
        $fechaRentado = "<span>al " . $newDate . "</span>";
    } else {
        $fechaRentado = '';
    };
    $id = $data['id'];
    $codigo = $data['codigo'];
    echo "<tr>
            <td class='td-celdas'>" . $data['codigo'] . "</td>
            <td class='td-color'>
                <div class='td-display' style='display: flex; justify-content: center; align-items: center; flex-direction: column; position: relative;'>
                    <i class='fa-solid fa-circle' style='font-size: 11px; margin: 2px; color:$color;'></i>
                    <button type='button' class='btn-box-tool'><i class='fa-solid fa-wrench' style='padding: 2px;'></i></button>
                </div>
            </td>
            <td class='td-celdas' id='fecha'>" . $data['estado'] . " " . $fechaRentado . "</td>
            <td class='td-celdas'>" . $data['producto'] . "</td>
            <td class='td-celdas' style='text-align: center;'>" . $data['tienda'] . "</td>
            <td style='text-align:center; padding:0.20rem;'>
                <div class='btn-content' style='display: flex; justify-content: center;'>
                    <div style='position: relative;'>
                        <button type='button' class='btn btn-warning btn-box-comment' aria-label='Editar' style='padding: 3px 7px; max-width: 40px; margin: 1px;' onclick=Editar('" . $data['id'] . "')><i class='fa-solid fa-file-pen'></i></button>
                    </div>
                    <div style='position: relative;'>
                        <button type='button' class='btn btn-danger btn-box-danger' aria-label='Borrar' style='padding: 3px 7px; width: 33px; margin: 1px;' onclick=Eliminar($id,$codigo)><i class='fa-solid fa-trash'></i></button>
                    </div>
                </div>
            </td>
        </tr>";
}
