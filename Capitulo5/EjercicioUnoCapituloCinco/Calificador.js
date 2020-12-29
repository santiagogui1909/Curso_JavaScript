const materias = {

    fisica: [85,4,7,"fisica"],
    algebra: [10,8,5,"algebra"],
    quimica: [95,8,6,"quimica"],
    matematicas: [90,5,5,"matematicas"],
    ingles: [97,8,2,"ingles"],
    sociales: [98,7,2,"sociales"],
    filosofia: [90,9,4,"filosofia"],
    programacion: [90,6,7,"programacion"]  
}

const notaFinal = () => {

    for (materia in materias){
        let asistencias = materias[materia][0]
        let promedio = materias[materia][1];
        let tareas = materias[materia][2]
        let aprobadoUno=false;
        let aprobadoDos=false;
        let aprobadoTres=false;
    
    
    
        console.log(materias[materia][3]);

        if (asistencias >= 90){
            console.log("%c  Las asistencias estan en orden","color:white");
            aprobadoUno=true;


        }else{
            console.log("%c  No tiene las suficientes asistencias" , "color:orange");
            aprobadoUno=false;
        }


        if (promedio >= 7){
            console.log("%c  Supero el promedio","color:white");
            aprobadoDos=true;

        }else{
            console.log("%c  No supero el promedio" , "color:orange");
            aprobadoDos=false;
        }


        if (tareas >= 4){
            console.log("%c  Todas las tareas entregadas","color:white");
            aprobadoTres=true;

        }else{
            console.log("%c  No cumplio con el total de tareas" , "color:orange");
            aprobadoTres=false;
        }

        if (aprobadoUno == true && aprobadoDos == true && aprobadoTres == true) {
            console.log("%c          Usted aprobo" , "color:green");
        }else{
            console.log("%c          Usted no aprobo","color:red");
        }
    }
}

notaFinal();