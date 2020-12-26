const suma = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplicasion = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const division = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

const potencia = (num1, exponent) => {
    return num1 ** exponent;
}

const raizCuadrada = (num1) => {
    return Math.sqrt(num1);

}

const raizCubica = (num1) => {
    return Math.cbrt(num1);

}


alert("Que operacion desea realizar");

operacion = prompt("1 = suma , 2 = resta, 3 = multiplicasion, 4 = division" +
", 5 = potencia, 6 = raiz cuadrada, 7 = raizCubica");

switch (operacion) {

    case '1':

        var num1 = prompt("ingrese el primer valor");
        var num2 = prompt("ingrese el segundo valor");
        result = suma(num1, num2);
        alert(result);
        break;

    case '2':

        var num1 = prompt("ingrese el primer valor");
        var num2 = prompt("ingrese el segundo valor");
        result = resta(num1, num2);
        alert(result);
        break;

    case '3':

        var num1 = prompt("ingrese el primer valor");
        var num2 = prompt("ingrese el segundo valor");
        result = multiplicasion(num1, num2);
        alert(result);
        break;

    case '4':

        var num1 = prompt("ingrese el primer valor");
        var num2 = prompt("ingrese el segundo valor");
        result = division(num1, num2);
        alert(result);
        break;

    case '5':

        var num1 = prompt("ingrese el primer valor");
        var num2 = prompt("ingrese el valor del exponente");
        result = potencia(num1, num2);
        alert(result);
        break;

    case '6':

        var num1 = prompt("ingrese el primer valor");
        result = raizCuadrada(num1);
        alert(result);
        break;


    case '7':

        var num1 = prompt("ingrese el primer valor");
        result = raizCubica(num1);
        alert(result);
        break;

    default:

        alert("No se selecciono una operacion");
        break;
}