const inputNombre = document.querySelector("input#inputNombre")
const inputEmail = document.querySelector("input#inputEmail")
const inputTelefono = document.querySelector("input#inputTelefono")
const inputUsuario = document.querySelector("input#inputUsuario")
const inputContraseña = document.querySelector("input#inputContraseña")
const btnRegistrarme = document.querySelector("button#btnRegistrarme")

//Tiene sentido que recupere los datos de registro? No me convence
const registro = () => {
    if ((inputNombre.value !== "") && (inputEmail.value !== "") && (inputTelefono.value !== "") && (inputUsuario.value !== "") && (inputContraseña.value !== "")) {
        localStorage.setItem("nombre",inputNombre.value)
        localStorage.setItem("email",inputEmail.value)
        localStorage.setItem("telefono",inputTelefono.value)
        localStorage.setItem("usuario",inputUsuario.value)
        localStorage.setItem("contraseña",inputContraseña.value)
    }
}

const recuperarDatosRegistro = () => {
    if (localStorage.getItem("nombre")) {
        inputNombre.value = localStorage.getItem("nombre")
        inputEmail.value = localStorage.getItem("email")
        inputTelefono.value = localStorage.getItem("telefono")
        inputUsuario.value = localStorage.getItem("usuario")
    }
}

document.addEventListener("DOMContentLoaded",recuperarDatosRegistro)

btnRegistrarme.addEventListener("click", registro)