
function esPangrama() {
    event.preventDefault();
    let cadena = document.getElementById("texto").value;
    const ALFABETO = "abcdefghijklmnñopqrstuvwxyz";
    let bool = true;
    cadena = cadena.toLowerCase();
    let arregloAlfabeto = Array.from(ALFABETO);
    for (let indice = 0; indice < arregloAlfabeto.length; indice++) {
		let letraActual = arregloAlfabeto[indice];
		if (!cadena.includes(letraActual)){ 
            bool = false;
        }
	}
    mensaje(bool);
} 

function mensaje(bool){
    let msj = "";
    if(bool==true){
        msj= "El texto es un pangrama";
    }else{
        msj= "El texto no es un pangrama";
    }
    document.getElementById("datos").innerHTML = msj;
    console.log(msj);
}

