const editarHistorialCancelar = document.getElementById(
	"historial-vehiculos-cancelar"
);

const btnAccordionHistorial = document.getElementById(
	"btn-accordion-historial"
);

function openAccordion() {
	const collapseElement = document.getElementById("flush-collapseOne");
	const buttonElement = document.getElementById("btn-accordion-historial");

	// Add the 'show' class to open the collapse
	collapseElement.classList.add("show");
	// Remove the 'collapsed' class from the button
	buttonElement.classList.remove("collapsed");
	// Set aria-expanded to true
	buttonElement.setAttribute("aria-expanded", "true");
}

function closeAccordion() {
	const collapseElement = document.getElementById("flush-collapseOne");
	const buttonElement = document.getElementById("btn-accordion-historial");

	// Remove the 'show' class to close the collapse
	collapseElement.classList.remove("show");
	// Add the 'collapsed' class to the button
	buttonElement.classList.add("collapsed");
	// Set aria-expanded to false
	buttonElement.setAttribute("aria-expanded", "false");
}

editarHistorialCancelar.addEventListener("click", (e) => {
	e.preventDefault();
	historialVehiculos.textContent = "Ingresar";
	btnAccordionHistorial.textContent = "Ingresar registro +";
	editarHistorialCancelar.style.display = "none";
	idPrimary.value = "";
	idv.value = "";
	frmVehiculos.reset();
	closeAccordion();
});

function editarIdHistorial(id) {
	fetch("editarhistorial.php", {
		method: "POST",
		body: id,
	})
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			idPrimary.value = response.id;
			idv.value = response.id_vehiculo;
			fechaHistorial.value = response.fecha;
			servicio.value = response.servicio;
			lugar.value = response.lugar;
			costo.value = response.costo;
			kilometros.value = response.kilometros;
			nota.value = response.notas;

			openAccordion();
			btnAccordionHistorial.textContent = "Actualizar registro +";
			historialVehiculos.textContent = "Actualizar";
			editarHistorialCancelar.style.display = "block";

			// registrar.value = "Actualizar";
			// cancelar.style.display = "block";

			// cardTitle.style.color = "black";
			// cardTitle.textContent = "Actualizar registro";
			// cardHeader.classList.remove("bg-dark");
			// cardHeader.style.backgroundColor = "#ffc107";

			// codigo.disabled = true;
		});
}
