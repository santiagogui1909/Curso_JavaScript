var heladoAgua = 0.6;
var heladoCrema = 1;
var heladoHeladix = 1.6;
var heladoHalovich = 1.7;
var heladoHelador = 1.8;
var heladoConfite = 2.9;
var heladoPote = 2.9;

valorHelado = prompt("ingresa la cantidad de dinero que tienes");

if (valorHelado >= heladoAgua && valorHelado < heladoCrema) {
    alert("Te alcanza para el helado de agua");
    vueltas = valorHelado - heladoAgua;
    alert("Su cambio es: " + vueltas);
}
else if (valorHelado >= heladoCrema && valorHelado < heladoHeladix) {
    alert("Te alcanza para el helado de crema");
    vueltas = valorHelado - heladoCrema;
    alert( "Su cambio es: " + vueltas);
}
else if (valorHelado >= heladoHeladix && valorHelado < heladoHalovich) {
    alert("te alcanza para el helado de heladix");
    vueltas = valorHelado - heladoHeladix;
    alert("Su cambio es: " + vueltas);
}
else if (valorHelado >= heladoHalovich && valorHelado < heladoHelador) { 
    alert("te alcanza para el helado de heladovich");
    vueltas = valorHelado - heladoHalovich;
    alert("Su cambio es: " + vueltas);
}
else if (valorHelado >= heladoHelador && valorHelado < 2.9) {
    alert("te alcanza para el helado de helardo");
    vueltas = valorHelado - heladoHelador;
    alert("Su cambio es: " + vueltas);
}
else if (valorHelado >= heladoPote || valorHelado >= heladoConfite ) {
    alert("Te alcanza para el helado con confite o el de pote de 1/4 kg");
    vueltas = valorHelado - heladoPote;
    alert("Su cambio es: " + vueltas);
}
else{
    alert("no te alcanza para el helado");
}


