function esBisiesto(){
    event.preventDefault();
    let bool = false;
    let fecha = document.getElementById("fecha").value;
    if((fecha %4 == 0) && ((fecha %100 !=0) || (fecha %400 ==0))){
        bool = true;
    }
    mensaje(bool);
}

function mensaje(bool){
    let msj = "";
    if(bool==true){
        msj= "El año ingresado ES BISIESTO";
    }else{
        msj= "El año ingresado NO ES BISIESTO";
    }
    document.getElementById("bisiesto").innerHTML = msj;
}

