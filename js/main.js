const headerInicio = document.querySelector("header#headerInicio")//header
const footerInicio = document.querySelector("footer#footerInicio")//footer

//HEADER
function armandoHeaderInicio() {
return `<a href="./index.html">
            <img class="logo" src="./img/Bejo.jpg" alt="logo">
        </a>
        <nav class="" id="menu">
            <ul class="navmenu__lista">
                <li class="">
                    <a class="navmenu__itemSeleccionado" href="./index.html">Inicio</a>
                </li>
                <li class="">
                    <a class="navmenu__item" href="./pages/musica.html">Musica</a>
                </li>
                <li class="">
                    <a class="navmenu__item" href="./pages/tienda.html">Tienda</a>
                </li>
            </ul>
        </nav>`
}

function colocandoHeaderInicio() {
    headerInicio.innerHTML = armandoHeaderInicio()
}

colocandoHeaderInicio()

//FOOTER
function armandoFooterInicio() {
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

function colocandoFooterInicio() {
    footerInicio.innerHTML = armandoFooterInicio()
}

colocandoFooterInicio()
