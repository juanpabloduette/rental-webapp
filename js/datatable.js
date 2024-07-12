let table;

$(document).ready(function () {
	tableExecute();
});

function tableExecute() {
	table = $("#example").DataTable({
		dom: '<"top"Bf>rt<"bottom"lip><"clear">',
		buttons: [
			{
				extend: "excelHtml5",
				text: 'Excel <i class="fas fa-file-excel"></i>',
				titleAttr: "Export to Excel",
				className: "btn btn-sm",
			},
			{
				extend: "pdfHtml5",
				text: 'PDF <i class="fas fa-file-pdf"></i>',
				titleAttr: "Export to PDF",
				className: "btn btn-sm",
			},
			{
				extend: "print",
				text: 'Print <i class="fas fa-print"></i>',
				titleAttr: "Print Table",
				className: "btn btn-sm",
			},
		],
		responsive: true,
		language: {
			url: "language/es-MX.json",
		},
		columnDefs: [
			{
				orderable: false,
				targets: [6],
			},
			{ responsivePriority: 1, targets: 6 },
			{ responsivePriority: 2, targets: 1 },
		],
		pagingType: "simple_numbers",
	});

	$("#historialmodal").on("shown.bs.modal", function () {
		try {
			if (table && table.columns && typeof table.columns.adjust === "function") {
				table.columns.adjust();
			}
			if (
				table &&
				table.responsive &&
				typeof table.responsive.recalc === "function"
			) {
				table.responsive.recalc();
			}
		} catch (error) {
			console.error(
				"Error adjusting table columns or recalculating responsiveness:",
				error
			);
		}
	});
}

let tableRentas;

// $(document).ready(function () {
// 	tableRentasExecute();
// });

function tableRentasExecute() {
	table = $("#table-rentas").DataTable({
		dom: '<"top"Bf>rt<"bottom"lip><"clear">',
		buttons: [
			{
				extend: "excelHtml5",
				text: 'Excel <i class="fas fa-file-excel"></i>',
				titleAttr: "Export to Excel",
				className: "btn btn-sm",
			},
			{
				extend: "pdfHtml5",
				text: 'PDF <i class="fas fa-file-pdf"></i>',
				titleAttr: "Export to PDF",
				className: "btn btn-sm",
			},
			{
				extend: "print",
				text: 'Print <i class="fas fa-print"></i>',
				titleAttr: "Print Table",
				className: "btn btn-sm",
			},
		],
		responsive: true,
		language: {
			url: "language/es-MX.json",
		},
		columnDefs: [
			{
				orderable: false,
				targets: [12],
			},
			{ responsivePriority: 1, targets: 12 },
			{ responsivePriority: 2, targets: 1 },
			{ className: "dt-center", targets: [3, 4] },
			{
				// Aquí especificamos la columna de fecha/hora
				targets: [1, 2], // Cambia esto al índice de tu columna
				render: function (data, type, row) {
					if (type === "display" || type === "filter") {
						var date = new Date(data);
						var year = date.getFullYear();
						var month = (date.getMonth() + 1).toString().padStart(2, "0"); // Los meses empiezan en 0
						var day = date.getDate().toString().padStart(2, "0");
						var hours = date.getHours().toString().padStart(2, "0");
						var minutes = date.getMinutes().toString().padStart(2, "0");
						return `${year}-${month}-${day} ${hours}:${minutes}`;
					}
					return data;
				},

				targets: [7], // Índice de la columna que quieres modificar
				className: "dt-center", // Para centrar el contenido
				render: function (data, type, row) {
					if (data === "Efectivo") {
						return '<svg width="26px" height="26px" viewBox="0 0 64 64" id="icons" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:#ffffff;}</style></defs><title></title><path class="cls-1" d="M34,30H31a2,2,0,0,1,0-4h6a2,2,0,0,0,0-4H34V20a2,2,0,0,0-4,0v2.09A6,6,0,0,0,31,34h3a2,2,0,0,1,0,4H28a2,2,0,0,0,0,4h2v2a2,2,0,0,0,4,0V42a6,6,0,0,0,0-12Z"></path><path class="cls-1" d="M54.9,9H9.1A6.11,6.11,0,0,0,3,15.1V48.9A6.11,6.11,0,0,0,9.1,55H54.9A6.11,6.11,0,0,0,61,48.9V15.1A6.11,6.11,0,0,0,54.9,9ZM57,48.9A2.1,2.1,0,0,1,54.9,51H9.1A2.1,2.1,0,0,1,7,48.9V15.1A2.1,2.1,0,0,1,9.1,13H54.9A2.1,2.1,0,0,1,57,15.1Z"></path></g></svg>';
					} else if (data === "Tarjeta") {
						return '<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
					} else if (data === "Pendiente") {
						return '<svg fill="#c22424" width="27px" height="27px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" stroke="#c22424"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6,11a1,1,0,1,0,1,1A1,1,0,0,0,6,11Zm5.86-1.55h0L4.71,2.29A1,1,0,0,0,3.29,3.71L4.59,5H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H18.59l2.7,2.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-.74,2.09,1.34,1.34A1,1,0,0,1,12,13a1,1,0,0,1-1-1A1,1,0,0,1,11.12,11.54ZM4,17a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H6.59l3.1,3.1A3,3,0,0,0,9,12a3,3,0,0,0,3,3,3,3,0,0,0,1.9-.69L16.59,17ZM20,5H12.66a1,1,0,0,0,0,2H20a1,1,0,0,1,1,1v7.34a1,1,0,1,0,2,0V8A3,3,0,0,0,20,5Zm-1,7a1,1,0,1,0-1,1A1,1,0,0,0,19,12Z"></path></g></svg>';
					} else if (data === "Ef/Tarj.") {
						return '<svg fill="#ffffff" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 469.333 469.333" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M373.333,149.333h-64c-5.888,0-10.667,4.768-10.667,10.667c0,5.899,4.779,10.667,10.667,10.667h64 c5.888,0,10.667-4.768,10.667-10.667C384,154.101,379.221,149.333,373.333,149.333z"></path> </g> </g> <g> <g> <path d="M266.667,149.333H224c-5.888,0-10.667,4.768-10.667,10.667c0,5.899,4.779,10.667,10.667,10.667h42.667 c5.888,0,10.667-4.768,10.667-10.667C277.333,154.101,272.555,149.333,266.667,149.333z"></path> </g> </g> <g> <g> <path d="M437.333,192h-10.667V32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32v213.333c0,17.643,14.357,32,32,32h10.667 v160c0,17.643,14.357,32,32,32h362.667c17.643,0,32-14.357,32-32V224C469.333,206.357,454.976,192,437.333,192z M21.333,32 c0-5.888,4.789-10.667,10.667-10.667h362.667c5.877,0,10.667,4.779,10.667,10.667v42.667h-384V32z M42.667,224v32H32 c-5.877,0-10.667-4.779-10.667-10.667V128h384v64H74.667C57.024,192,42.667,206.357,42.667,224z M448,437.333 c0,5.888-4.789,10.667-10.667,10.667H74.667C68.789,448,64,443.221,64,437.333V224c0-5.888,4.789-10.667,10.667-10.667h362.667 c5.877,0,10.667,4.779,10.667,10.667V437.333z"></path> </g> </g> <g> <g> <path d="M256,234.667c-52.928,0-96,43.061-96,96s43.072,96,96,96s96-43.061,96-96C352,277.728,308.928,234.667,256,234.667z M256,405.333c-41.173,0-74.667-33.504-74.667-74.667C181.333,289.504,214.827,256,256,256s74.667,33.504,74.667,74.667 C330.667,371.829,297.173,405.333,256,405.333z"></path> </g> </g> <g> <g> <circle cx="96" cy="330.667" r="10.667"></circle> </g> </g> <g> <g> <circle cx="138.667" cy="330.667" r="10.667"></circle> </g> </g> <g> <g> <circle cx="373.333" cy="330.667" r="10.667"></circle> </g> </g> <g> <g> <circle cx="416" cy="330.667" r="10.667"></circle> </g> </g> <g> <g> <path d="M263.616,320h-21.333v-9.141h32c5.888,0,10.667-4.768,10.667-10.667s-4.779-10.667-10.667-10.667h-7.616V288 c0-5.899-4.779-10.667-10.667-10.667c-5.888,0-10.667,4.768-10.667,10.667v1.525h-3.051c-11.765,0-21.333,9.568-21.333,21.333V320 c0,11.765,9.568,21.333,21.333,21.333h21.333v9.141h-32c-5.888,0-10.667,4.768-10.667,10.667s4.779,10.667,10.667,10.667h7.616 v1.525c0,5.899,4.779,10.667,10.667,10.667s10.667-4.768,10.667-10.667v-1.525h3.051c11.765,0,21.333-9.568,21.333-21.333v-9.141 C284.949,329.568,275.381,320,263.616,320z"></path> </g> </g> </g></svg>';
					} else {
						return data; // Retorna el valor original si no coincide con los casos
					}
				},
			},
			{
				targets: [6], // Índice de la columna de precio
				render: function (data, type, row) {
					return "$ " + data;
				},
			},
		],
		order: [[0, "desc"]], // Ordena por la columna de fecha de forma descendente
		pagingType: "simple_numbers",
	});
	$("#modalventas").on("shown.bs.modal", function () {
		try {
			if (table && table.columns && typeof table.columns.adjust === "function") {
				table.columns.adjust();
			}
			if (
				table &&
				table.responsive &&
				typeof table.responsive.recalc === "function"
			) {
				table.responsive.recalc();
			}
		} catch (error) {
			console.error(
				"Error adjusting table columns or recalculating responsiveness:",
				error
			);
		}
	});
}
