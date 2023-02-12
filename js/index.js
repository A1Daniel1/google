console.log("funciona")

const boton_microfono = document.getElementById("btn_microfono")

boton_microfono.addEventListener("click", mensaje)

function mensaje() {
    console.log("microfono");
}

