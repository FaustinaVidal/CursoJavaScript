let productos = []
const URL = "./bbdd/productos.json"

const colocandoTarjetasTiendaConJSON = async () => {
    let armoHTML = ""
        try {
            const response = await fetch(URL)
                productos = await response.json()
                productos.forEach(producto => armoHTML += armandoTarjetasTienda(producto));
        } catch (error) {
            armoHTML = armandoTarjetasTiendaError()
        } finally {
            tarjetasTienda.innerHTML = armoHTML
        }
}
colocandoTarjetasTiendaConJSON()