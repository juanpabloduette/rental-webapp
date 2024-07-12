function borrarIdRenta(id) {
	// console.log(id);
	Swal.fire({
		title: "Eliminar renta ?",
		// text: "No podra volver atras",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No",
	}).then((result) => {
		if (result.isConfirmed) {
			fetch("./php/rentas/eliminarrentas.php", {
				method: "POST",
				body: id,
			})
				.then((response) => response.text())
				.then((response) => {
					if (response == "okk") {
						// console.log(response);
						Swal.fire({
							icon: "success",
							title: "Eliminado",
							showConfirmButton: false,
							timer: 950,
						});
						listarrentas();
						// cancelarActualizar();
						cancelarActualizarVentas();
					}
				});
		} else {
			// cancelarActualizar();
			cancelarActualizarVentas();
		}
	});
}
