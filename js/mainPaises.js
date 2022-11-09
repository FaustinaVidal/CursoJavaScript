const listaPaises = document.querySelector("ul#listaDePaises")

function armandoListaPaises(elemento) {
    return `<li class="pais">${elemento}</li>`
}

function colocandoListaPaises() {
    listaPaises.innerHTML = ""
    if (paises.length > 0) {
        paises.forEach(elemento => {
            listaPaises.innerHTML += armandoListaPaises(elemento)
        })
    }
}

colocandoListaPaises()