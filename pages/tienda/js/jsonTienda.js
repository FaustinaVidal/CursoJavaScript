let productos = []
const URLProductos = "./bbdd/productos.json"

const colocandoTarjetasTiendaConJSON = async () => {
    let armoHTML = ""
    let activoBtnAñadirAlCarrito = true
    try {
        const response = await fetch(URLProductos)
        productos = await response.json()
        productos.forEach(producto => armoHTML += armandoTarjetasTienda(producto));
    } catch (error) {
        armoHTML = armandoTarjetasTiendaError()
        activoBtnAñadirAlCarrito = false
    } finally {
        tarjetasTienda.innerHTML = homero()
        setTimeout(() => {
            tarjetasTienda.innerHTML = armoHTML
            if (activoBtnAñadirAlCarrito) {
                activarBtnAñadirAlCarrito()
            }
        }, 2000);
    }
}
colocandoTarjetasTiendaConJSON()

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