const cargoGeneros = document.querySelector("ul#genero")

const seleccionarGenero = document.querySelector("select#genero")

const btnBuscarPorGenero = document.querySelector("button.buscarPorGenero")

const imprimirCancionesPorGenero = document.querySelector("div#cancionesPorGenero")

const cargarGenerosSelect = (array, select) => {
    array.forEach(elemento => select.innerHTML += `<option value="${elemento}">${elemento}</option>
    `)
}

cargarGenerosSelect(generos, seleccionarGenero)

const validarBuscadorPorGenero = () => {
    if (seleccionarGenero.value !== "Elije un genero") {
        return true
    } else {
        return false
    }
}

//Esta funcion todavia no esta pronta!
const realizarBuscadorPorGenero = () => {

    let i = 0
    if (validarBuscadorPorGenero) {
        for (elemento of canciones) {
            if (elemento.genero == generos[i]){
                cardsCanciones()
                i += 1

            }
        }
    }
}    

