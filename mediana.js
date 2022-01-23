
function Ordenar(lista){
    return lista.sort((a,b)=>{a-b});
}

function CalcularMediana(lista){
    const listaOrdenada = Ordenar(lista);
    if((listaOrdenada.length)%2 === 0){
        const mitad = listaOrdenada.length /2;
        const suma = listaOrdenada[mitad -1] + listaOrdenada[mitad];
        const mediana = suma/2;
        return mediana;
    }
    else{
        const mitad = Math.ceil(listaOrdenada.length/2);
        return listaOrdenada[mitad -1];
    }
}