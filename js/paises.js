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

btnOrdenarPaisesInverso.addEventListener("dblclick", ordenarPaisesInveso)
//-------------Agregar paises-------------
const agregarPais = (nuevoPais) => {
    if (nuevoPais.length > 0) {
        if (paises.includes(nuevoPais)) {
            respuesta = cuandoAgregaPaisRepetido()
            respuesta && cartelAgregarPais()
        } else {
            paisesNuevos.push(nuevoPais)
            colocandoListaPaises()
            toast(`"Haz sugerido ${nuevoPais} a la gira!"`)
        }
        guardarPaisesNuevos()
    }
}


const cartelAgregarPais = async () => {
    const { value: nuevoPais } = await Swal.fire({
        showCloseButton: true,
        title: '¿Que pais deseas agregar a nuestra gira?',
        input: 'text',
        inputPlaceholder: 'Pais',
        width: '400px'
    })
    agregarPais(nuevoPais)
}

btnAgregarPaises.onclick = cartelAgregarPais