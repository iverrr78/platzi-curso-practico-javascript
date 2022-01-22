const precioOriginal = 100;
const descuento = 15;


function CalcularPrecioConDescuento(precio,descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajeConDescuento)/100;

    return precioConDescuento;
}

function MostrarPrecio(){
    const precio = document.getElementById("InputPrecio");
    const descuento = document.getElementById("InputDescuento");
    const PResultado = document.getElementById("Resultado");

    const preciovalue = precio.value;
    const descuentovalue = descuento.value;

    const resultado = CalcularPrecioConDescuento(preciovalue, descuentovalue);
    PResultado.innerText =`El precio con descuento es ${"$"+resultado}`;
}