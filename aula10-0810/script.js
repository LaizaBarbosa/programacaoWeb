const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    // Só para exemplo, vamos usar usuário: "user" e senha: "1234"
    if(username === 'user' && password === '1234') {
        message.style.color = 'green';
        message.textContent = 'Login efetuado com sucesso!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuário ou senha incorretos.';
    }
});
