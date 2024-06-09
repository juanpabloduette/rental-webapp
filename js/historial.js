const historialVehiculos = document.getElementById("historial-vehiculos");
const frmVehiculos = document.getElementById("frm-vehiculos");
historialVehiculos.addEventListener("click", (e) => {
	e.preventDefault();
	validacionHistorial();
	frmVehiculos.reset();
});

function validacionHistorial() {
	alert("validacion campos");

	// fetch("listarhistorial.php", {
	// 	method: "POST",
	// 	body: new URLSearchParams({
	// 		idp: idp.value,
	// 		fecha: fecha.value,
	// 		servicio: servicio.value,
	// 		lugar: lugar.value,
	// 		costo: costo.value,
	// 		kms: kms.value,
	// 		nota: nota.value,
	// 	}),
	// })
	// 	.then((response) => response.text())
	// 	.then((response) => {
	// 		console.log(response);
	// 	});
}
