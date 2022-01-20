
//Cuadrado

console.group("Cuadrados");

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden" + ladoCuadrado);
 */
function PerimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: "+PerimetroCuadrado);

function AreaCuadrado(lado){ 
    return Math.pow(lado, 2);
}
//console.log("El area del cuadrado es: "+ AreaCuadrado);

console.groupEnd();

//triangulo

console.group("Triangulos");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;*/

/*console.log("Los lados del triangulo miden, lado 1:" + ladoTriangulo1
+", lado2: "+ladoTriangulo2+", lado3: "+baseTriangulo);*/

function PerimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del cuadrado es: "+PerimetroTriangulo);

/*const alturaTriangulo = 5.5;
console.log("La altura del triangulo es:"+alturaTriangulo);*/

function AreaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log("El area del triangulo es: "+ AreaTriangulo);

console.groupEnd();

//Circulos

console.group("Circulos");

//const radioCirculo = 4;
function diametroCirculo(radio){ 
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio){ 
    return PI*diametroCirculo(radio);
}
//console.log("El perimetro del circulo es: "+perimetroCirculo);

function areaCirculo(radio){ 
    return PI * Math.pow(radio,2);
}
//console.log("El area del circulo es: "+areaCirculo);

console.groupEnd();

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = PerimetroCuadrado(value);

    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = AreaCuadrado(value);

    alert(area);
}