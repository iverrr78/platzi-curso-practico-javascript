
//Cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden" + ladoCuadrado);

const PerimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+PerimetroCuadrado);

const AreaCuadrado = Math.pow(ladoCuadrado, 2);
console.log("El area del cuadrado es: "+ AreaCuadrado);

console.groupEnd();

//triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden, lado 1:" + ladoTriangulo1
+", lado2: "+ladoTriangulo2+", lado3: "+baseTriangulo);

const PerimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del cuadrado es: "+PerimetroTriangulo);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es:"+alturaTriangulo);

const AreaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: "+ AreaTriangulo);

console.groupEnd();

//Circulos

console.group("Circulos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = PI*diametroCirculo;
console.log("El perimetro del circulo es: "+perimetroCirculo);

const areaCirculo = PI * Math.pow(radioCirculo,2);
console.log("El area del circulo es: "+areaCirculo);

console.groupEnd();