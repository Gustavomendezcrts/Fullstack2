const boton =
    document.getElementById("botonMostrar");

boton.addEventListener(
    "click",
    function () {
        const campoNombre =
            document.getElementById("nombre");
        const nombre =
            campoNombre.value;
        console.log(nombre);
    }
);