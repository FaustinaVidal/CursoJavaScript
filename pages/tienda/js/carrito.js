const carrito = []

//llamo la siguiente funcion en mainTienda.js, funcion colocandoTarjetasTienda()
const activarBtnAniadirAlCarrito = () => {
    const btnAniadirAlCarrito = document.querySelectorAll("button.aniadirAlCarrito")
    btnAniadirAlCarrito.forEach(btn => {
        btn.addEventListener("click", () => {
            aniadirAlCarrito(btn.id)
        })
    })
}


const aniadirAlCarrito = (nombre) => {
    let resultado = productos.find(product => product.nombre === nombre)
    if (resultado !== undefined) {
        carrito.push(resultado)
        console.clear()
        console.table(carrito) //aca tengo que poner una funcion pa que nos muestre el carrito
    }
}

/*
function totalCarrito() {
    //debugger
    let total = carrito.reduce((acc, elemento)=> acc + (elemento.importe * elemento.cantidad), 0)
        console.log("El total del carrito es:", total)
}
*/