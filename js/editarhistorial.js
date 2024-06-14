const editarHistorialCancelar = document.getElementById(
	"historial-vehiculos-cancelar"
);

const btnAccordionHistorial = document.getElementById(
	"btn-accordion-historial"
);

const buttonModalClose = document.getElementById("button-modal-close");

buttonModalClose.addEventListener("click", () => {
	cancelarActualizar();
	document.title = `APP RENTAL`;
	idv.value = "";
});

const buttonModalCloseFooter = document.getElementById(
	"button-modal-close-footer"
);

buttonModalCloseFooter.addEventListener("click", () => {
	cancelarActualizar();
	document.title = `APP RENTAL`;
	idv.value = "";
});

function openAccordion() {
	const collapseElement = document.getElementById("flush-collapseOne");
	// Add the 'show' class to open the collapse
	collapseElement.classList.add("show");
	// Remove the 'collapsed' class from the button
	btnAccordionHistorial.classList.remove("collapsed");
	// Set aria-expanded to true
	btnAccordionHistorial.setAttribute("aria-expanded", "true");
}

function closeAccordion() {
	const collapseElement = document.getElementById("flush-collapseOne");
	// Remove the 'show' class to close the collapse
	collapseElement.classList.remove("show");
	// Add the 'collapsed' class to the button
	btnAccordionHistorial.classList.add("collapsed");
	// Set aria-expanded to false
	btnAccordionHistorial.setAttribute("aria-expanded", "false");
}

editarHistorialCancelar.addEventListener("click", (e) => {
	e.preventDefault();
	cancelarActualizar();
});

function cancelarActualizar() {
	historialVehiculos.textContent = "Ingresar";
	historialVehiculos.classList.remove("btn-warning");
	btnAccordionHistorial.style.backgroundColor = "#343A40";
	btnAccordionHistorial.style.color = "#FFFFFF";
	btnAccordionHistorial.textContent = "Ingresar registro +";
	editarHistorialCancelar.style.display = "none";
	console.log("id primary " + idPrimary.value);
	console.log("idv " + idv.value);

	idPrimary.value = "";
	// idv.value = "";
	console.log("id primary " + idPrimary.value);
	console.log("idv " + idv.value);
	frmVehiculos.reset();
	closeAccordion();
}

function irAlTop() {
	const modalBody = document.querySelector(".modal-body");
	modalBody.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

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
			irAlTop();
			btnAccordionHistorial.textContent = "Actualizar registro +";
			btnAccordionHistorial.style.backgroundColor = "rgb(255, 193, 7)";
			btnAccordionHistorial.style.color = "black";
			historialVehiculos.textContent = "Actualizar";
			historialVehiculos.classList.add("btn-warning");
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
