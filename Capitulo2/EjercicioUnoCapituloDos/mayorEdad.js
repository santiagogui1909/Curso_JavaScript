

for (var i = 0; i <= 2; i++) {

    edad();
}

function edad () {

    let gratis = false;

    let edad = prompt("ingresa tu edad");

    let hora = prompt("Ingresa la hora de llegada");

    if (edad >= 18){

        if (hora >= 2 && hora < 6 && gratis==false) {
        
        alert("puedes ingresar y no pagas nada por que eres la primera persona en llegar a las 2 Am");
        gratis=true;

        }else {
            alert("puedes ingresar, eres mayor de edad");
        }
    
    } else {
        alert("No eres mayor de edad");
    }
}

    