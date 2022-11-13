const inputUsuario = document.querySelector("input#inputUsuario")
const inputContraseña = document.querySelector("input#inputContraseña")
const btnIniciarSesion = document.querySelector("button#btnIniciarSesion")

const iniciarSesion = () => {
    if ((inputUsuario.value.trim() !== "") && (inputContraseña.value.trim() !== "")) {
        localStorage.setItem("usuario", inputUsuario.value)
        localStorage.setItem("contraseña", inputContraseña.value)
    }
}

const datosCompletos = () => ((inputUsuario.value.trim() !== "") && (inputContraseña.value.trim() !== "")) ? true : false

const recuperarDatosiniciarSesion = () => {
    if (localStorage.getItem("usuario")) {
        inputUsuario.value = localStorage.getItem("usuario")
        inputContraseña.value = localStorage.getItem("contraseña")
    }
}

const preguntarGuardarDatosIniciarSesion = () => {
    if (datosCompletos()) {
        let pregunta = confirm("¿Deseas que recuerde tu usuario y contraseña?")
        if (pregunta) {
            document.addEventListener("DOMContentLoaded", recuperarDatosiniciarSesion)
            iniciarSesion()
        } else {
            iniciarSesion()
            localStorage.removeItem("usuario")
            localStorage.removeItem("contraseña")
        }
    } else {
        alert("⛔️ Debes llenar todos los datos en pantalla.")
    }
}

btnIniciarSesion.addEventListener("click", preguntarGuardarDatosIniciarSesion)
