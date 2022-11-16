let productos = []
const URL = "./bbdd/productos.json"

const colocandoTarjetasTiendaConJSON = async () => {
    let armoHTML = ""
    let activoBtnAñadirAlCarrito = true
    try {
        const response = await fetch(URL)
        productos = await response.json()
        productos.forEach(producto => armoHTML += armandoTarjetasTienda(producto));
    } catch (error) {
        armoHTML = armandoTarjetasTiendaError()
    } finally {
        tarjetasTienda.innerHTML = homero()
        setTimeout(() => {
            tarjetasTienda.innerHTML = armoHTML
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