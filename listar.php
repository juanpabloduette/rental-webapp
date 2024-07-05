<?php
$data = file_get_contents("php://input");
// print_r($data);
// Esta es la data para el buscador
require "conexion.php";
$consulta = $pdo->prepare("SELECT * FROM productos ORDER BY codigo ASC");
$consulta->execute();
// Esta es la condicion del boton buscar
if ($data != "") {
    $consulta = $pdo->prepare("SELECT * FROM productos WHERE codigo LIKE '%" . $data . "%' OR estado LIKE '%" . $data . "%' OR producto LIKE '%" . $data . "%' OR tienda LIKE '%" . $data . "%'");
    $consulta->execute();
}
$resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
if (empty($resultado)) {
    echo "<tr>NO HAY RESULTADOS</tr>";
}


function iconVehicle($desc_vehiculo)
{
    $atv = "<img src='./images/atv.svg' style='width: 30px; margin-right: 5px;'/>";
    $scooter = "<img src='./images/scooter.svg' style='width: 28px; margin-right: 5px;'/>";
    $buggy = "<img src='./images/buggy.svg' style='width: 26px; margin-right: 5px;'/>";
    $bicicleta = "<img src='./images/bicycle.svg' style='width: 26px; margin-right: 5px;'/>";
    switch ($desc_vehiculo) {
        case 'ATV 150cc':
            return $atv;
            break;
        case 'ATV 200cc':
            return $atv;
            break;
        case 'Scooter Vitalia 150cc':
            return $scooter;
            break;
        case 'Scooter 125cc':
            return $scooter;
            break;
        case 'Scooter W150':
            return $scooter;
            break;
        case 'Buggy Safari 400':
            return $buggy;
            break;
        case 'Bicicleta':
            return $bicicleta;
            break;
        default:
            # code...
            break;
    };
};

foreach ($resultado as $data) {
    $color = 'green';
    $estado = $data['estado'];
    $id = $data['id'];
    $codigo = $data['codigo'];
    $desc_vehiculo = $data['producto'];
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
        $fechaRentado = "al <span style='display: inline-block;'>" . $newDate . "</span>";
    } else {
        $fechaRentado = '';
    };

    echo "<tr>
            <td class='td-celdas td-celdas-vehiculo' style='text-align:center;'><span class='td-span'>" . $codigo . "</td>
            <td class='td-color'>
                <div class='td-display' style='display: flex; justify-content: center; align-items: center; flex-direction: column; position: relative; padding: 4px 2px;'>
                    <i class='fa-solid fa-circle' style='margin: 2px; color:$color;'></i>
                    <button type='button' class='btn-box-tool' data-bs-target='#historialmodal' data-bs-toggle='modal' onclick=listarhistorial($id,$codigo)><i class='fa-solid fa-wrench' style='padding: 4px 2px;'></i></button>
                </div>
            </td>
            <td class='td-celdas' id='fecha'>" . $data['estado'] . " " . $fechaRentado . "</td>
            <td class='td-celdas'>
            <div class='td-producto' style='display: flex; justify-content:flex-start; align-items:center;'>
              " . iconVehicle($desc_vehiculo) . "
                <div style='font-size: 12px;'>$desc_vehiculo</div>
            </div>
            </td>
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
