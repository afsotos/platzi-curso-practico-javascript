const lista1 = [
    1,
    2,
    7,
    1,
    2,
    7,
    4,
    2,
    2,
    2,
    1,
];

//Transformar el array en un objeto
const lista1Count = {};

lista1.map(               //map recorre el array
    function (elemento) {
        if(lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }
        else {
            lista1Count[elemento] = 1;
        }
    }
);

//convertir el objeto en Array
//enviar como argumento el objeto que queremos pasar a array
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];

const modaValue = moda[0];