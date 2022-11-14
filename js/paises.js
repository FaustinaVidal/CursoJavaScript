const btnOrdenarPaises = document.querySelector("button#ordenarPorPais")
const btnOrdenarPaisesInverso = document.querySelector("button#ordenarPorPais")
const btnAgregarPaises = document.querySelector("button#agregarUnPais")

//-------------Ordenar paises-------------
const ordenarPaises = () => {
    paises.sort()
    colocandoListaPaises()
}

btnOrdenarPaises.onclick = ordenarPaises
//-------------Ordenar paises inverso-------------
const ordenarPaisesInveso = () => {
    paises.reverse()
    colocandoListaPaises()
}

btnOrdenarPaisesInverso.addEventListener("dblclick",ordenarPaisesInveso)
//-------------Agregar paises-------------
const agregarPais = () => {
    let nuevoPais = prompt("¿Que pais deseas agregar a nuestra gira?").trim()
    if (paises.includes(nuevoPais) && nuevoPais.length > 0) {
        respuesta = confirm(nuevoPais + " ya esta incluido en la gira ¿Quieres agregar otro pais?")
        respuesta && agregarPais()
    } else {
        paises.push(nuevoPais)
        paisesNuevos.push(nuevoPais)
        colocandoListaPaises()
    }
    guardarPaisesNuevos()
}

btnAgregarPaises.onclick = agregarPais

