window.addEventListener("load", () => {
	let button = document.getElementById("formulario");
	let usuario = document.getElementById("usuario");
	let password = document.getElementById("password");
	let alertt = document.getElementById("alert");

	function data() {
		fetch("validatelogin.php", {
			method: "POST",
			body: new URLSearchParams({
				usuario: usuario.value,
				password: password.value,
			}),
		})
			.then((response) => response.json())
			.then(({ success }) => {
				if (success === 1) {
					location.href = "home.php";
				} else {
					// Datos incorrectos
					alerta();
				}
			});
	}

	function alerta() {
		if (alertt.classList.contains("show")) {
			alertt.classList.remove("show");
		}
		alertt.innerHTML = `
        <div id='alert' style="color: red; padding: 5px 10px;">
            Datos incorrectos
        </div>
        `;
		setTimeout(() => {
			alertt.classList.add("show");
		}, 3000);
	}

	button.addEventListener("submit", (e) => {
		e.preventDefault();
		data();
	});
});

let eyePass = document.getElementById("eye-password");
eyePass.addEventListener("click", (e) => {
	if (password.value !== "") {
		eyePassword();
	}
});

function eyePassword() {
	if (password.type !== "text") {
		password.type = "text";
		eyePass.innerHTML = '<i class="fa-solid fa-eye"></i>';
	} else {
		password.type = "password";
		eyePass.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
	}
}
