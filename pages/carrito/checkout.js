const carrito = []
const btnComprar = document.querySelector("button#btnComprar")

const recuperarCarrito = () => {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito")) || []
        carritoRecuperado.forEach(producto => carrito.push(producto))
    }
}

const armandoCarritoRecuperado = (elemento) => {
    return `<tr>
                <td class="tabla__contenido"><button class="boton__black btnBorrarDelCarrito" id="${elemento.nombre}">❌</button></td>
                <td class="tabla__contenido"><img class="miniatura" src="./tienda/img/${elemento.imagen}.jpg" loading="lazy" alt="${elemento.producto}"></td>
                <td class="tabla__contenido">${elemento.nombre}</td>
                <td class="tabla__contenido">${elemento.producto}</td>
                <td class="tabla__contenido">$ ${elemento.precio}</td>
            </tr>`
}

const totalPrecioCarritoRecuperado = () => {
    let totalCarrito = carrito.reduce((acc, element)=> acc + element.precio, 0)
    return `<tr>
                <td></td>
                <td></td>
                <td></td>
                <td class="tabla__total">Total:</td>
                <td class="tabla__total">$ ${totalCarrito.toFixed(2)}</td>
            </tr>`
}

const cargandoCarritoRecuperado = () => {
    let tablaCarritoRecuperado = ""
    const tbody = document.querySelector("tbody")
          tbody.innerHTML = ""
          carrito.forEach(producto => tablaCarritoRecuperado += armandoCarritoRecuperado(producto))
          tbody.innerHTML = tablaCarritoRecuperado
            tbody.innerHTML += totalPrecioCarritoRecuperado()
        activarBtnEliminar()
}

//Eliminar producto
const activarBtnEliminar = () => {
    const btnEliminar = document.querySelectorAll("button.boton__black.btnBorrarDelCarrito")

    btnEliminar.forEach(btn => {
        btn.addEventListener("click", (e)=> {
            let aEliminar = carrito.findIndex(producto => producto.nombre === e.target.id)
                carrito.splice(aEliminar, 1)
                localStorage.setItem("carrito", JSON.stringify(carrito))
                cargandoCarritoRecuperado()
        })
    })
}

const alertaCarrito = (titulo, texto, icono,textoBoton) => {
return  Swal.fire({
            title: titulo,
            text: texto,
            icon: icono,
            confirmButtonText: textoBoton
        })
}

const carritoVacio = () => {
    alertaCarrito("¡Aún no tienes productos en tu carrito!", "Agrega productos a tu carrito para finalizar tu compra.", "warning","¡Ops!") 
}

const finalizarCompra = () => {
    alertaCarrito("¡Muchas gracias por tu compra!", "Que la disfrutes.", "success","Finalizar").then(resultado => {
        if (resultado.isConfirmed) {
            localStorage.removeItem("carrito")
            location.href = "../index.html"
        }
    })
}

btnComprar.addEventListener("click", () => carrito.length === 0 ? carritoVacio() : finalizarCompra())

recuperarCarrito()
carrito.length > 0 && cargandoCarritoRecuperado()