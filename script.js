
function changeImage(imageSrc) {
    document.getElementById("menuImage").src = imageSrc;
}


function enviarFormulario() {
    alert("Mensagem enviada com sucesso! Em breve responderemos!");
    return false; 
}


function mostrarPopup() {
    const email = document.getElementById('emailInput').value.trim();
    
    if (email && email.includes("@")) {
        alert("Cadastramento efetuado com sucesso!");
    } else {
        alert("Por favor, insira um email válido.");
    }
}

