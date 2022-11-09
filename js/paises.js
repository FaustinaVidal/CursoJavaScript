const btnOrdenarPaises = document.querySelector("button#ordenarPorPais")
const btnAgregarPaises = document.querySelector("button#agregarUnPais")

//-------------Ordenar paises-------------
function ordenarPaises() {
    paises.sort()
    armandoListaPaises()
}

btnOrdenarPaises.onclick = ordenarPaises

//-------------Agregar paises-------------
function agregarPais() {
    let nuevoPais = prompt("¿Que pais deseas agregar a nuestra gira?").trim()
    if (paises.includes(nuevoPais) && nuevoPais.length > 0) {
        respuesta = confirm(nuevoPais + " ya esta incluido en la gira ¿Quieres agregar otro pais?")
        if (respuesta) {
            agregarPais()
        }
    } else {
        paises.push(nuevoPais)
        armandoListaPaises()
    }
}

btnAgregarPaises.onclick = agregarPais