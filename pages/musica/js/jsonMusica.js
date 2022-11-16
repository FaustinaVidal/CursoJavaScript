let canciones = []
const URL = "./bbdd/canciones.json"

const colocandoTarjetasMusicaConJSON = async () => {
    let armoHTML = ""
    try {
        const response = await fetch(URL)
        canciones = await response.json()
        canciones.forEach(cancion => armoHTML += armandoTarjetasMusica(cancion));
    } catch (error) {
        armoHTML = armandoTarjetasMusicaError()
    } finally {
        tarjetasMusica.innerHTML = homero()
        setTimeout(() => {
            tarjetasMusica.innerHTML = armoHTML
        }, 2000);
    }
}

colocandoTarjetasMusicaConJSON()