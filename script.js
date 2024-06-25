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
	PanelRender();
}

function PanelRender() {
	let CountAtv = 0;
	let CountAtvNoDisp = 0;
	let CountAtvRentado = 0;
	let CountScooter = 0;
	let CountScooterNoDisp = 0;
	let CountScooterRentado = 0;
	let CountBicycle = 0;

	fetch("panel.php")
		.then((response) => response.json())
		.then((response) => {
			// console.log(response);

			response.forEach((element) => {
				switch (element.producto) {
					case "ATV 150cc":
						if (element.estado === "Disponible") {
							CountAtv++;
						} else if (element.estado === "No Disp.") {
							CountAtvNoDisp++;
						} else {
							CountAtvRentado++;
						}
						break;
					case "ATV 200cc":
						if (element.estado === "Disponible") {
							CountAtv++;
						} else if (element.estado === "No Disp.") {
							CountAtvNoDisp++;
						} else {
							CountAtvRentado++;
						}
						break;
					case "Scooter Vitalia 150cc":
						if (element.estado === "Disponible") {
							CountScooter++;
						} else if (element.estado === "No Disp.") {
							CountScooterNoDisp++;
						} else {
							CountScooterRentado++;
						}
						break;
					case "Scooter 125cc":
						if (element.estado === "Disponible") {
							CountScooter++;
						} else if (element.estado === "No Disp.") {
							CountScooterNoDisp++;
						} else {
							CountScooterRentado++;
						}
						break;
					case "Scooter W150":
						if (element.estado === "Disponible") {
							CountScooter++;
						} else if (element.estado === "No Disp.") {
							CountScooterNoDisp++;
						} else {
							CountScooterRentado++;
						}
						break;
					case "Bicicleta":
						if (element.estado === "Disponible") {
							CountBicycle++;
						}
						break;
					default:
						break;
				}
			});
			const panelTop = document.getElementById("panel--top");
			panelTop.innerHTML = `
	  		<div class="panel_disponibles">
                <div class='panel-disponible'>
					<div class="panel-span panel-span-1">Disponibles</div>
				</div>
				<div class='panel-atv'>
					<img src='./images/atv.svg' style='width: 30px;'/><p>${CountAtv}</p>
				</div>
				<div class='panel-scooter'>
					<img src='./images/scooter.svg' style='width: 28px;'/><p>${CountScooter}</p>
				</div>
				<div class='panel-bicycle'>
					<img src='./images/bicycle.svg' style='width: 26px;'/><p>${CountBicycle}</p>
				</div>
				<div class='panel-buggy'>
					<img src='./images/buggy.svg' style='width: 26px;'/><p>0</p>
				</div>
            </div>
            <div class="panel_no-disponibles">
                <div class="panel-span panel-span-2">No disponibles</div>
                <div class='panel-atv'>
					<img src='./images/atv.svg' style='width: 30px;'/><p>${CountAtvNoDisp}</p>
				</div>
				<div class='panel-scooter'>
					<img src='./images/scooter.svg' style='width: 28px;'/><p>${CountScooterNoDisp}</p>
				</div>
				<div class='panel-bicycle'>
					<img src='./images/bicycle.svg' style='width: 26px;'/><p>${CountBicycle}</p>
				</div>
				<div class='panel-buggy'>
					<img src='./images/buggy.svg' style='width: 26px;'/><p>0</p>
				</div>
            </div>
            <div class="panel_rentados">
                <div class="panel-span panel-span-3">Rentados</div>
                <div class='panel-atv'>
					<img src='./images/atv.svg' style='width: 30px;'/><p>${CountAtvRentado}</p>
				</div>
				<div class='panel-scooter'>
					<img src='./images/scooter.svg' style='width: 28px;'/><p>${CountScooterRentado}</p>
				</div>
				<div class='panel-bicycle'>
					<img src='./images/bicycle.svg' style='width: 26px;'/><p>${CountBicycle}</p>
				</div>
					<div class='panel-buggy'>
					<img src='./images/buggy.svg' style='width: 26px;'/><p>0</p>
				</div>
            </div>
	`;
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
			title: "Ingrese un tipo de vehículo",
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
	if (estado.value === "Rentado") {
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
				console.log(response);
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
const cardTitle = document.getElementById("cardtitle");
const cardHeader = document.getElementById("card-header");

cancelar.addEventListener("click", () => {
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
	codigo.disabled = false;
	fecha.disabled = true;
	// borrarDescripcion.style.display = "none";
	borrarBusqueda.style.display = "none"; //borra cerrar de busqueda
	buscar.value = ""; //borra campo de busqueda
	Swal.fire({
		title: "Esta seguro de eliminar el vehículo N° " + cod + " ?",
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
			cardTitle.textContent = "Actualizar vehículo";
			cardHeader.classList.remove("bg-dark");
			cardHeader.style.backgroundColor = "#ffc107";

			codigo.disabled = true;
		});
}

const borrarBusqueda = document.querySelector(".cerrar-busqueda");
borrarBusqueda.style.display = "none";
borrarBusqueda.addEventListener("click", () => {
	buscar.value = "";
	ListarProductos();
	borrarBusqueda.style.display = "none";
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
