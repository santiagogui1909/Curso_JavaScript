class App {

    constructor(nombre, cantidadDescargas, cantidadPuntuacion, peso) {

        this.peso = peso;
        this.nombre = nombre;
        this.cantidadDescargas = cantidadDescargas;
        this.cantidadPuntuacion = cantidadPuntuacion;
        this.instalada = false;
        this.abierta = false;

    }


    informacionApp() {

        document.write(`la aplicacion ${this.nombre} tiene ${this.cantidadDescargas} de descargas,
    tiene una puntuacion de ${this.cantidadPuntuacion} y pesa ${this.peso}` + "<br> <br>");
    }


    instalar() {
        if (this.instalada === false) {
            alert(" la aplicaion se esta instalando");
            let accion = prompt("listo: ¿desea abrir la App?");

            if (accion === "si") {

                this.abrir();
                this.abierta = true;

            } else if (accion === "no") {
                return;
            }

        } else {
            alert("la aplicaion ya esta instalada");
            this.instalada = true;
            this.desintalar();
        }
    }

    desintalar() {

        if (this.instalada === true) {
            let desintalar = prompt("desea desintalar");

            if (desintalar === "si") {
                alert("Adios! :)");
            } else {
                return;
            }
        }
    }

    abrir() {
        alert("La App esta abriendo, espere por favor");
    }

    cerrar() {

        if (this.abierta === true) {
            let respuesta = prompt("Desea salir de la aplicacion");

            if (respuesta === "si") {
                alert("cerrando... Adios!");
                this.abierta = false;
            } else {
                return;
            }
        }

    }

}


const appUno = new App("call of duty", "1 mill", 4.5, "3 GB");
const appDos = new App("facebook", "16 mil", 5.0, "900 Mb");
const appTres = new App("sodoku", "1 mil", 4, "400 Mb");


document.write(`
	${appUno.informacionApp()} <br>
	${appDos.informacionApp()} <br>
	${appTres.informacionApp()} <br>
    `);

appUno.instalar();

appUno.cerrar();