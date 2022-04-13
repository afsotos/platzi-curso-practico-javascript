//const precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100 ;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    if((priceValue > 0) && (discountValue >= 0) && (discountValue < 100)) {                
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    return precioConDescuento;
    }
    else {
        alert("Precio debe ser mayor que 0, y descuento mayor o igual a 0 pero no mayor o igual a 100");
    }
}

function onClickButtonPriceCupon() {
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    if(cuponValue >= 0) {
        const precioAntescupon = onClickButtonPriceDiscount();
        if(isNaN(precioAntescupon)){
            console.log("valores incorrectos");
        }
        else {
            const precioFinal = precioAntescupon-cuponValue;
            const resultPCupon = document.getElementById("ResultPCupon");
            resultPCupon.innerText = "El precio final luego de aplicar el cupon es: $" + precioFinal;
        }
    }
    else {
        alert("Valor del cupón debe ser mayor o igual a 0");
    }
}

function onClickButtonPriceDiscount2() {
    const inputPrice = document.getElementById("InputPrice2");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount2");
    const discountValue = inputDiscount.value;

    if((priceValue > 0) && (discountValue >= 0) && (discountValue < 100)) {                
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP2");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    return precioConDescuento;
    }
    else {
        alert("Precio debe ser mayor que 0, y descuento mayor o igual a 0 pero no mayor o igual a 100");
    }
}

function onClickButtonPriceCupon2() {

    const coupons = [
        "coupon1",
        "luyerweb",
        "sotonas",
    ]

    const inputCupon = document.getElementById("InputCupon2");
    const cuponValue = inputCupon.value;

    let descuento;
    switch(cuponValue){
        case coupons[0]:    //"coupon1"
            descuento = 15;
            break;
        case coupons[1]:    //"luyerweb"
            descuento = 20;
            break;
        case coupons[2]:    //"sotonas"
            descuento = 30;
            break;
        default:
            descuento = 0;
            break;
    }

    //if(!coupons.includes(cuponValue))
    
    const precioAntescupon = onClickButtonPriceDiscount2();
        //if(isNaN(precioAntescupon)){
        if(!coupons.includes(cuponValue)){
            alert("Cupon no válido");
            console.log("valores incorrectos");
        }
        else {
            const precioFinal = precioAntescupon-descuento;
            const resultPCupon = document.getElementById("ResultPCupon2");
            resultPCupon.innerText = "El precio final luego de aplicar el cupon es: $" + precioFinal;
            console.log(cuponValue);
        }
   
}

function onClickButtonPriceDiscount3() {
    const inputPrice = document.getElementById("InputPrice3");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount3");
    const discountValue = inputDiscount.value;

    if((priceValue > 0) && (discountValue >= 0) && (discountValue < 100)) {                
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP3");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    return precioConDescuento;
    }
    else {
        alert("Precio debe ser mayor que 0, y descuento mayor o igual a 0 pero no mayor o igual a 100");
    }
}

function onClickButtonPriceCupon3() {

    const coupons = [
        {
            name: "coupon1",
            discount: 10, 
        },
        {
            name: "luyerweb",
            discount: 30, 
        },
        {
            name: "sotonas",
            discount: 25, 
        },
    ];

    const inputCupon = document.getElementById("InputCupon3");
    const cuponValue = inputCupon.value;

    const isCouponValid = function(coupon){
        return coupon.name === cuponValue;
    };

    const userCoupon = coupons.find(isCouponValid)
            
    const precioAntescupon = onClickButtonPriceDiscount3();
        
        if(!userCoupon){
            alert("El cupón "+ cuponValue + " no es válido.");            
        }
        else {
            const precioFinal = precioAntescupon-userCoupon.discount;
            const resultPCupon = document.getElementById("ResultPCupon3");
            resultPCupon.innerText = `El precio final luego de aplicar el cupon ${cuponValue} es: $${precioFinal}`;
            console.log(cuponValue);
        }

}




//console.log({
//    precioOriginal,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//    descuento,
//});