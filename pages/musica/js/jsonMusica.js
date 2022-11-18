let canciones = []
const URLCanciones = "https://6376d41881a568fc2506aef9.mockapi.io/api/v1/canciones"
//"./bbdd/canciones.json"

const colocandoTarjetasMusicaConJSON = async () => {
    let armoHTML = ""
    try {
        const response = await fetch(URLCanciones)
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