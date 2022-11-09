const inputBuscarCancion = document.querySelector("input#buscarCancion")

//-------------Buscar por nombre-------------
//-------------Buscar cuando aprete enter-------------
inputBuscarCancion.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        console.log("aca iria mi funcion de buscar")
    }
})