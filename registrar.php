<?php
require("conexion.php");
if (isset($_POST)) {
    $codigo = $_POST['codigo'];
    $estado = $_POST['estado'];

    if ($estado != 'Rentado') {
        $fecha = null;
    } else {
        $fecha = $_POST['fecha'];
    };

    $producto = $_POST['producto'];
    $tienda = $_POST['tienda'];

    if (empty($_POST['idp'])) {

        // ACA TENGO QUE HACER UN SELECT A LA BASE Y VERIFICAR SI EL COD EXISTE
        // SI EL PRODUCTO NO EXISTE, HAGO EL INSERT DE MAS ABAJO
        // SI EXISTE ALERTAR QUE EXISTE

        $cons = $pdo->prepare("SELECT * FROM productos WHERE codigo = :cod");
        $cons->bindParam(":cod", $codigo);
        $cons->execute();
        $resultado = $cons->fetchAll(PDO::FETCH_ASSOC);
        if (sizeof($resultado) > 0) {
            echo "existe";
            $pdo = null;
            return;
        };

        $query = $pdo->prepare("INSERT INTO productos (codigo,estado,fecha,producto,tienda) VALUES (:cod, :est, :fec, :pro, :tie)");
        $query->bindParam(":cod", $codigo);
        $query->bindParam(":est", $estado);
        $query->bindParam(":fec", $fecha);
        $query->bindParam(":pro", $producto);
        $query->bindParam(":tie", $tienda);
        $query->execute();

        // error que devuelve base de datos
        $errorInfo = $query->errorInfo();
        if ($errorInfo[0] != 0) {
            die($errorInfo[2]);
        };
        // FIN DE error que devuelve base de datos

        $pdo = null;
        echo "ok";
        // print_r($pdo);
        return;
    } else {

        $cons = $pdo->prepare("SELECT * FROM productos WHERE codigo = :cod");
        $cons->bindParam(":cod", $codigo);
        $cons->execute();
        $resultado = $cons->fetchAll(PDO::FETCH_ASSOC);
        if (sizeof($resultado) > 0) {

            foreach ($resultado as $data) {
                $estado_db = $data['estado'];
                $fecha_db = $data['fecha'];
                $producto_db = $data['producto'];
                $tienda_db = $data['tienda'];
            };

            if ($estado === $estado_db && $fecha === $fecha_db && $producto === $producto_db && $tienda === $tienda_db) {
                echo "sinmodif";
                die(); // SEGUN CHAT GPT, CON UN RETURN SOLAMENTE SALE DEL IF NO?
            };
        };


        $id = $_POST['idp'];
        $query = $pdo->prepare("UPDATE productos SET codigo = :cod, estado = :est, fecha = :fec, producto = :pro, tienda = :tie WHERE id = :id");
        $query->bindParam(":cod", $codigo);
        $query->bindParam(":est", $estado);
        $query->bindParam(":fec", $fecha);
        $query->bindParam(":pro", $producto);
        $query->bindParam(":tie", $tienda);
        $query->bindParam(":id", $id);
        $query->execute();
        echo "modificado";
    }
}
