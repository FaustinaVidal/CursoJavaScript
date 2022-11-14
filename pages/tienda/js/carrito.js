const carrito = []

//llamo la siguiente funcion en mainTienda.js, funcion colocandoTarjetasTienda()
const activarBtnAñadirAlCarrito = () => {
    const btnAñadirAlCarrito = document.querySelectorAll("button.añadirAlCarrito")
    btnAñadirAlCarrito.forEach(btn => {
        btn.addEventListener("click", () => añadirAlCarrito(btn.id))
    })
}


const añadirAlCarrito = (nombre) => {
    let resultado = productos.find(product => product.nombre === nombre)
    if (resultado !== undefined) {
        carrito.push(resultado)
        guardarCarrito()
    }
}

const guardarCarrito = () => carrito.length > 0 && localStorage.setItem("carrito", JSON.stringify(carrito))

const recuperarCarrito = () => {
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito")) || []
    carritoRecuperado.forEach(producto => carrito.push(producto))
}

recuperarCarrito()