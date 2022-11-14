const listaPaises = document.querySelector("ul#listaDePaises")

const armandoListaPaises = (elemento) => {
    return `<li class="pais">${elemento}</li>`
}

const colocandoListaPaises = () => {
    listaPaises.innerHTML = ""
    paises.length > 0 && paises.forEach(elemento => listaPaises.innerHTML += armandoListaPaises(elemento))
}

colocandoListaPaises()