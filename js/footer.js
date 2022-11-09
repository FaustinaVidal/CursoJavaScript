const footerInicio = document.querySelector("footer#footerInicio")//footer

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
