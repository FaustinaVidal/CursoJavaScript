//-------------BUTTONS-------------
/*
//-------------Ordenar generos-------------
const btnOrdenarGeneros = document.querySelector("button.ordenarGeneros")

btnOrdenarGeneros.onclick = ordenarGeneros

//-------------Agregar genero-------------
const btnAgregarGenero = document.querySelector("button.agregarGenero")

btnAgregarGenero.onclick = agregarGenero


//-------------Eliminar genero-------------
const btnEliminarGenero = document.querySelector("button.eliminarGenero")

btnEliminarGenero.onclick = eliminarGenero
*/
//-------------Agregar cancion-------------
const btnAgregarCancion = document.querySelector("button.agregarCancion")

btnAgregarCancion.onclick = agregarCancion

//-------------Ordenar por artista-------------
const btnOrdenarArtistas = document.querySelector("button.ordenarArtistas")

btnOrdenarArtistas.onclick = ordenarPorArtista

//-------------Ordenar por cancion-------------
const btnOrdenarCanciones = document.querySelector("button.ordenarCanciones")

btnOrdenarCanciones.onclick = ordenarPorCancion

//-------------Ordenar por me gustas-------------
const btnOrdenarMeGustas = document.querySelector("button.ordenarMeGustas")

btnOrdenarMeGustas.onclick = ordenarPormeGusta

/* Estos botones seguramente los pase al js de canciones.js
//-------------Me gusta-------------
const btnMeGusta = document.querySelector("button.meGusta")

btnMeGusta.onclick = 

//-------------Suscribirse-------------
const btnSuscribirse = document.querySelector("button.suscribirse")

btnSuscribirse.onclick = 


//-------------Añadir a la lista-------------
const btnAniadir = document.querySelector("button.aniadir")

btnAniadir.onclick = 
*/

//-------------INPUTS-------------
//-------------generos-------------
/*
const inputBuscarGenero = document.querySelector("input.buscarGenero")

inputBuscarGenero.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("El usuario esta buscando un genero")
    }
})   
*/
//-------------canciones-------------

const inputBuscarCanciones = document.querySelector("input.buscarCanciones")

inputBuscarCanciones.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("El usuario esta buscando una cancion")
    }
})   

//-------------Ver lista de reproducción-------------
const btnRecuperarListaDeReproduccion = document.querySelector("button.recuperandoListaDeReproduccion")

btnRecuperarListaDeReproduccion.addEventListener("click",recuperarListaDeReproduccion)

