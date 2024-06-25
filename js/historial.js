const historialVehiculos = document.getElementById("historial-vehiculos");
const frmVehiculos = document.getElementById("frm-vehiculos");

const idPrimary = document.getElementById("idprimary"); // solo para almacenar la primary key al editar el historial
const idv = document.getElementById("idvehiculo");
const fechaHistorial = document.getElementById("fechahistorial");
const servicio = document.getElementById("servicio");
const lugar = document.getElementById("lugar");
const costo = document.getElementById("costo");
const kilometros = document.getElementById("kilometros");
const nota = document.getElementById("nota");

const validarHistorial = {
	campoFecha: false,
	campoServicio: false,
	campoLugar: false,
	campoCosto: false,
	campoKilometros: false,
	// campoNota: false,
};

historialVehiculos.addEventListener("click", (e) => {
	e.preventDefault();
	validacionHistorial();
	//aca iria el bloque que esta antes del fech, chequear si funciona todo bien así
	// console.log(idPrimary.value);
	if (
		validarHistorial.campoFecha &&
		validarHistorial.campoServicio &&
		validarHistorial.campoLugar &&
		validarHistorial.campoCosto &&
		validarHistorial.campoKilometros

		//hay que validar si esta todo repetido que no siga
	) {
		console.log(idPrimary);
		fetch("ingresarhistorial.php", {
			method: "POST",
			body: new URLSearchParams({
				idprimary: idPrimary.value, // agregada para actualizar el historial
				idv: idvehiculo.value,
				fecha: fechaHistorial.value,
				// fecha: fechahistorial.value,
				servicio: servicio.value,
				lugar: lugar.value,
				costo: costo.value,
				kilometros: kilometros.value,
				nota: nota.value,
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
					deActualizarAIngresar();
					return;
				} else if (response === "actualizado") {
					Swal.fire({
						icon: "success",
						title: "Actualizado",
						showConfirmButton: false,
						timer: 950,
					});
					deActualizarAIngresar();
					idPrimary.value = "";
					idv.value = "";
					historialVehiculos.classList.remove("btn-warning");
					btnAccordionHistorial.style.backgroundColor = "#495057";
					btnAccordionHistorial.style.color = "#FFFFFF";
					return;
				}
			})
			.catch((error) => console.error("Error:", error));
	}
});

function deActualizarAIngresar() {
	if (historialVehiculos.textContent === "Actualizar") {
		historialVehiculos.textContent = "Ingresar";
	}
	editarHistorialCancelar.style.display = "none";
	btnAccordionHistorial.textContent = "Ingresar registro +";
	listarhistorial((id = undefined), (cod = idv.value));
	frmVehiculos.reset();
}

function validacionHistorial() {
	if (fechaHistorial.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo fecha está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarHistorial.campoFecha = false);
	} else {
		validarHistorial.campoFecha = true;
	}

	if (servicio.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo servicio está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarHistorial.campoServicio = false);
	} else {
		validarHistorial.campoServicio = true;
	}

	if (lugar.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Lugar está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarHistorial.campoLugar = false);
	} else {
		validarHistorial.campoLugar = true;
	}

	if (costo.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Costo está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarHistorial.campoCosto = false);
	} else if (isNaN(costo.value)) {
		Swal.fire({
			icon: "error",
			title: "El campo Costo solo debe contener números",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarHistorial.campoCosto = false);
	} else {
		validarHistorial.campoCosto = true;
	}

	if (kilometros.value === "") {
		Swal.fire({
			icon: "error",
			title: "El campo Kilometros está vacío",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarHistorial.campoKilometros = false);
	} else if (isNaN(kilometros.value)) {
		Swal.fire({
			icon: "error",
			title: "El campo Kilometros solo debe contener números",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarHistorial.campoKilometros = false);
	} else if (kilometros.value < 0) {
		Swal.fire({
			icon: "error",
			title: "El campo Kilometros no puede tener numeros negativos",
			showConfirmButton: true,
			// timer: 1100
		});
		return (validarHistorial.campoKilometros = false);
	} else {
		validarHistorial.campoKilometros = true;
	}
}
