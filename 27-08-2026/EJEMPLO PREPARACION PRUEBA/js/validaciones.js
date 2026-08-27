const formulario =
    document.getElementById("formularioRegistro");

formulario.addEventListener(
    "submit",
    function (event) {

        // ---------------------------------------
        // EVITAR ENVÍO AUTOMÁTICO
        // ---------------------------------------

        event.preventDefault();

        // ---------------------------------------
        // OBTENER CAMPOS
        // ---------------------------------------

        const inputNombre =
            document.getElementById("nombre");

        const inputApellido =
            document.getElementById("apellido");

        const inputCorreo =
            document.getElementById("correo");

        const inputEdad =
            document.getElementById("edad");

        const inputPassword =
            document.getElementById("password");

        const inputConfirmarPassword =
            document.getElementById(
                "confirmarPassword"
            );


        // ---------------------------------------
        // OBTENER VALORES
        // ---------------------------------------

        const nombre =
            inputNombre.value.trim();

        const apellido =
            inputApellido.value.trim();

        const correo =
            inputCorreo.value.trim();

        const edad =
            inputEdad.value.trim();

        const password =
            inputPassword.value;

        const confirmarPassword =
            inputConfirmarPassword.value;

        const terminos =
            document
                .getElementById("terminos")
                .checked;


        // ---------------------------------------
        // OBTENER ÁREAS DE ERROR
        // ---------------------------------------

        const errorNombre =
            document.getElementById(
                "errorNombre"
            );

        const errorApellido =
            document.getElementById(
                "errorApellido"
            );

        const errorCorreo =
            document.getElementById(
                "errorCorreo"
            );

        const errorEdad =
            document.getElementById(
                "errorEdad"
            );

        const errorPassword =
            document.getElementById(
                "errorPassword"
            );

        const errorConfirmarPassword =
            document.getElementById(
                "errorConfirmarPassword"
            );

        const errorTerminos =
            document.getElementById(
                "errorTerminos"
            );

        const mensajeFinal =
            document.getElementById(
                "mensajeFinal"
            );


        // ---------------------------------------
        // LIMPIAR ERRORES ANTERIORES
        // ---------------------------------------

        errorNombre.textContent = "";
        errorApellido.textContent = "";
        errorCorreo.textContent = "";
        errorEdad.textContent = "";
        errorPassword.textContent = "";
        errorConfirmarPassword.textContent = "";
        errorTerminos.textContent = "";

        mensajeFinal.textContent = "";

        mensajeFinal.className =
            "mensaje-final";


        inputNombre.classList.remove(
            "input-error"
        );

        inputApellido.classList.remove(
            "input-error"
        );

        inputCorreo.classList.remove(
            "input-error"
        );

        inputEdad.classList.remove(
            "input-error"
        );

        inputPassword.classList.remove(
            "input-error"
        );

        inputConfirmarPassword.classList.remove(
            "input-error"
        );


        // ---------------------------------------
        // SUPONEMOS QUE TODO ESTÁ CORRECTO
        // ---------------------------------------

        let formularioValido = true;


        // ---------------------------------------
        // VALIDAR NOMBRE
        // ---------------------------------------

        if (nombre === "") {

            errorNombre.textContent =
                "El nombre es obligatorio.";

            inputNombre.classList.add(
                "input-error"
            );

            formularioValido = false;

        } else if (nombre.length < 3) {

            errorNombre.textContent =
                "El nombre debe tener al menos 3 caracteres.";

            inputNombre.classList.add(
                "input-error"
            );

            formularioValido = false;

        }


        // ---------------------------------------
        // VALIDAR APELLIDO
        // ---------------------------------------

        if (apellido === "") {

            errorApellido.textContent =
                "El apellido es obligatorio.";

            inputApellido.classList.add(
                "input-error"
            );

            formularioValido = false;

        } else if (apellido.length < 3) {

            errorApellido.textContent =
                "El apellido debe tener al menos 3 caracteres.";

            inputApellido.classList.add(
                "input-error"
            );

            formularioValido = false;

        }


        // ---------------------------------------
        // VALIDAR CORREO
        // ---------------------------------------

        if (correo === "") {

            errorCorreo.textContent =
                "El correo electrónico es obligatorio.";

            inputCorreo.classList.add(
                "input-error"
            );

            formularioValido = false;

        } else if (
            !correo.includes("@") ||
            !correo.includes(".")
        ) {

            errorCorreo.textContent =
                "Ingresa un correo válido, por ejemplo nombre@correo.cl.";

            inputCorreo.classList.add(
                "input-error"
            );

            formularioValido = false;

        }


        // ---------------------------------------
        // VALIDAR EDAD
        // ---------------------------------------

        const edadNumero =
            Number(edad);


        if (edad === "") {

            errorEdad.textContent =
                "La edad es obligatoria.";

            inputEdad.classList.add(
                "input-error"
            );

            formularioValido = false;

        } else if (isNaN(edadNumero)) {

            errorEdad.textContent =
                "La edad debe contener solamente números.";

            inputEdad.classList.add(
                "input-error"
            );

            formularioValido = false;

        } else if (
            edadNumero < 18 ||
            edadNumero > 100
        ) {

            errorEdad.textContent =
                "La edad debe estar entre 18 y 100 años.";

            inputEdad.classList.add(
                "input-error"
            );

            formularioValido = false;

        }


        // ---------------------------------------
        // VALIDAR CONTRASEÑA
        // ---------------------------------------

        if (password === "") {

            errorPassword.textContent =
                "La contraseña es obligatoria.";

            inputPassword.classList.add(
                "input-error"
            );

            formularioValido = false;

        } else if (password.length < 6) {

            errorPassword.textContent =
                "La contraseña debe tener al menos 6 caracteres.";

            inputPassword.classList.add(
                "input-error"
            );

            formularioValido = false;

        }


        // ---------------------------------------
        // CONFIRMAR CONTRASEÑA
        // ---------------------------------------

        if (confirmarPassword === "") {

            errorConfirmarPassword.textContent =
                "Debes repetir la contraseña.";

            inputConfirmarPassword.classList.add(
                "input-error"
            );

            formularioValido = false;

        } else if (
            password !== confirmarPassword
        ) {

            errorConfirmarPassword.textContent =
                "Las contraseñas no coinciden.";

            inputConfirmarPassword.classList.add(
                "input-error"
            );

            formularioValido = false;

        }


        // ---------------------------------------
        // VALIDAR TÉRMINOS
        // ---------------------------------------

        if (!terminos) {

            errorTerminos.textContent =
                "Debes aceptar los términos y condiciones.";

            formularioValido = false;

        }


        // ---------------------------------------
        // RESULTADO FINAL
        // ---------------------------------------

        if (formularioValido) {

            mensajeFinal.textContent =
                "Cliente registrado correctamente. ¡Bienvenido/a a Tech Store!";

            mensajeFinal.className =
                "mensaje-final exito";

        } else {

            mensajeFinal.textContent =
                "Revisa los campos marcados antes de continuar.";

            mensajeFinal.className =
                "mensaje-final error-general";

        }


    }
);