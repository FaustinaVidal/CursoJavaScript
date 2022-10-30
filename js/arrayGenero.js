//---

const generos = ["Rap", "Blues", "Electronica", "Reggae", "Disco"]

function recorrerGeneros() {
    for (elemento of generos) {
        console.log(elemento)
    }
}
/*
function mostrarGeneros() {
    listaDeGeneros.innerHTML = ""
    generos.forEach (genero => {
        listaDeGeneros.innerHTML += `<li id="id-${genero}">${genero}</li>`
    })
}

mostrarGeneros()
*/
function ordenarGeneros() {
    generos.sort()
    mostrarGeneros()
}

function agregarGenero() {
    let nuevoGenero = prompt("Que genero deseas agregar?").trim()
    if (generos.includes(nuevoGenero) && nuevoGenero.length > 0) {
        respuesta = confirm("El genero "+ nuevoGenero + " ya existe, quieres agregar otro?")
        if (respuesta) {
            agregarGenero()
        }
    } else {
        generos.push(nuevoGenero)
        mostrarGeneros()
    }
}

function eliminarGenero() {
    let generoAquitar = prompt("Ingrese el pais que desea quitar de la lista:").trim()
    let posicion = generos.indexOf(generoAquitar)
        if ((posicion > -1) && generoAquitar.length > 0) {
            let generoQuitado = generos.splice(posicion,1)
            mostrarGeneros()
        } else {
            confirm("Si quieres eliminar un genero dime uno que esté en la lista")
            eliminarGenero()
        }
}


function buscarGenero() {
    let buscar = prompt("Cual es el genero que deseas buscar?")
    let resultado = generos.find(elemento => elemento.includes(buscar))
        if (resultado == undefined){
            console.warn("No se encontro ese genero")
        } else {
            console.log(resultado)
        }
}

