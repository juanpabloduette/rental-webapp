<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APP RENTAL</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/81e9130226.js" crossorigin="anonymous"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            color: white;
        }

        .input {
            padding: 10px;
            max-width: 200px;
        }

        .content {
            min-height: 100vh;
            width: 100%;
            height: 100%;
        }

        .top {
            display: flex;
            justify-content: center;
            padding: 20px;
        }

        .top a {
            text-decoration: none;
            color: white;
            font-size: 30px;

        }

        .top a:hover {
            color: grey;
        }

        input[type=submit] {
            color: black;
            border-radius: 5px;
            /* width: 90%; */
            padding: 5px 10px;
            margin: 10px;
        }

        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            flex-direction: column;
            /* background-color: grey; */
        }

        .box-form {
            padding: 20px;
            /* background-color: #212529; */
            background-color: #000000;
            border-radius: 10px;
        }

        .box-form h3 {
            padding: 10px;
            text-align: center;
        }

        input[name=usuario],
        input[name=password] {
            padding-left: 40px !important;
        }

        .input__icon {
            position: absolute;
            margin-top: 0px;
            margin-left: 0px;
            background-color: #f0f0f0;
            padding: 7px 10px;
            border-radius: 5px 0px 0px 5px;
        }

        .input__icon i,
        .eye i {
            color: #212529;
        }

        .eye {
            position: absolute;
            margin-top: 7px;
            margin-left: 154px;
        }

        .eye i {
            cursor: pointer;
        }

        .show {
            display: none;
        }

        .btn-ingresar {
            color: #FFFFFF !important;
        }

        @media (max-width: 600px) {}
    </style>
</head>

<body style="background-color: black;">
    <div>
        <div class="col-1"></div>

        <div class="col-10 content">
            <div class="box">
                <div class="box-form">
                    <h3>Login</h3>
                    <form id="formulario" method="post">
                        <div class="input">
                            <div class="input__icon">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <input type="text" name="usuario" placeholder="Usuario" class="form-control input-login" id="usuario" autocomplete="off">
                        </div>
                        <div class="input">
                            <div class="input__icon">
                                <i class='fa-solid fa-lock'></i>
                            </div>
                            <div class="eye" id="eye-password">
                                <i class="fa-solid fa-eye-slash"></i>
                            </div>
                            <input type="password" name="password" placeholder="Contraseña" class="form-control input-login" id="password">

                        </div>
                        <input type="submit" value="Ingresar" class="btn btn-success btn-ingresar">
                        <div id="alert"></div>
                    </form>
                </div>
                <p>Admin Rental</p>
            </div>

        </div>

        <div class="col-1"></div>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="js/login.js"></script>
</body>

</html>