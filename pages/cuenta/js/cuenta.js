const headerCuenta = document.querySelector("header#headerCuenta")//header

const armandoHeaderCuenta = () => {
    return `<a href="../index.html">
                <img class="logo" src="../img/Bejo.jpg" alt="logo">
            </a>
            <nav class="" id="menu">
                <ul class="navmenu__lista">
                    <li class="">
                        <a class="navmenu__item" href="../index.html">Inicio</a>
                    </li>
                    <li class="">
                        <a class="navmenu__item" href="./musica.html">Música</a>
                    </li>
                    <li class="">
                        <a class="navmenu__item" href="./tienda.html">Tienda</a>
                    </li>
                </ul>
            </nav>`
}

const colocandoHeaderCuenta = () => {
    headerCuenta.innerHTML = armandoHeaderCuenta()
}

colocandoHeaderCuenta()