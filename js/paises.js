const btnOrdenarPaises = document.querySelector("button#ordenarPorPais")
const btnOrdenarPaisesInverso = document.querySelector("button#ordenarPorPais")
const btnAgregarPaises = document.querySelector("button#agregarUnPais")

//-------------Ordenar paises-------------
function ordenarPaises() {
    paises.sort()
    colocandoListaPaises()
}

btnOrdenarPaises.onclick = ordenarPaises
//-------------Ordenar paises inverso-------------
function ordenarPaisesInveso() {
    paises.reverse()
    colocandoListaPaises()
}

btnOrdenarPaisesInverso.addEventListener("dblclick",ordenarPaisesInveso)
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
        colocandoListaPaises()
    }
}

btnAgregarPaises.onclick = agregarPais