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

			// registrar.value = "Actualizar";
			// cancelar.style.display = "block";

			// cardTitle.style.color = "black";
			// cardTitle.textContent = "Actualizar registro";
			// cardHeader.classList.remove("bg-dark");
			// cardHeader.style.backgroundColor = "#ffc107";

			// codigo.disabled = true;
		});
}
