//Código del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del Triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//    "Los lados del triángulo miden: " 
//    + ladoTriangulo1 + " cm, " 
//    + ladoTriangulo2 + " cm, " 
//    + baseTriangulo + " cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

function perimetrotriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo es: " + perimetrotriangulo + " cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código del Circulo
console.group("Círculos");

//Radio

//const radioCirculo = 4;
//console.log("El radio del Círculo mide: " + radioCirculo + " cm");

//Diámetro

function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diametro del Círculo mide: " + diametroCirculo + " cm");

//PI

const PI = Math.PI;
console.log("PI vale: " + PI);

//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("La circunferencia del Círculo mide: " + perimetroCirculo + " cm");

//Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El área del Círculo mide: " + areaCirculo + " cm^2");

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    if(value <=0 ){
        alert("El lado del cuadrado debe ser mayor a 0");
    }
    else {
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    }
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    if(value <=0 ){
        alert("El lado del cuadrado debe ser mayor a 0");
    }
    else {
    const area = areaCuadrado(value);
    alert(area);
    }
}

function calcularPerimetroTriangulo(){
    const inputlado1 = document.getElementById("InputTrianguloLado1");
    const valueL1 = inputlado1.value;
    const inputlado2 = document.getElementById("InputTrianguloLado2");
    const valueL2 = inputlado2.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;
    if( valueL1 <=0 || valueL2 <=0 || valueBase <=0 ) {
        alert("Los lados del triángulo deben ser al menos mayor o igual a 1");
    }
    else {
        if(valueL1 === valueL2){
            const perimetro = perimetrotriangulo(Number(valueL1),Number(valueL2),Number(valueBase));
            alert(perimetro);
        }
        else
            alert("No es un triangulo isóceles, Los lados 1 y 2 deben ser iguales");
    }
    
}

function calcularAreaTriangulo(){
    const inputlado1 = document.getElementById("InputTrianguloLado1");
    const valueL1 = inputlado1.value;
    const inputlado2 = document.getElementById("InputTrianguloLado2");
    const valueL2 = inputlado2.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;
    if( valueL1 <=0 || valueL2 <=0 || valueBase <=0 ) {
        alert("Los lados del triángulo deben ser al menos mayor o igual a 1");
    }
    else {
        if(valueL1 === valueL2){
            const altura = Math.sqrt((Number(valueL1)**2)-((Number(valueBase)/2)**2));
            const area = areaTriangulo(Number(valueBase),altura);
            alert(`El área del triángulo es ${area} y la altura calculada es ${altura}`);
        }
        else
            alert("No es un triangulo isóceles, Los lados 1 y 2 deben ser iguales");
    }
}


function calcularPerimCirculo(){
    const radioC1 = document.getElementById("EntradaRadio");
    //console.log(radioC1.value);
    if(radioC1.value <=0 ){
        alert("Radio debe ser mayor o igual a 1")
    }
    else{
        const perimetro = perimetroCirculo(radioC1.value);
        //console.log(perimetro);
        alert(perimetro);
    }
}

function calcularAreaCirculo(){
    const radioC1 = document.getElementById("EntradaRadio");
    //console.log(radioC1.value);
    if(radioC1.value <=0 ){
        alert("Radio debe ser mayor o igual a 1")
    }
    else{
        const area = areaCirculo(radioC1.value);
        //console.log(area);
        alert(area);
    }
}