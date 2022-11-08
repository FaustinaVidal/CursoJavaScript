const tarjetasTienda = document.querySelector("section#tienda__tarjetas")//main

function armandoTarjetasTienda(elemento) {
    return `<article>
                <div class="tarjetaTienda">
                    <img class="tarjetaTienda__img" src="./tienda/img/${elemento.imagen}.jpg" alt="">
                    <p class="tarjetaTienda__texto">${elemento.nombre}</p>
                    <p>$ ${elemento.precio}</p>
                    <button class="tarjetaTienda__boton">Añadir al carrito ➕</button>
                </div>
            </article>`
}

function colocandoTarjetasTienda() {
    tarjetasTienda.innerHTML = ""
    if (productos.length > 0) {
        productos.forEach(elemento => {
            tarjetasTienda.innerHTML += armandoTarjetasTienda(elemento)
        })
    }
}

colocandoTarjetasTienda()
