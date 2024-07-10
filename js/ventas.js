// const validarRentas = {
// 	campoFecha: false,
// 	campoServicio: false,
// 	campoLugar: false,
// 	campoCosto: false,
// 	campoKilometros: false,
// 	// campoNota: false,
// };

// const frmVentas = document.getElementById("frm-ventas");

const fechaVenta = document.getElementById("fechaventa");
const fechaVentaDesde = document.getElementById("fechaventadesde");
const fechaVentaHasta = document.getElementById("fechaventahasta");
const cantDias = document.getElementById("cantdias");
const vehiculoVenta = document.getElementById("vehiculoventa");
const precioVenta = document.getElementById("precioventa");
const pagoVenta = document.getElementById("pagoventa");
const depositoVenta = document.getElementById("depositoventa");
const vendedorVenta = document.getElementById("vendedorventa");
const notaVenta = document.getElementById("notaventa");
const idNumeroRenta = document.getElementById("idnumerorenta");

const validarRentas = {
	campoFecha: true,
	campoServicio: true,
	campoLugar: true,
	campoCosto: true,
	campoKilometros: true,
};

function deActualizarAIngresarVentas() {
	if (historialRentas.textContent === "Actualizar") {
		historialRentas.textContent = "Ingresar";
	}
	editarRentasCancelar.style.display = "none";
	btnAccordionRentas.textContent = "Ingresar registro +";
	listarrentas();
	frmVentas.reset();
}

historialRentas.addEventListener("click", (e) => {
	e.preventDefault();
	// validacionHistorial();
	if (
		validarRentas.campoFecha &&
		validarRentas.campoServicio &&
		validarRentas.campoLugar &&
		validarRentas.campoCosto &&
		validarRentas.campoKilometros
	) {
		// console.log(idPrimary);
		fetch("php/rentas/ingresarrentas.php", {
			method: "POST",
			body: new URLSearchParams({
				id: idNumeroRenta.value,
				fechaventa: fechaVenta.value,
				fechaventadesde: fechaVentaDesde.value,
				fechaventahasta: fechaVentaHasta.value,
				cantdias: cantDias.value,
				vehiculoventa: vehiculoVenta.value,
				precioventa: precioVenta.value,
				pagoventa: pagoVenta.value,
				depositoventa: depositoVenta.value,
				vendedorventa: vendedorVenta.value,
				notaventa: notaVenta.value,
			}),
		})
			.then((response) => response.text())
			.then((response) => {
				console.log(response);
				if (response === "sinmodif") {
					Swal.fire({
						icon: "error",
						title: "Realice un cambio para actualizar el servicio",
						showConfirmButton: true,
						// timer: 1100
					});
					return;
				} else if (response === "ingresado") {
					Swal.fire({
						icon: "success",
						title: "Ingresado",
						showConfirmButton: false,
						timer: 950,
					});
					deActualizarAIngresarVentas();
					return;
				} else if (response === "actualizado") {
					Swal.fire({
						icon: "success",
						title: "Actualizado",
						showConfirmButton: false,
						timer: 950,
					});
					deActualizarAIngresarVentas();
					// idPrimary.value = "";
					// idv.value = "";
					historialRentas.classList.remove("btn-warning");
					btnAccordionRentas.style.backgroundColor = "#495057";
					btnAccordionRentas.style.color = "#FFFFFF";
					return;
				}
			})
			.catch((error) => console.error("Error:", error));
	}
});
