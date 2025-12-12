document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let msg = document.getElementById("mensagem");

    if (senha !== confirmarSenha) {
        msg.style.color = "red";
        msg.innerText = "As senhas não coincidem!";
        return;
    }

    if (senha.length < 6) {
        msg.style.color = "red";
        msg.innerText = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Cadastro realizado com sucesso!";

    // Aqui você pode enviar para backend, API, banco etc.
});
