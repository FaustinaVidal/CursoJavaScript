const carrito = []

//llamo la siguiente funcion en mainTienda.js, funcion colocandoTarjetasTienda()
const activarBtnAñadirAlCarrito = () => {
    const btnAñadirAlCarrito = document.querySelectorAll("button.añadirAlCarrito")
    btnAñadirAlCarrito.forEach(btn => {
        btn.addEventListener("click", () => {
            añadirAlCarrito(btn.id)
        })
    })
}


const añadirAlCarrito = (nombre) => {
    let resultado = productos.find(product => product.nombre === nombre)
    if (resultado !== undefined) {
        carrito.push(resultado)
        guardarCarrito()
    }
}

const guardarCarrito = () => {
    if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}

const recuperarCarrito = () => {
    if(localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontro un carrito guardado")//Esto tengo que quitarlo!!
    }
}

recuperarCarrito()