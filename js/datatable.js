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
