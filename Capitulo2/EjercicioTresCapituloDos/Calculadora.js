

    const suma = (num1, num2) => {
        return parseInt (num1) + parseInt (num2);
    }

    const resta = (num1, num2) => {
        return parseInt (num1) - parseInt (num2);
    }

    const multiplicasion = (num1, num2) => {
        return parseInt (num1) * parseInt (num2);
    }

    const division = (num1, num2) => {
        return parseInt (num1) / parseInt (num2);
    }

    alert("Que operacion desea realizar");

    operacion = prompt("1 = suma , 2 = resta, 3 = multiplicasion, 4 = division");

    switch (operacion) {

        case '1':
        
            var num1 = prompt("ingrese el primer valor");
            var num2 = prompt("ingrese el segundo valor");
            result = suma (num1,num2);
            alert(result);
            break;

        case '2':
        
            var num1 = prompt("ingrese el primer valor");
            var num2 = prompt("ingrese el segundo valor");
            result = resta (num1,num2);
            alert(result);
            break;
            
        case '3':
        
            var num1 = prompt("ingrese el primer valor");
            var num2 = prompt("ingrese el segundo valor");
            result = multiplicasion (num1,num2);
            alert(result);
            break;

        case '4':
        
            var num1 = prompt("ingrese el primer valor");
            var num2 = prompt("ingrese el segundo valor");
            result = division (num1,num2);
            alert(result);
            break;
    
        default:

        alert("No se selecciono una operacion");
            break;
    }
