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
    
        const mensaje =
            document.getElementById("mensaje");
            if(
                nombre === "" || 
                apellido === "" ||
                correo === "" ||
                edad === ""
            ){
                mensaje.className = "alert alert-danger mt-3";
                mensaje.textContent = "Debe completar todos los campos";
                return;
            }
    }
);