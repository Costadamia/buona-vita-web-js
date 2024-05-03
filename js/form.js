var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    

    var errores = validarPaciente(paciente);

    if(errores.length > 0) {
        exhibirMensajesErrores(errores);
        return;
    }
    adicionarPacienteEnLaTabla (paciente);
    form.reset();
    
    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
    
});

function adicionarPacienteEnLaTabla (paciente) {
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

//capturando los datos del formulario
function capturarDatosPaciente (form){
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function construirTr(paciente) {
     // crear los rds y un tr
     var pacienteTr = document.createElement("tr");
     pacienteTr.classList.add("paciente");

     var nombreTd = construirTd(paciente.nombre,"info-nombre");
     var pesoTd = construirTd(paciente.peso, "info-peso");
     var alturaTd = construirTd(paciente.altura, "info-altura");
     var gorduraTd = construirTd(paciente.gordura, "info-gordura");
     var imcTd = construirTd(paciente.imc, "info-imc");
 
     //asignacion al tr de los td, y a la tabla el tr
     pacienteTr.appendChild(nombreTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);

     return pacienteTr;
}

function construirTd(dato, clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente (paciente) {
    var errores = [];

    if(paciente.nombre.length == 0) {
        errores.push("No ingresaste el nombre");
    }

    if(paciente.peso.length == 0) {
        errores.push("No ingresaste el peso");
    }

    if(paciente.altura.length == 0) {
        errores.push("No ingresaste la altura");
    }

    if(paciente.gordura.length == 0) {
        errores.push("No ingresaste el % de gordura");
    }

    if(!validarPeso(paciente.peso)) {
        errores.push("El peso es incorrecto");
    } 

    if(!validarAltura(paciente.altura)) {
        errores.push("La altura es incorrecta");
    } 
    return errores; 
}

function exhibirMensajesErrores (errores) {
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    })
}