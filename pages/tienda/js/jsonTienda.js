let productos = []
const URLProductos = "https://6376d41881a568fc2506aef9.mockapi.io/api/v1/productos"
//"./bbdd/productos.json"

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
