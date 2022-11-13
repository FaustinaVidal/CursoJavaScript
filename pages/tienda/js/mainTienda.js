const tarjetasTienda = document.querySelector("section#tienda__tarjetas")//main

const armandoTarjetasTienda = (elemento) => {
    return `<article>
                <div class="tarjetaTienda">
                    <img class="tarjetaTienda__img" src="./tienda/img/${elemento.imagen}.jpg" loading="lazy" alt="${elemento.producto}">
                    <p id="productoNombre" class="tarjetaTienda__texto">${elemento.nombre}</p>
                    <p>$ ${elemento.precio}</p>
                    <button class="tarjetaTienda__boton añadirAlCarrito" id="${elemento.nombre}">Añadir al carrito ➕</button>
                </div>
            </article>`
}

const colocandoTarjetasTienda = () => {
    tarjetasTienda.innerHTML = ""
    productos.length > 0 && productos.forEach(elemento => {
        tarjetasTienda.innerHTML += armandoTarjetasTienda(elemento)
    })
    activarBtnAñadirAlCarrito()
}

colocandoTarjetasTienda()
