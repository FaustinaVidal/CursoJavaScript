const tarjetasTienda = document.querySelector("section#tienda__tarjetas")//main

const armandoTarjetasTienda = ({ nombre, producto, precio, imagen }) => {
    return `<article>
                <div class="tarjetaTienda">
                    <img class="tarjetaTienda__img" src="./tienda/img/${imagen}.jpg" loading="lazy" alt="${producto}">
                    <p id="productoNombre" class="tarjetaTienda__texto">${nombre}</p>
                    <p>$ ${precio}</p>
                    <button class="boton__black añadirAlCarrito" id="${nombre}">Añadir al carrito ➕</button>
                </div>
            </article>`
}
/*
const colocandoTarjetasTienda = () => {
    tarjetasTienda.innerHTML = homero()
    setTimeout(() => {
        tarjetasTienda.innerHTML = ""
        productos.length > 0 && productos.forEach(elemento => tarjetasTienda.innerHTML += armandoTarjetasTienda(elemento))
        activarBtnAñadirAlCarrito()
    }, 2000);
}

colocandoTarjetasTienda()
*/
const armandoTarjetasTiendaError = (elemento) => {
    return `<section class="tarjetas" id="tienda__tarjetas">
                <div class="tarjeta__error">
                    <h2>No ha sido posible cargar los productos 💣</h2>
                    <h3>Por favor, intenta mas tarde.</h3>
                </div>
            </section>`
}