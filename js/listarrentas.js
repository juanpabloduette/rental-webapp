const tbodyRentas = document.getElementById("tbodyrentas");

function listarrentas() {
	fetch("listarrentas.php")
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
