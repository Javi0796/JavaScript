function eliminarUnico(){
    event.preventDefault();
    let lista = document.getElementById("lista").value;
    let arregloLista = Array.from(lista);
    let listaAux = arregloLista.slice();
    var arregloResultado =[];
    for (let indice = 0; indice < arregloLista.length; indice++) {
        let auxiliar = arregloLista[indice];
        listaAux.shift();
        if(listaAux.includes(auxiliar)||arregloResultado.includes(auxiliar)){
            arregloResultado.push(auxiliar);       
        }
    }
    console.log(arregloResultado);
    document.getElementById('listaU').innerHTML= "[ " + arregloResultado + " ]";
}