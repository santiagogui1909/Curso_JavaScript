const boleto = 0.9;

dinero = prompt("Ingrese la cantidad de dinero que tienes");

if (dinero/boleto < 1) {
    alert("No te alcanza para el boleto");
}
else if (dinero/boleto >= 1 && dinero/boleto < 2) {
    vueltas= dinero - boleto;
    alert("Te alcanza para 1 boleto y te sobran: " + vueltas);
}
else if (dinero/boleto >= 2 && dinero/boleto < 3) {
    vueltas= dinero - boleto*2;
    alert("Te alcanza para 1 boleto y te sobran: " + vueltas);
}
else {
    vuelto = dinero - boleto*2;
    alert("comprar dos y el vuelto es: " + vuelto + " , regalarlo");
}
