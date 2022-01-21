const precioOriginal = 100;
const descuento = 15;


function CalcularPrecioConDescuento(precio,descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajeConDescuento)/100;

    return precioConDescuento;
}