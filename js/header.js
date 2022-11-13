const headerInicio = document.querySelector("header#headerInicio")//header

//HEADER
const armandoHeaderInicio = () => {
return `<a href="./index.html">
            <img class="logo" src="./img/Bejo.jpg" alt="logo">
        </a>
        <nav class="" id="menu">
            <ul class="navmenu__lista">
                <li class="">
                    <a class="navmenu__itemSeleccionado" href="./index.html">Inicio</a>
                </li>
                <li class="">
                    <a class="navmenu__item" href="./pages/musica.html">Música</a>
                </li>
                <li class="">
                    <a class="navmenu__item" href="./pages/tienda.html">Tienda</a>
                </li>
            </ul>
        </nav>`
}

const colocandoHeaderInicio = () => {
    headerInicio.innerHTML = armandoHeaderInicio()
}

colocandoHeaderInicio()

