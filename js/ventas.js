const fechaVenta = document.getElementById("fechaventa");
const fechaVentaDesde = document.getElementById("fechaventadesde");
const fechaVentaHasta = document.getElementById("fechaventahasta");
const cantDias = document.getElementById("cantdias");
const vehiculoVenta = document.getElementById("vehiculoventa");
const clienteVenta = document.getElementById("clienteventa");
const precioVenta = document.getElementById("precioventa");
const pagoVenta = document.getElementById("pagoventa");
const depositoVenta = document.getElementById("depositoventa");
const vendedorVenta = document.getElementById("vendedorventa");
const notaVenta = document.getElementById("notaventa");
const idNumeroRenta = document.getElementById("idnumerorenta");

const validarRentas = {
	campoFecha: false,
	campofechaVentaDesde: false,
	campofechaVentaHasta: false,
	campocantDias: false,
	campovehiculoVenta: false,
	campoclienteVenta: false,
	campoprecioVenta: false,
	campopagoVenta: false,
	campodepositoVenta: false,
};

function validacionVentas() {
	if (fechaVenta.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo fecha está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campoFecha = false);
	} else {
		validarRentas.campoFecha = true;
	}
	if (fechaVentaDesde.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Desde está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campofechaVentaDesde = false);
	} else {
		validarRentas.campofechaVentaDesde = true;
	}
	if (fechaVentaHasta.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Hasta está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campofechaVentaHasta = false);
	} else {
		validarRentas.campofechaVentaHasta = true;
	}
	if (cantDias.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Días está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campocantDias = false);
	} else if (Number(cantDias.value) < 1) {
		Swal.fire({
			icon: "error",
			title: "El campo Días debe ser mayor a 1",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campocantDias = false);
	} else {
		validarRentas.campocantDias = true;
	}
	if (vehiculoVenta.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Vehículo está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campovehiculoVenta = false);
	} else if (Number(vehiculoVenta.value) < 1) {
		Swal.fire({
			icon: "error",
			title: "El campo Vehículo debe ser mayor a 1",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campovehiculoVenta = false);
	} else {
		validarRentas.campovehiculoVenta = true;
	}
	if (clienteVenta.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Cliente está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campoclienteVenta = false);
	} else {
		validarRentas.campoclienteVenta = true;
	}
	if (precioVenta.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Precio está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campoprecioVenta = false);
	} else if (Number(precioVenta.value) < 0) {
		Swal.fire({
			icon: "error",
			title: "El Precio no puede ser negativo",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campoprecioVenta = false);
	} else {
		validarRentas.campoprecioVenta = true;
	}
	if (pagoVenta.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Pago está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campopagoVenta = false);
	} else {
		validarRentas.campopagoVenta = true;
	}
	if (depositoVenta.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Depósito está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarRentas.campodepositoVenta = false);
	} else {
		validarRentas.campodepositoVenta = true;
	}
}

function deActualizarAIngresarVentas() {
	if (historialRentas.textContent === "Actualizar") {
		historialRentas.textContent = "Ingresar";
	}
	editarRentasCancelar.style.display = "none";
	btnAccordionRentas.textContent = "Ingresar renta +";
	listarrentas();
	frmVentas.reset();
}

historialRentas.addEventListener("click", (e) => {
	e.preventDefault();
	validacionVentas();
	if (
		validarRentas.campoFecha &&
		validarRentas.campofechaVentaDesde &&
		validarRentas.campofechaVentaHasta &&
		validarRentas.campocantDias &&
		validarRentas.campovehiculoVenta &&
		validarRentas.campoclienteVenta &&
		validarRentas.campoprecioVenta &&
		validarRentas.campopagoVenta &&
		validarRentas.campodepositoVenta
	) {
		// console.log(idPrimary);
		historialRentas.innerHTML = `<span class="spinner-border spinner-border-sm" style="position: relative; top: 1px;" aria-hidden="true"></span>`;
		historialRentas.disabled = true;
		editarRentasCancelar.disabled = true;
		fetch("php/rentas/ingresarrentas.php", {
			method: "POST",
			body: new URLSearchParams({
				id: idNumeroRenta.value,
				fechaventa: fechaVenta.value,
				fechaventadesde: fechaVentaDesde.value,
				fechaventahasta: fechaVentaHasta.value,
				cantdias: cantDias.value,
				vehiculoventa: vehiculoVenta.value,
				clienteventa: clienteVenta.value,
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
				historialRentas.disabled = false;
				editarRentasCancelar.disabled = false;
				if (response === "sinmodif") {
					Swal.fire({
						icon: "error",
						title: "Realice un cambio para actualizar la renta",
						showConfirmButton: true,
						// timer: 1100
					});
					historialRentas.innerHTML = `Actualizar`;
					return;
				} else if (response === "noexistevehiculo") {
					Swal.fire({
						icon: "error",
						title: "No existe vehículo",
						showConfirmButton: true,
						// timer: 1100
					});
					historialRentas.innerHTML = `Actualizar`;
					return;
				} else if (response === "ingresado") {
					Swal.fire({
						icon: "success",
						title: "Ingresado",
						showConfirmButton: false,
						timer: 950,
					});
					historialRentas.innerHTML = `Ingresar`;
					deActualizarAIngresarVentas();
					return;
				} else if (response === "actualizado") {
					Swal.fire({
						icon: "success",
						title: "Actualizado",
						showConfirmButton: false,
						timer: 950,
					});
					historialRentas.innerHTML = `Ingresar`;
					deActualizarAIngresarVentas();
					// idPrimary.value = "";
					historialRentas.classList.remove("btn-warning");
					btnAccordionRentas.style.backgroundColor = "#495057";
					btnAccordionRentas.style.color = "#FFFFFF";
					return;
				}
			})
			.catch((error) => console.error("Error:", error));
	}
});
