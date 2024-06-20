<?php
session_start();
error_reporting(0);
$varsesion = $_SESSION['usuario'];
if ($varsesion == null || $varsesion == '') {
    echo 'Sin autorizacion, redireccionando a pagina de Login';
    // Redireccionar a index.php
    // echo "<div class='content'><div class=''><b>No estas logueado, redireccionando a la pagina de login...</div></div>
    //     ";

    echo '<script>
                setTimeout(function(){ 
                window.location="index.php";
                }, 2000);
            </script>';
    die();
};
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APP RENTAL</title>
    <link rel="stylesheet" href="css/home.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/81e9130226.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/datatables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/3.0.2/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/3.0.2/css/responsive.bootstrap5.css">
    <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
</head>

<body style="background-color: black;">
    <div class="col-lg-12 top-app">
        <div class="top-app" style="background-color: #212529; color: white; display: flex; justify-content: space-between; align-items: center;">
            <img src="./images/logo.png" alt="" style="width: 50px; filter: brightness(130%);" class="m-2">
            <a href="cerrarsesion.php">Cerrar Sesion</a>
            <div class="bars__menu">
                <span class="line1__bars-menu"></span>
                <span class="line2__bars-menu"></span>
                <span class="line3__bars-menu"></span>
            </div>
        </div>
    </div>
    <div class="container panel">
        <div class="panel__top__top">
            <!-- <button class="btn btn-outline-warning btn-block">Ingresar renta <i class="fa-solid fa-file-import"></i></button> -->
            <button class="btn btn-outline-warning btn-block" data-bs-target='#modalventas' data-bs-toggle='modal'>Historial de rentas<i class="fa-solid fa-hand-holding-dollar"></i></button>
        </div>
        <div class="panel__top" id="panel--top">
            <!-- Contenido Panel -->
        </div>
    </div>
    <div class="container mt-2">
        <div class="row menu-content">
            <div class="col-lg-4 menu" id="menu">
                <div class="card">
                    <div class="card-header bg-dark" id="card-header" style="color: white; ">
                        <h3 class="text-center mb-0" id="cardtitle">Ingresar vehículo</h3>
                    </div>
                    <div class="card-body">
                        <form action="" method="POST" id="frm">
                            <div class="form-group my-1">
                                <label for="codigo">Número</label>
                                <input type="hidden" name="idp" id="idp">
                                <select name="codigo" id="codigo" class="form-select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="45">45</option>
                                    <option value="46">46</option>
                                    <option value="47">47</option>
                                    <option value="48">48</option>
                                    <option value="49">49</option>
                                    <option value="50">50</option>
                                    <option value="51">51</option>
                                    <option value="52">52</option>
                                    <option value="53">53</option>
                                    <option value="54">54</option>
                                    <option value="55">55</option>
                                    <option value="56">56</option>
                                    <option value="57">57</option>
                                    <option value="58">58</option>
                                    <option value="59">59</option>
                                    <option value="60">60</option>
                                    <option value="61">61</option>
                                    <option value="62">62</option>
                                    <option value="63">63</option>
                                    <option value="64">64</option>
                                    <option value="65">65</option>
                                    <option value="66">66</option>
                                    <option value="67">67</option>
                                    <option value="68">68</option>
                                    <option value="69">69</option>
                                    <option value="70">70</option>
                                    <option value="71">71</option>
                                    <option value="72">72</option>
                                    <option value="73">73</option>
                                    <option value="74">74</option>
                                    <option value="75">75</option>
                                    <option value="76">76</option>
                                    <option value="77">77</option>
                                    <option value="78">78</option>
                                    <option value="79">79</option>
                                    <option value="80">80</option>
                                    <option value="81">81</option>
                                    <option value="82">82</option>
                                    <option value="83">83</option>
                                    <option value="84">84</option>
                                    <option value="85">85</option>
                                    <option value="86">86</option>
                                    <option value="87">87</option>
                                    <option value="88">88</option>
                                    <option value="89">89</option>
                                    <option value="90">90</option>
                                    <option value="91">91</option>
                                    <option value="92">92</option>
                                    <option value="93">93</option>
                                    <option value="94">94</option>
                                    <option value="95">95</option>
                                    <option value="96">96</option>
                                    <option value="97">97</option>
                                    <option value="98">98</option>
                                    <option value="99">99</option>
                                </select>
                            </div>
                            <div class="form-group my-1">
                                <label for="estado">Estado</label>
                                <select name="estado" id="estado" class="form-select">
                                    <option value=""></option>
                                    <option value="Disponible">Disponible</option>
                                    <option value="Rentado">Rentado</option>
                                    <option value="No Disp.">No Disponible</option>
                                </select>
                            </div>
                            <div class="form-group my-1">
                                <label for="fecha">Hasta</label>
                                <input type="date" disabled name="fecha" placeholder="Ingrese Fecha" class="form-control" id="fecha">
                            </div>
                            <div class="form-group my-1" style='position: relative;'>
                                <label for="producto">Vehículo</label>
                                <!-- <i class="fa-solid fa-xmark cerrar-descripcion"></i> -->
                                <select name="producto" id="producto" class="form-select">
                                    <option value=""></option>
                                    <option value="ATV 150cc">ATV 150cc</option>
                                    <option value="ATV 200cc">ATV 200cc</option>
                                    <option value="Scooter Vitalia 150cc">Scooter Vitalia 150cc</option>
                                    <option value="Scooter W150">Scooter W150</option>
                                    <option value="Scooter 125cc">Scooter 125cc</option>
                                    <option value="Bicicleta">Bicicleta</option>
                                </select>
                            </div>
                            <div class="form-group my-1">
                                <label for="tienda">Tienda</label>
                                <select name="tienda" id="tienda" class="form-select">
                                    <option value="">Ingrese una tienda</option>
                                    <option value="Zama">Zama</option>
                                    <option value="Selina">Selina</option>
                                </select>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin: 5px 0">
                                <div class="form-group">
                                    <input type="button" value="Ingresar" id="registrar" class="btn btn-success btn-block">
                                </div>
                                <div class="form-group">
                                    <input type="button" value="Cancelar" id="cancelar" class="btn btn-danger btn-block" style="display:none;">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row my-1">
                    <div class="col-lg-6">
                        <div action="" method="post">
                            <div class="form-group busqueda">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <i class="fa-solid fa-xmark cerrar-busqueda"></i>
                                <input type="text" name="buscar" id="buscar" placeholder="Buscar..." class="form-control" list="opciones" style="padding-left: 30px; padding-right: 30px;">
                                <datalist id="opciones">
                                    <option value=""></option>
                                    <option value="Disponible"></option>
                                    <option value="No Disp"></option>
                                    <option value="Rentado"></option>
                                    <option value="Zama"></option>
                                    <option value="Selina"></option>
                                    <option value="ATV"></option>
                                    <option value="Scooter"></option>
                                    <option value="Bicicleta"></option>
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-hover table-responsive-{576px} table-striped align-middle table-dark table-sm">
                    <thead>
                        <tr>
                            <th class='td-celdas' style='text-align: center;'>N°</th>
                            <th class='td-celdas'></th>
                            <th class='td-celdas'>Estado</th>
                            <th class='td-celdas'>Vehículo</th>
                            <th class='td-celdas' style="text-align: center;">Tienda</th>
                            <th class='td-celdas'></th>
                        </tr>
                    </thead>
                    <tbody id="resultado">
                    </tbody>
                </table>
                <div class="modal fade" id="historialmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content bg-dark text-white">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"> Historial Vehículo Nro.</h5>
                                <div data-bs-theme="dark">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="button-modal-close"></button>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="accordion py-1 accordion-flush accordion-dark accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button btn-sm collapsed custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" id="btn-accordion-historial">
                                                Agregar registro +
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <form action="" class="form-historial" id="frm-vehiculos" method="POST">
                                                    <input type="hidden" id="idprimary">
                                                    <input type="hidden" id="idvehiculo">
                                                    <div class="label-input">
                                                        <label for="fechahistorial">Fecha</label>
                                                        <input type="date" class="form-control form-control-sm field-fecha mx-1" id="fechahistorial" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="servicio">Servicio</label>
                                                        <input type="text" class="form-control form-control-sm field-servicio mx-1" id="servicio" placeholder="Servicio" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="lugar">Lugar</label>
                                                        <input type="text" class="form-control form-control-sm field-lugar mx-1" id="lugar" placeholder="Lugar" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="costo">Costo</label>
                                                        <input type="text" class="form-control form-control-sm field-costo mx-1" id="costo" placeholder="Costo" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="kilometros">Kilometros</label>
                                                        <input type="text" class="form-control form-control-sm field-kms mx-1" id="kilometros" placeholder="Kms." autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="nota">Notas</label>
                                                        <input type="text" class="form-control form-control-sm field-notas mx-1" id="nota" placeholder="Notas (Opcional)" autocomplete="off">
                                                    </div>
                                                </form>
                                                <div class="btn-form-historial-box">
                                                    <button class="btn btn-success btn-block btn-sm btn-form-historial mx-1" id="historial-vehiculos">Ingresar</button>
                                                    <button class="btn btn-danger btn-block btn-sm btn-form-historial-cancelar mx-1" id="historial-vehiculos-cancelar">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table id="example" class="table table-striped table-sm align-middle table-hover" data-bs-theme="dark" style="width: 100%">
                                    <thead class="table-secondary">
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Servicio</th>
                                            <th>Lugar</th>
                                            <th>Costo</th>
                                            <th>Kms.</th>
                                            <th>Notas</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-group-divider" id="tbodyhistorial">
                                        <!-- Contenido Historial -->
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="button-modal-close-footer">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modalventas" tabindex="-1" aria-labelledby="modalventas" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content bg-dark text-white">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ModalVentas"> Historial de rentas</h5>
                                <div data-bs-theme="dark">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="button-modal-close-ventas"></button>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="accordion py-1 accordion-flush accordion-dark accordion-flush" id="accordionFlush-ventas">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button btn-sm collapsed custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" id="btn-accordion-ventas">
                                                Agregar renta +
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <form action="" class="form-historial" id="frm-ventas" method="POST">
                                                    <div class="label-input">
                                                        <label for="fechaventa">Fecha</label>
                                                        <input type="date" class="form-control form-control-sm field-fechaventa mx-1" id="fechaventa" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="vehiculoventa">Vehículo</label>
                                                        <input type="text" class="form-control form-control-sm field-vehiculoventa mx-1" id="vehiculoventa" placeholder="Vehiculo" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="lugar">Precio</label>
                                                        <input type="text" class="form-control form-control-sm field-lugar mx-1" id="precioventa" placeholder="Precio" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="costo">Cant. días</label>
                                                        <input type="text" class="form-control form-control-sm field-costo mx-1" id="cantdias" placeholder="Cant. días" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="kilometros">Hora salida</label>
                                                        <input type="text" class="form-control form-control-sm field-kms mx-1" id="horasalidaventa" placeholder="Hora Salida" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="kilometros">Hora llegada</label>
                                                        <input type="text" class="form-control form-control-sm field-kms mx-1" id="horallegadaventa" placeholder="Hora Llegada" autocomplete="off">
                                                    </div>
                                                    <div class="label-input">
                                                        <label for="nota">Vendedor</label>
                                                        <input type="text" class="form-control form-control-sm field-notas mx-1" id="vendedorventa" placeholder="Vendedor" autocomplete="off">
                                                    </div>
                                                </form>
                                                <div class="btn-form-historial-box">
                                                    <button class="btn btn-success btn-block btn-sm btn-form-historial mx-1">Ingresar</button>
                                                    <button class="btn btn-danger btn-block btn-sm btn-form-historial-cancelar mx-1">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table id="table-ventas" class="table table-striped table-sm align-middle table-hover" data-bs-theme="dark" style="width: 100%">
                                    <thead class="table-secondary">
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Nro. Moto</th>
                                            <th>Precio</th>
                                            <th>Cant. días</th>
                                            <th>Hora salida</th>
                                            <th>Hora llegada</th>
                                            <th>Vendedor</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-group-divider" id="tbodyventas">
                                        <!-- Contenido Historial -->
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="button-modal-close-footer">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/2.0.8/js/dataTables.js"></script>
    <script src="https://cdn.datatables.net/2.0.8/js/dataTables.bootstrap5.js"></script>
    <script src="https://cdn.datatables.net/responsive/3.0.2/js/dataTables.responsive.js"></script>
    <script src="https://cdn.datatables.net/responsive/3.0.2/js/responsive.bootstrap5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
    <script src="js/datatables.min.js"></script>
    <script src="js/datatable.js"></script>
    <script src="script.js"></script>
    <script src="js/historial.js"></script>
    <script src="js/listarhistorial.js"></script>
    <script src="js/borraridhistorial.js"></script>
    <script src="js/editarhistorial.js"></script>
    <script src="js/ventas.js"></script>
</body>

</html>