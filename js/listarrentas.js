// const historialVehiculo = document.getElementById("exampleModalLabel");
const tbodyRentas = document.getElementById("tbodvrentas");

function listarrentas() {
	// 	historialVehiculo.innerHTML = `Vehículo: <span class='historial-span'>${cod}</span>`;
	// 	document.title = `APP RENTAL - Vehículo ${cod}`;

	fetch("listarrentas.php", {
		method: "POST",
		body: cod,
	})
		.then((response) => response.text())
		.then((response) => {
			if (table) {
				table.destroy(); // mata la tabla
				table = null;
			}
			tbodyRentas.innerHTML = response;
			if (response !== "<tr>NO HAY RESULTADOS</tr>") {
				tableRentasExecute(); // vuelve a inciar la tabla con sus funcionalidades
			}
		})
		.catch((error) => console.error("Error:", error));
}
