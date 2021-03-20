const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contraseña: /^.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e) => {
    let name = e.target.name;
    let valor = e.target.value;
    let mensaje = document.getElementById(`${name}Mensaje`);
    let grupo = document.getElementById(`group__${name}`);
    let clase;
    let textoMensaje;

    if (valor === "") return;
    switch (e.target.name) {
    case "email":
        if (expresiones.correo.test(valor)) {
        textoMensaje = "valid email";
        clase = "valid-feedback";
        } else {
        textoMensaje = "Invalid email";
        clase = "invalid-feedback";
        }
        break;

    case "password":
        if (expresiones.contraseña.test(valor)) {
        textoMensaje = "valid password";
        clase = "valid-feedback";
        } else {
        textoMensaje = "Invalid password";
        clase = "invalid-feedback";
        }
        break;

    case "remember":
        if (expresiones.checkbox.test(valor)) {
        textoMensaje = "Valid";
        clase = "valid-feedback";
        } else {
        textoMensaje = "Check this checkbox to continue";
        clase = "invalid-feedback";
        }
        break;
    default:
        break;
}

    grupo.classList.remove(...grupo.classList);
    grupo.classList.add(clase);
    mensaje.innerText = textoMensaje;
    grupo.style.display = "block";
};

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Form submission cancelled.");
    return false;
});

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});