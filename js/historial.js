const historialVehiculos = document.getElementById("historial-vehiculos");
const frmVehiculos = document.getElementById("frm-vehiculos");

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
	if (
		validarHistorial.campoFecha &&
		validarHistorial.campoServicio &&
		validarHistorial.campoLugar &&
		validarHistorial.campoCosto &&
		validarHistorial.campoKilometros
	) {
		fetch("ingresarhistorial.php", {
			method: "POST",
			body: new URLSearchParams({
				idv: idvehiculo.value,
				fecha: fechahistorial.value,
				servicio: servicio.value,
				lugar: lugar.value,
				costo: costo.value,
				kilometros: kilometros.value,
				nota: nota.value,
			}),
		})
			.then((response) => response.text())
			.then((response) => {
				// console.log(response);
				if (response === "ingresado") {
					Swal.fire({
						icon: "success",
						title: "Ingresado",
						showConfirmButton: false,
						timer: 950,
					});

					listarhistorial((id = undefined), (cod = idv.value));
					frmVehiculos.reset();
				}
			});
	}
});

function validacionHistorial() {
	if (servicio.value === "") {
		Swal.fire({
			icon: "error",
			title: "Ingrese un servicio válido",
			showConfirmButton: true,
			// timer: 1100
		});
		validarHistorial.campoServicio = false;
		return;
	} else {
		validarHistorial.campoServicio = true;
	}

	(validarHistorial.campoFecha = true),
		(validarHistorial.campoLugar = true),
		(validarHistorial.campoCosto = true),
		(validarHistorial.campoKilometros = true);
}
