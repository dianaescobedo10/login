const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	contraseña: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "email":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById("group__email").classList.remove("invalid-feedback");
                document.getElementById("group__email").classList.add("valid-feedback");

            } else{
                document.getElementById("group__email").classList.add("invalid-feedback");
            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
});