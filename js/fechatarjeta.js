const fechaTarjeta = document.getElementById("fecha-tarjeta");
const btnTarjeta = document.getElementById("btn-tarjeta");

const pintarFecha = (id, cod) => {
	fetch("./php/fechatarjeta/listarfechatarjeta.php", {
		method: "POST",
		body: cod,
	})
		.then((response) => response.text())
		.then((response) => {
			fechaTarjeta.innerHTML = response;
			console.log(response);
		});
};

function btnTarjetaDropdown() {
	const btnTarjetaDropdownContent = document.getElementById(
		"btn-tarjeta-dropdown"
	);

	function convertDateFormat(dateString) {
		// Divide la cadena de fecha por el guion
		const [day, month, year] = dateString.split("-");

		// Retorna la fecha en el formato yyyy-mm-dd
		return `${year}-${month}-${day}`;
	}

	const dateForInput = convertDateFormat(
		btnTarjetaDropdownContent.textContent.trim()
	);

	const dropdowntarjetaInput = document.getElementById("dropdowntarjetainput");
	dropdowntarjetaInput.value = dateForInput;
	return dateForInput;

	// if (btnTarjetaDropdownContent.textContent === "00-00-0000") {
	// 	alert("no tiene fecha");
	// }
}

function ingresarIdFechaCirculacion(cod, fecha) {
	const data = {
		cod: cod,
		fecha: fecha,
	};

	console.log(JSON.stringify(data.fecha));
	// console.log(data + " (INFO QUE SE ENVIA)");

	fetch("./php/fechatarjeta/ingresarfechatarjeta.php", {
		method: "POST",
		headers: {
			"Content-Type": "application/json", // Especificar el tipo de contenido
		},
		body: JSON.stringify(data), // Convertir el objeto de datos a una cadena JSON
	})
		.then((response) => response.text())
		.then((response) => {
			console.log(response + " respuesta de backend");
			if (response === "ingresado") {
				alert("ingresado");
			} else if (response === "vacio") {
				alert("vacio");
			}
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}
