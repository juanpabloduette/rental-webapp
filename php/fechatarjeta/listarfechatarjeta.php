<?php
$data = file_get_contents("php://input");
require "../../conexion.php";
$query = $pdo->prepare("SELECT * FROM tarjeta_vehiculo WHERE id_vehiculo = :cod");
$query->bindParam(":cod", $data);
$query->execute();
$resultado = $query->fetch(PDO::FETCH_ASSOC);
if (empty($resultado)) {
    echo "<button type='button' class='btn btn-outline-light dropdown-toggle mx-1' data-bs-toggle='dropdown' aria-expanded='false' data-bs-auto-close='outside'>
            00-00-0000
            </button>
            <form class='dropdown-menu dropdown-menu-dark p-4'>
                <div class='mb-3'>
                    <label for='dropdowntarjeta' class='form-label'>Fecha</label>
                    <input type='date' class='form-control' id='dropdowntarjetainput' placeholder=''>
                </div>
                <button type='' class='btn btn-success btn-sm'>Ingresar</button>
                 <button type='button' class='btn btn-danger' aria-label='Borrar' onclick='borrarIdFechaCirculacion()' style='padding: 3px 7px; width: 33px; margin: 1px;'><i class='fa-solid fa-trash'></i></button>
            </form>";
    return;
}

$fechaParaConvertir = $resultado['fecha_tarjeta'];
$originalDate = $fechaParaConvertir;
$newDate = date("d-m-Y", strtotime($originalDate));

echo "<button type='button' class='btn btn-outline-light dropdown-toggle mx-1' data-bs-toggle='dropdown' aria-expanded='false' data-bs-auto-close='outside' id='btn-tarjeta-dropdown' onclick='btnTarjetaDropdown()'>
                                            $newDate
                                        </button>
                                        <form class='dropdown-menu dropdown-menu-dark p-4'>
                                            <div class='mb-3'>
                                                <label for='dropdowntarjeta' class='form-label'>Fecha</label>
                                                <input type='date' class='form-control' id='dropdowntarjetainput' placeholder=''>
                                            </div>
                                            <button type='button' class='btn btn-success btn-sm' id='btn-tarjeta' onclick='ingresarIdFechaCirculacion($data, \"$fechaParaConvertir\")'>Ingresar</button>
                                            <button type='button' class='btn btn-danger' aria-label='Borrar' onclick='borrarIdFechaCirculacion($data)' style='padding: 3px 7px; width: 33px; margin: 1px;'><i class='fa-solid fa-trash'></i></button>
                                        </form>";
