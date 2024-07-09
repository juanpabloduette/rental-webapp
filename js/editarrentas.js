const btnAccordionRentas = document.getElementById("btn-accordion-rentas");

const historialRentas = document.getElementById("historial-rentas");

const editarRentasCancelar = document.getElementById(
	"historial-rentas-cancelar"
);

const frmVentas = document.getElementById("frm-ventas");

const buttonModalCloseVentas = document.getElementById(
	"button-modal-close-ventas"
);

buttonModalCloseVentas.addEventListener("click", () => {
	cancelarActualizarVentas();
	// document.title = `APP RENTAL`;
	// idv.value = "";
});

const buttonModalCloseFooterVentas = document.getElementById(
	"button-modal-close-footer-ventas"
);

buttonModalCloseFooterVentas.addEventListener("click", () => {
	cancelarActualizarVentas();
	// document.title = `APP RENTAL`;
	// idv.value = "";
});

function openAccordionVentas() {
	const collapseElementRentas = document.getElementById(
		"flush-collapseOneRentas"
	);
	// Add the 'show' class to open the collapse
	collapseElementRentas.classList.add("show");
	// Remove the 'collapsed' class from the button
	btnAccordionRentas.classList.remove("collapsed");
	// Set aria-expanded to true
	btnAccordionRentas.setAttribute("aria-expanded", "true");
}

function closeAccordionVentas() {
	const collapseElementRentas = document.getElementById(
		"flush-collapseOneRentas"
	);
	// Remove the 'show' class to close the collapse
	collapseElementRentas.classList.remove("show");
	// Add the 'collapsed' class to the button
	btnAccordionRentas.classList.add("collapsed");
	// Set aria-expanded to false
	btnAccordionRentas.setAttribute("aria-expanded", "false");
}

editarRentasCancelar.addEventListener("click", (e) => {
	e.preventDefault();
	cancelarActualizarVentas();
});

function cancelarActualizarVentas() {
	historialRentas.textContent = "Ingresar";
	historialRentas.classList.remove("btn-warning");
	btnAccordionRentas.style.backgroundColor = "#343A40";
	btnAccordionRentas.style.color = "#FFFFFF";
	btnAccordionRentas.textContent = "Ingresar registro +";
	editarRentasCancelar.style.display = "none";

	// idPrimary.value = "";

	frmVentas.reset();
	closeAccordionVentas();
}

function irAlTopVentas() {
	const modalBodyVentas = document.querySelector(".modal-body-ventas");
	modalBodyVentas.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

function editarIdRentas(id) {
	fetch("./php/rentas/editarrentas.php", {
		method: "POST",
		body: id,
	})
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			fechaventa.value = response.fecha;
			fechaventadesde.value = response.desde;
			fechaventahasta.value = response.hasta;
			cantdias.value = response.dias;
			vehiculoventa.value = response.nrovehiculo;
			precioventa.value = response.precio;
			pagoventa.value = response.pago;
			depositoventa.value = response.deposito;
			vendedorventa.value = response.vendedor;
			notaventa.value = response.nota;
			idnumerorenta.value = response.id;

			openAccordionVentas();
			irAlTopVentas();
			btnAccordionRentas.textContent = "Actualizar registro +";
			btnAccordionRentas.style.backgroundColor = "rgb(255, 193, 7)";
			btnAccordionRentas.style.color = "black";
			historialRentas.textContent = "Actualizar";
			historialRentas.classList.add("btn-warning");
			editarRentasCancelar.style.display = "block";
		});
}
