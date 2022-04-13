let gasto = [];

//gasto.push({
//    descr: "gasolina",
//    Cant: 200,
//});

function ingresarGasto(){
    let descripcion = document.getElementById("InputDescrip");
    let descripcionValue = descripcion.value;
    let cantidad = document.getElementById("InputValue");
    let cantidadValue = cantidad.value;

    gasto.push({
        Descr: descripcionValue,
        Cant: cantidadValue,
    });

    console.log({
        descripcionValue,
        cantidadValue,
    });

}