const headerMusica = document.querySelector("header#headerMusica")//header
const footerMusica = document.querySelector("footer#footerMusica")//footer

function armandoHeaderMusica() {
    return `<a href="./index.html">
                <img class="logo" src="../img/Bejo.jpg" alt="logo">
            </a>
            <nav class="" id="menu">
                <ul class="navmenu__lista">
                    <li class="">
                        <a class="navmenu__item" href="../index.html">Inicio</a>
                    </li>
                    <li class="">
                        <a class="navmenu__itemSeleccionado" href="./musica.html">Musica</a>
                    </li>
                    <li class="">
                        <a class="navmenu__item" href="./tienda.html">Tienda</a>
                    </li>
                </ul>
            </nav>`
}

function colocandoHeaderMusica() {
    headerMusica.innerHTML = armandoHeaderMusica()
}

colocandoHeaderMusica()

//FOOTER
function armandoFooterMusica() {
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

function colocandoFooterMusica() {
    footerMusica.innerHTML = armandoFooterMusica()
}

colocandoFooterMusica()
