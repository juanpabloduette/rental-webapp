<?php
session_start();
error_reporting(0);
$varsesion = $_SESSION['usuario'];
if ($varsesion == null || $varsesion = '') {
    echo 'Sin autorizacion, redireccionando a pagina de Login';
    // Redireccionar a index.php
    // echo "<div class='content'><div class=''><b>No estas logueado, redireccionando a la pagina de login...</div></div>
    //     ";

    echo '<script>
                setTimeout(function(){ 
                window.location="index.php"
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
    <script src="https://kit.fontawesome.com/81e9130226.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="./css.css"> -->
    <!-- <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> -->
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .top {
            position: sticky;
            top: 0;
            z-index: 999999999999;
        }

        .top a {
            font-size: 10px;
            text-decoration: none;
            color: white;
            border-radius: 5px;
            border: 1px solid #ffffff;
            padding: 2px 6px;
            transition: .2s ease all;
            margin: 0 5px;

        }

        .top a:hover {
            /* text-decoration: underline; */
            padding: 4px 10px;
            color: grey;
            border: 1px solid grey;
        }

        .menu-content {
            display: flex;
            align-items: start;
        }

        .menu {
            position: sticky;
            top: 80px;
        }

        .busqueda {
            position: relative;
        }

        .busqueda .fa-magnifying-glass {
            position: absolute;
            top: 35px;
            left: 7px;
        }

        .cerrar-busqueda {
            position: absolute;
            top: 33px;
            right: 10px;
            cursor: pointer;
            display: none;
            padding: 2px 4px;
            transition: .3s ease all;
            border-radius: 50%;
        }

        .cerrar-descripcion {
            position: absolute;
            top: 33px;
            right: 13px;
            cursor: pointer;
            display: none;
            padding: 2px 4px;
            transition: .3s ease all;
            border-radius: 50%;
        }

        .cerrar-busqueda:hover,
        .cerrar-descripcion:hover {
            background-color: #e9ecef;
            padding: 2px 4px;
        }

        .bars__menu {
            width: 30px;
            height: 30px;
            cursor: pointer;
            margin: 8px;
            display: none;
            min-width: 30px;
        }

        .bars__menu span {
            display: block;
            width: 100%;
            height: 2px;
            background: white;
            margin-top: 6px;
            transform-origin: 0px 100%;
            transition: all 200ms;
        }

        .activeline1__bars-menu {
            transform: rotate(45deg) translate(-2px, 1px);
        }

        .activeline2__bars-menu {
            opacity: 0;
            margin-left: -30px;
        }

        .activeline3__bars-menu {
            transform: rotate(-45deg) translate(-4px, 2px);
        }

        .btn-box-comment:hover::before {
            content: "Editar";
            color: black;
            font-size: 13px;
            background-color: white;
            position: absolute;
            right: 16px;
            top: -30px;
            height: 30px;
            width: 50px;
            border: 5px solid transparent;
            border-radius: 5px;
            box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.60);
            -webkit-box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.60);
        }

        .btn-box-danger:hover::before {
            content: "Borrar";
            color: black;
            font-size: 13px;
            background-color: white;
            position: absolute;
            right: 16px;
            top: -30px;
            height: 30px;
            width: 50px;
            border: 5px solid transparent;
            border-radius: 5px;
            box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.60);
            -webkit-box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.60);

        }

        .btn-box-danger:hover::after {
            content: "";
            background-color: white;
            position: absolute;
            right: 30px;
            top: -7px;
            height: 0;
            width: 0;
            border: 10px solid transparent;
            border-bottom-width: 0px;
            border-right-width: 0px;
            border-top-color: white;
            transform: translatex(50%) rotate(315deg);
            /* z-index: -1; */
            border-radius: 1px;
        }

        .btn-box-comment:hover::after {
            content: "";
            background-color: white;
            position: absolute;
            right: 30px;
            top: -7px;
            height: 0;
            width: 0;
            border: 10px solid transparent;
            border-bottom-width: 0px;
            border-right-width: 0px;
            border-top-color: white;
            transform: translatex(50%) rotate(315deg);
            /* z-index: -1; */
            border-radius: 1px;
        }

        .btn-box-tool {
            display: block;
            border: none;
            background-color: transparent;
            color: white;

        }

        .btn-box-tool:hover::before {
            content: "Historial";
            color: black;
            font-size: 12px;
            background-color: white;
            position: absolute;
            left: 20px;
            top: -20px;
            height: 30px;
            width: 55px;
            border: 5px solid transparent;
            border-radius: 5px;
            box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.60);
            -webkit-box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.60);
        }

        .btn-box-tool:hover::after {
            content: "";
            background-color: white;
            position: absolute;
            left: 25px;
            top: 4px;
            height: 0;
            width: 0;
            border: 10px solid transparent;
            border-bottom-width: 0px;
            border-right-width: 0px;
            border-top-color: white;
            transform: translatex(50%) rotate(315deg);
            /* z-index: -1; */
            border-radius: 1px;
        }

        .historial {
            background-color: #212529;
            display: none;
            position: absolute;
            width: 100%;
            height: 80vh;
            top: 80px;
            left: 0;
            z-index: 9999;
            color: white;
            border: 1px solid #e9ecef;
        }

        .historial .historial-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        @media (max-width: 992px) {
            .bars__menu {
                display: block;
            }

            .menu {
                position: fixed;
                top: 100;
                left: -1000px;
                z-index: 1;
                transition: all 300ms;
            }

            .td-celdas {
                padding: 1px !important;
            }

            .td-color {
                padding: 0px !important;
            }

        }

        @media (max-width: 575px) {
            .btn-content {
                flex-direction: column;
            }
        }
    </style>
</head>

<body style="background-color: black;">
    <div class="col-lg-12 top">
        <div class="top" style="background-color: #212529; color: white; display: flex; justify-content: space-between; align-items: center;">
            <img src="./images/logo.png" alt="" style="width: 70px; filter: brightness(130%);" class="m-2">
            <a href="cerrarsesion.php">Cerrar Sesion</a>
            <!-- <div style="display: flex; justify-content: center; align-items: center;">
            <div class="title" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <h1 class="m-0" style="font-size:18px; color: white;">GOOD BIKES ONLY:&nbsp;</h1>
                <div id="current_date" style="color: white;">
                    <script>
                        date = new Date();
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        hour = date.getHours();
                        min = date.getMinutes();
                        document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year + "<br>" + hour + ":" + min + "hs.";
                    </script>
                </div>
            </div>
        </div> -->
            <div class="bars__menu">
                <span class="line1__bars-menu"></span>
                <span class="line2__bars-menu"></span>
                <span class="line3__bars-menu"></span>
            </div>
        </div>
    </div>
    <div class="container mt-2">
        <div class="row menu-content">
            <div class="col-lg-4 menu" id="menu">
                <div class="card">
                    <div class="card-header bg-dark" id="card-header" style="color: white; ">
                        <h3 class="text-center" id="cardtitle">Ingresar vehículo</h3>
                    </div>
                    <div class="card-body">
                        <form action="" method="POST" id="frm">
                            <div class="form-group my-1">
                                <label for="codigo">Número</label>
                                <input type="hidden" name="idp" id="idp" value="">
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
                                <label for="producto">Descripción</label>
                                <i class="fa-solid fa-xmark cerrar-descripcion"></i>
                                <input type="text" name="producto" placeholder="Descripcion" class="form-control" id="producto" list="desc">
                                <datalist id="desc">
                                    <option value=""></option>
                                    <option value="ATV 150cc"></option>
                                    <option value="ATV 200cc"></option>
                                    <option value="Scooter Vitalia 150cc"></option>
                                    <option value="Scooter W150"></option>
                                    <option value="Scooter 125cc"></option>
                                    <option value="Bicicleta"></option>
                                </datalist>
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
                                    <input type="button" value="Ingresar" id="registrar" class="btn btn-dark btn-block">
                                </div>
                                <div class="form-group">
                                    <input type="button" value="Cancelar" id="cancelar" class="btn btn-primary btn-block" style="display:none;">
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
                                <label for="buscar" style="color: white;">Buscar:</label>
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
                            <th class='td-celdas'>N°</th>
                            <th class='td-celdas'></th>
                            <th class='td-celdas'>Estado</th>
                            <th class='td-celdas'>Desc.</th>
                            <th class='td-celdas' style="text-align: center;">Tienda</th>
                            <th class='td-celdas'></th>
                        </tr>
                    </thead>
                    <tbody id="resultado">
                    </tbody>
                </table>
                <section class="historial" id="historial">
                    <div class="historial-header">
                        <div>Vehiculo Nro.</div>
                        <button onclick="historialClose()">X</button>
                    </div>
                    <h4>Historial del vehículo</h4>
                </section>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="script.js"></script>
</body>

</html>