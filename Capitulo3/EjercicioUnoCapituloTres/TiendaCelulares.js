class Celulares {  // class princiál 1

    constructor(nombre, color, peso, resolucionPantalla, resolucionCamara, memoriaRam) {

        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoriaRam = memoriaRam;
        this.info = `Telefono ${this.nombre} de color ${this.color} con un peso de  ${this.peso} gramos, tiene una resolucion
        de pantalla de ${this.resolucionPantalla} y ${this.resolucionCamara} megaPixel de camara trasera, tambien cuenta con ${this.memoriaRam} de ram`;
    }

    informacion() {

        document.write(this.info + "<br> <br>");
    }

    accionTelefono() {
        let boton = prompt(`telefono: ${this.nombre}, Ingrese 1 para encender, ingrese 2 para apagar o ingrese 3 para reiniciar`);

        if (boton === "1") {
            alert(`El telefono ${this.nombre} esta encendiendo`);
            let accion = prompt("Quieres tomar una foto ingresa 1 o quieres grabar ingresa 2");

            if (accion === "1") {
                this.tomarfoto();

            } else if (accion === "2") {
                this.grabar();

            } else {
                return;
            }

        } else if (boton === "2") {
            alert("El telefono se esta apagando, Adios!");

        } else if (boton === "3") {
            alert("El telefono se reiniciara");
        }
    }

    tomarfoto() {
        alert("Foto tomada con exito");
    }

    grabar() {
        tipoVideo = prompt("Ingresa 1 para video normal o 2 para camara lenta,  otro numero para no");

        if (tipoVideo == "1") {
            alert("se esta grabando normal");

        } else if (tipoVideo == "2") {
            alert("Se esta grabando en camara lenta");

        } else {
            return;
        }

    }

}



class celularAltaGama extends Celulares {  //class 2

    constructor(nombre, color, peso, resolucionPantalla, resolucionCamara, memoriaRam ,resCamaraExtra) {
        super(nombre, color, peso, resolucionPantalla, resolucionCamara, memoriaRam);

        this.resCamaraExtra = resCamaraExtra;
    }


    reconocmientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    
    infoAltaGama(){
        return this.informacion() + ` mas Resolución de Camara Extra: ${this.resCamaraExtra}`;
    }

}

// parametros

// const celulareUno = new Celulares("redmi note 8", "negro", 200, 1080, 48, 4);
// const celulareDos = new Celulares("A21 S", "azul", 125, 750, 15, 3);
// const celulareTres = new Celulares("iphone 12", "blanco", 100, 1080, 68, 6);

const celulareUno = new celularAltaGama ("redmi note 8", "negro", 200, 1080, 48, 4, "full Hd");
const celulareDos = new celularAltaGama("A21 S", "azul", 125, 750, 15, 3 , " hd");
const celulareTres = new celularAltaGama("iphone 12", "blanco", 100, 1080, 68, 6 , "4k"); 

// celulareUno.accionTelefono();
// celulareDos.accionTelefono();
// celulareTres.accionTelefono();

// celulareUno.informacion();
// celulareDos.informacion();
// celulareTres.informacion();

document.write(`
	${celulareUno.infoAltaGama()} <br><br>
    ${celulareDos.infoAltaGama()} <br><br>
    ${celulareTres.infoAltaGama()} <br><br>
	`);