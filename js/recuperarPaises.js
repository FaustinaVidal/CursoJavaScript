//-------------Recuperar paises-------------
const paisesNuevos = []

//Llamo esta funcion en mainPaises.js (funcion colocandoListaPaises()) para que me los cargue cuando reinicio la pagina
const guardarPaisesNuevos = () => {
    paisesNuevos.length > 0 && localStorage.setItem("paisesNuevos", JSON.stringify(paisesNuevos))
}


const recuperarPaisesNuevos = () => {
    if (localStorage.getItem("paisesNuevos")) {
        let paisesRecuperados = JSON.parse(localStorage.getItem("paisesNuevos"))
        paisesRecuperados.forEach (pais => paisesNuevos.push(pais))
    }
}

recuperarPaisesNuevos()
