const listaPaises = document.querySelector("ul#listaDePaises")

function armandoListaPaises() {
    listaPaises.innerHTML = ""
    paises.forEach (pais => {
        listaPaises.innerHTML += `<li class="pais">${pais}</li>`
    })
}

armandoListaPaises()