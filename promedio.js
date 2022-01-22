//const lista1 = [100,200,300,500];

function CalcularPromedio(lista){

    const sumalista = lista.reduce(
        function(acumulado=0,elemento){
            return acumulado + elemento;
        }
    );

    const promedio = sumalista/lista.length;
    return promedio;
}

/* let sumaLista1=0;

for(let i = 0; i<lista1.length; i++){
    sumaLista1 = sumaLista1+lista1[i];
} */