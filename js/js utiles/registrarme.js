const inputNombre = document.querySelector("#inputNombre")

const inputEmail = document.querySelector("#inputEmail")

const inputTelefono = document.querySelector("#inputTelefono")

const inputUsuario = document.querySelector("#inputUsuario")

const inputContrasenia = document.querySelector("#inputContrasenia")

const btnRegistrarme = document.querySelector("button.registrarme")

const almacenarDatos = () => {
    if (inputNombre.value.trim() !== "") {
        localStorage.setItem("Nombre", inputNombre.value)
    }
    if (inputEmail.value.trim() !== "") {
        localStorage.setItem("Email", inputEmail.value)
    }
    if (inputTelefono.value.trim() !== "") {
        localStorage.setItem("Telefono", inputTelefono.value)
    }
    if (inputUsuario.value.trim() !== "") {
        localStorage.setItem("Usuario", inputUsuario.value)
    }
    //if (inputContrasenia.value.trim() !== "") { localStorage.setItem("Contrasenia", inputContrasenia.value)} Esto no anduvo
}

btnRegistrarme.addEventListener("click", almacenarDatos)

const recordarUsuario = () => {
    if (localStorage.getItem("Usuario")) {
        inputUsuario.value = localStorage.getItem("Usuario")
    }
}

document.addEventListener("DOMContentLoaded", recordarUsuario)