const alerta = (icono, titulo, texto) => {
    Swal.fire({
        icon: icono || '', //success, error, question, info, warning
        title: titulo || '',
        text: texto || '',
        showConfirmButton: false,
        timer: 1800
    })
}

const confirmar = (icono, titulo, texto) => {
    Swal.fire({
        icon: icono || '', //success, error, question, info, warning
        title: titulo || '',
        text: texto || '',
        showCloseButton: true, //boton de cerrar (cruz)
        showCancelButton: true,
    })
}

const toast = (texto) => {
    Toastify({
        text: texto,
        duration: 3000,
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, rgb(255, 0, 212), #0F5897)",
        },
      }).showToast();
}