const inputUsuario = document.querySelector("input#inputUsuario")
const inputContraseña = document.querySelector("input#inputContraseña")
const btnIniciarSesion = document.querySelector("button#btnIniciarSesion")

const iniciarSesion = () => {
    if ((inputUsuario.value.trim() !== "") && (inputContraseña.value.trim() !== "")) {
        localStorage.setItem("usuario",inputUsuario.value)
        localStorage.setItem("contraseña",inputContraseña.value)

    }
}

const recuperarDatosiniciarSesion = () => {
    if (localStorage.getItem("usuario")) {
        inputUsuario.value = localStorage.getItem("usuario")
        inputContraseña.value = localStorage.getItem("contraseña")
    }
}

const preguntarGuardarDatosIniciarSesion = () => {
    let pregunta = confirm("¿Deseas que recuerde tu usuario y contraseña?")
    if (pregunta) {
        document.addEventListener("DOMContentLoaded",recuperarDatosiniciarSesion)
        iniciarSesion()
    } else {
        iniciarSesion()
        localStorage.removeItem("usuario")
        localStorage.removeItem("contraseña")
    }
}

btnIniciarSesion.addEventListener("click", preguntarGuardarDatosIniciarSesion)
