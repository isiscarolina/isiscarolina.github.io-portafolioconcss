function confirmarNombre(nome) {
    if (nome.split(' ').length > 1) {
        return true
    }
    return false
}

function formulario() {
    let nome = document.querySelector('#nome').value
    let submitButton = document.querySelector('button[type=submit]')
    if (confirmarNombre(nome)) {
        submitButton.disabled = false
    } else {
        submitButton.disabled = true
    }
}

document.querySelector('#nome').addEventListener('change', formulario)