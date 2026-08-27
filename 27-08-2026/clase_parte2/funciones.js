const formulario =
    document.getElementById("formulario");

formulario.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();
        const nombre =
            document
                .getElementById("nombre")
                .value
                .trim();
        const apellido =
            document
                .getElementById("apellido")
                .value
                .trim();
        const correo =
            document
                .getElementById("correo")
                .value
                .trim();
        const edad =
            document
                .getElementById("edad")
                .value
                .trim();
        console.log(nombre);
        console.log(apellido);
        console.log(correo);
        console.log(edad);
    }
);