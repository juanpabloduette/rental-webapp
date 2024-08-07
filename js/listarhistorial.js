const historialVehiculo = document.getElementById("exampleModalLabel");
const tbodyHistorial = document.getElementById("tbodyhistorial");
const idVehiculo = document.getElementById("idvehiculo");

function listarhistorial(id, cod) {
	historialVehiculo.innerHTML = `Vehículo: <span class='historial-span'>${cod}</span>`;
	document.title = `APP RENTAL - Vehículo ${cod}`;
	tbodyHistorial.innerHTML = `<span class="spinner-border" aria-hidden="true"></span>`;
	fetch("listarhistorial.php", {
		method: "POST",
		body: cod,
	})
		.then((response) => response.text())
		.then((response) => {
			if (table) {
				table.destroy(); // mata la tabla
				table = null;
			}
			idVehiculo.setAttribute("value", cod);
			tbodyHistorial.innerHTML = response;
			if (response !== "<tr>NO HAY RESULTADOS</tr>") {
				tableExecute(); // vuelve a inciar la tabla con sus funcionalidades
			}
		})
		.catch((error) => {
			console.error("Error:", error);
			alert("Ocurrió un error con el servidor");
		});
}
