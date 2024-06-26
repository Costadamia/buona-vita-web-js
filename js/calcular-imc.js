
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEsValido = validarPeso(peso);
    var alturaEsValida = validarAltura(altura);

    if (!pesoEsValido) {
        tdImc.textContent ="Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if (!alturaEsValida) {
        tdImc.textContent = 'Altura incorrecta';
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if ( pesoEsValido && alturaEsValida) {

        tdImc.textContent = calcularImc(peso, altura);
    }
}

function calcularImc (peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validarAltura(altura){
    if (altura >= 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}
