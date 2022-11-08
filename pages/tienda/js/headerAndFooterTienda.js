const headerTienda = document.querySelector("header#headerTienda")//header
const footerTienda = document.querySelector("footer#footerTienda")//footer

function armandoHeaderTienda() {
    return `<a href="./index.html">
                <img class="logo" src="../img/Bejo.jpg" alt="logo">
            </a>
            <nav class="" id="menu">
                <ul class="navmenu__lista">
                    <li class="">
                        <a class="navmenu__item" href="../index.html">Inicio</a>
                    </li>
                    <li class="">
                        <a class="navmenu__item" href="./musica.html">Musica</a>
                    </li>
                    <li class="">
                        <a class="navmenu__itemSeleccionado" href="./tienda.html">Tienda</a>
                    </li>
                </ul>
            </nav>`
}
function colocandoHeaderTienda() {
    headerTienda.innerHTML = armandoHeaderTienda()
}
colocandoHeaderTienda()

//FOOTER
function armandoFooterTienda() {
    return `<p class="footer__texto">BEJO</p>
            <nav>
                <ul class="footer__lista">
                    <li>
                        <a class="footer__icono red-social" href="https://www.instagram.com/borjabuche/" target="_blank">
                            <span class="jam jam-instagram red-social-instagram"></span>
                        </a>
                    </li>
                    <li>
                        <a class="footer__icono red-social" href="https://twitter.com/Bejoflow" target="_blank">
                            <span class="jam jam-twitter red-social-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a class="footer__icono red-social" href="https://www.youtube.com/c/BEJOFLOW/featured" target="_blank">
                            <span class="jam jam-youtube red-social-youtube"></span>
                        </a>
                    </li>
                </ul>
            </nav>`
}

function colocandoFooterTienda() {
    footerTienda.innerHTML = armandoFooterTienda()
}

colocandoFooterTienda()
