const historialVehiculo = document.getElementById("exampleModalLabel");
const tbodyHistorial = document.getElementById("tbodyhistorial");

function listarhistorial(id, cod) {
	historialVehiculo.innerHTML = `Vehiculo: <span class='historial-span'>${cod}</span>`;
	// console.log(id, cod);

	fetch("listarhistorial.php", {
		method: "POST",
		body: cod,
	})
		.then((response) => response.text())
		.then((response) => {
			// console.log(response);
			if (table) {
				table.destroy(); // mata la tabla
			}
			tbodyHistorial.innerHTML = response;
			tableExecute(); // vuelve a inciar la tabla con sus funcionalidades
		})
		.catch((error) => console.error("Error:", error));
}
