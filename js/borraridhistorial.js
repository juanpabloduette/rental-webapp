function borrarIdHistorial(id) {
	// console.log(id);
	Swal.fire({
		title: "Eliminar servicio ?",
		// text: "No podra volver atras",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#198754",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No",
	}).then((result) => {
		if (result.isConfirmed) {
			fetch("borraridhistorial.php", {
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
						listarhistorial((id = undefined), (cod = idv.value));
						cancelarActualizar();
					}
				});
		} else {
			cancelarActualizar();
		}
	});
}
