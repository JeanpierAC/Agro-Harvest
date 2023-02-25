const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Validar que los campos de entrada no estén vacíos
	if (!username || !password) {
		errorMessage.innerHTML = 'Por favor, ingrese un nombre de usuario y contraseña.';
		return;
	}

	// Validar las credenciales
	// En este ejemplo, se utiliza una función "dummy" que siempre devuelve "true" para cualquier nombre de usuario y contraseña.
	if (!validateCredentials(username, password)) {
		errorMessage.innerHTML = 'Nombre de usuario o contraseña incorrectos.';
		return;
	}

	// Si las credenciales son válidas, redirigir al usuario a la página de inicio
	window.location.href = '/Main Content/main.html';
});

function validateCredentials(username, password) {
	// En una implementación real, aquí se debería realizar una llamada a una API o una base de datos para validar las credenciales del usuario.
	// En este ejemplo, se devuelve "true" para cualquier nombre de usuario y contraseña.
	return true;
}

