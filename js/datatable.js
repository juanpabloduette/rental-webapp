let table;
$(document).ready(function () {
	tableExecute();
});

function tableExecute() {
	table = $("#example").DataTable({
		layout: {
			dom: "Bfrtip",
			topStart: {
				buttons: [
					{
						extend: "excelHtml5",
						text: ' Excel <i class="fas fa-file-excel"></i>',
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
			},
		},
		responsive: true,
		responsive: {
			breakpoints: [
				{ name: "desktop", width: Infinity },
				{ name: "tablet", width: 1024 },
				{ name: "fablet", width: 768 },
				{ name: "phone", width: 480 },
			],
		},
		language: {
			url: "language/es-MX.json",
		},
		columnDefs: [
			{
				orderable: false,
				targets: [6],
			},
			// {
			// 	targets: 0,
			// 	render: DataTable.render.datetime("d MMM yyyy", "MMM d, yy", "en"),
			// },
			{ responsivePriority: 1, targets: 6 },
			{ responsivePriority: 2, targets: 1 },
		],
		pagingType: "simple_numbers",
	});
}
