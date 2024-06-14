ListarProductos();

function ListarProductos(busqueda) {
	fetch("listar.php", {
		method: "POST",
		body: busqueda,
	})
		.then((response) => response.text())
		.then((response) => {
			resultado.innerHTML = response;
		});
}

const validacion = {
	campoCodigo: false,
	campoProducto: false,
	campoEstado: false,
	campoFecha: false,
	campoTienda: false,
};

function validacionDatos() {
	// alert(codigo.value);
	if (codigo.value != "") {
		validacion.campoCodigo = true;
	} else {
		validacion.campoCodigo = false;

		return Swal.fire({
			icon: "error",
			title: "Ingrese un número",
			showConfirmButton: true,
			// timer: 950
		});
	}

	if (estado.value != "") {
		validacion.campoEstado = true;
	} else {
		validacion.campoEstado = false;
		return Swal.fire({
			icon: "error",
			title: "Ingrese un estado",
			showConfirmButton: true,
			// timer: 950
		});
	}

	if (producto.value != "") {
		validacion.campoProducto = true;
	} else {
		validacion.campoProducto = false;
		return Swal.fire({
			icon: "error",
			title: "Ingrese una descripción",
			showConfirmButton: true,
			// timer: 950
		});
	}

	if (tienda.value != "") {
		validacion.campoTienda = true;
	} else {
		validacion.campoTienda = false;
		return Swal.fire({
			icon: "error",
			title: "Ingrese una tienda",
			showConfirmButton: true,
			// timer: 950
		});
	}
}

// HABILITAR CAMPO FECHA CUANDO EL ESTADO ES "RENTADO"
const fecha = document.getElementById("fecha");
const estado = document.getElementById("estado");

estado.addEventListener("click", () => {
	if (estado.value == "Rentado") {
		fecha.disabled = false;
	} else {
		fecha.value = "";
		fecha.disabled = true;
	}
});

const validacionFecha = () => {
	let fechaIngresada = new Date(`${fecha.value}T23:59:59`);
	let fechaActual = new Date();
	// alert(fecha.value);
	// alert(fechaIngresada);
	// Verificar si el valor ingresado no es una fecha válida o Verificar si la fecha ingresada es anterior a la fecha actual
	if (isNaN(fechaIngresada.getDate()) || fechaIngresada < fechaActual) {
		//   console.log(fechaIngresada)
		//   console.log(fechaActual)
		Swal.fire({
			icon: "error",
			title: "Ingrese una fecha válida",
			showConfirmButton: true,
			// timer: 1100
		});
		validacion.campoFecha = false;
		return;
	}

	// Verificar si el mes de febrero tiene 29 días en caso de ser año bisiesto
	let año = fechaIngresada.getFullYear();
	if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
		if (fechaIngresada.getMonth() === 1 && fechaIngresada.getDate() === 29) {
			// alert("LA FECHA ESTA BIEN, ES BISIESTO");
			// alert(fechaIngresada.getDate());
			validacion.campoFecha = true;
			return;
		}
	}

	// Si pasa todas las validaciones, la fecha es válida
	validacion.campoFecha = true;
	return;
};

registrar.addEventListener("click", () => {
	validacionDatos();

	if (estado.value == "Rentado") {
		validacionFecha();
	} else {
		validacion.campoFecha = true;
	}

	if (
		validacion.campoCodigo &&
		validacion.campoEstado &&
		validacion.campoFecha &&
		validacion.campoProducto &&
		validacion.campoTienda
	) {
		borrarBusqueda.style.display = "none"; //borra cerrar de busqueda
		buscar.value = ""; //borra campo de busqueda
		borrarDescripcion.style.display = "none"; //borra cerrar de campo descripcion

		// const data = new FormData(frm);
		// data.append("codigo", codigo.value);

		// for (const value of data.values()) {
		//     console.log(value);
		// }
		// for (var p of data) {
		//   let name = p[0];
		//   let value = p[1];

		//   console.log(name, value);
		// }

		fetch("registrar.php", {
			method: "POST",
			body: new URLSearchParams({
				idp: idp.value,
				codigo: codigo.value,
				estado: estado.value,
				fecha: fecha.value,
				producto: producto.value,
				tienda: tienda.value,
			}),
		})
			.then((response) => response.text())
			.then((response) => {
				if (response == "ok") {
					Swal.fire({
						icon: "success",
						title: "Registrado",
						showConfirmButton: false,
						timer: 950,
					});
					frm.reset();
					ListarProductos();
					animateBars(); //guarda el menu en responsive
				} else if (response == "existe") {
					Swal.fire({
						icon: "error",
						title: "El número " + codigo.value + " ya existe",
						showConfirmButton: true,
						// timer: 950
					});
				} else {
					codigo.disabled = false;
					Swal.fire({
						icon: "success",
						title: "Modificado",
						showConfirmButton: false,
						timer: 950,
					});

					cardTitle.textContent = "Ingresar vehículo";
					cardTitle.style.color = "white";
					registrar.value = "Ingresar";
					cardHeader.classList.add("bg-dark");
					idp.value = "";
					// alert(codigo.value);
					ListarProductos();
					cancelar.style.display = "none";
					animateBars();
					fecha.disabled = true;
					frm.reset();
				}
			});
	}
});

cancelar = document.getElementById("cancelar");
let cardTitle = document.getElementById("cardtitle");
let cardHeader = document.getElementById("card-header");

cancelar.addEventListener("click", () => {
	borrarDescripcion.style.display = "none"; //borra cerrar de campo descripcion
	animateBars(); //guarda el menu en responsive
	frm.reset();
	registrar.value = "Ingresar";
	cancelar.style.display = "none";
	idp.value = "";
	cardHeader.classList.add("bg-dark");
	cardTitle.style.color = "white";
	cardTitle.textContent = "Ingresar vehículo";
	codigo.disabled = false;
	fecha.disabled = true;
});

function Eliminar(id, cod) {
	frm.reset();
	registrar.value = "Ingresar";
	cancelar.style.display = "none";
	idp.value = "";
	cardHeader.classList.add("bg-dark");
	cardTitle.style.color = "white";
	cardTitle.textContent = "Ingresar vehículo";
	codigo.disabled = false; // estaba en false, pero lo puse "true" para cuando pones editar un item pero despues clickeas en borrar otro.
	fecha.disabled = true;
	borrarDescripcion.style.display = "none"; //borra cerrar de campo descripcion

	borrarBusqueda.style.display = "none"; //borra cerrar de busqueda
	buscar.value = ""; //borra campo de busqueda
	Swal.fire({
		title: "Esta seguro de eliminar el registro N° " + cod + " ?",
		// text: "No podra volver atras",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No",
	}).then((result) => {
		if (result.isConfirmed) {
			fetch("eliminar.php", {
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
						ListarProductos();
					}
				});
		}
	});
}

function Editar(id) {
	borrarDescripcion.style.display = "block"; //muestra cerrar de campo descripcion
	animateBars(); //muestra el menu en responsive

	fetch("editar.php", {
		method: "POST",
		body: id,
	})
		.then((response) => response.json())
		.then((response) => {
			idp.value = response.id;
			codigo.value = response.codigo;
			fecha.value = response.fecha;
			estado.value = response.estado;
			producto.value = response.producto;
			tienda.value = response.tienda;

			if (estado.value == "Rentado") {
				fecha.disabled = false;
			} else {
				fecha.disabled = true;
			}

			registrar.value = "Actualizar";
			cancelar.style.display = "block";

			cardTitle.style.color = "black";
			cardTitle.textContent = "Actualizar registro";
			cardHeader.classList.remove("bg-dark");
			cardHeader.style.backgroundColor = "#ffc107";

			codigo.disabled = true;
		});
}

const borrarBusqueda = document.querySelector(".cerrar-busqueda");

borrarBusqueda.addEventListener("click", () => {
	buscar.value = "";
	ListarProductos();
	borrarBusqueda.style.display = "none";
});

const borrarDescripcion = document.querySelector(".cerrar-descripcion");

borrarDescripcion.addEventListener("click", () => {
	producto.value = "";
	borrarDescripcion.style.display = "none";
});

producto.addEventListener("keyup", () => {
	const valor = producto.value;
	if (valor == "") {
		borrarDescripcion.style.display = "none";
	} else {
		borrarDescripcion.style.display = "block";
	}
});

buscar.addEventListener("keyup", () => {
	const valor = buscar.value;

	if (valor == "") {
		ListarProductos();
		borrarBusqueda.style.display = "none";
	} else {
		ListarProductos(valor);
		borrarBusqueda.style.display = "block";
	}
});

// MENU RESPONSIVE
const container = document.querySelector(".container");
document.querySelector(".bars__menu").addEventListener("click", animateBars);
const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const menu = document.getElementById("menu");

function animateBars() {
	line1__bars.classList.toggle("activeline1__bars-menu");
	line2__bars.classList.toggle("activeline2__bars-menu");
	line3__bars.classList.toggle("activeline3__bars-menu");

	if (menu.style.left != "0px") {
		mostrar_menu();
	} else {
		ocultar_menu();
	}
}

function mostrar_menu() {
	menu.style.left = "0px";
}

function ocultar_menu() {
	menu.style.left = "-1000px";
	frm.reset();
	registrar.value = "Ingresar";
	cancelar.style.display = "none";
	idp.value = "";
	cardHeader.classList.add("bg-dark");
	cardTitle.style.color = "white";
	cardTitle.textContent = "Ingresar vehículo";
	codigo.disabled = false;
}
