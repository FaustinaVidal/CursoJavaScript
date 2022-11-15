let cancions = []
const URL = "./bbdd/canciones.json"

const colocandoTarjetasMusicaConJSON = async () => {
    let armoHTML = ""
        try {
            const response = await fetch(URL)
                cancions = await response.json()
                cancions.forEach(cancion => armoHTML += armandoTarjetasMusica(cancion));
        } catch (error) {
            armoHTML = armandoTarjetasMusicaError()
        } finally {
            tarjetasMusica.innerHTML = armoHTML
        }
}

colocandoTarjetasMusicaConJSON()