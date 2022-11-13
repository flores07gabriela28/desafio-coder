const arrayProductos = [];
const producto1= new Producto(1, 'shampoo',900);
const producto2= new Producto(2, 'comida',700);
const producto3= new Producto(3, 'snacks',1100);
const producto4= new Producto(4, 'acondicionador',390);



arrayProductos.push(producto1,producto2,producto3,producto4);

//funcion para ordenar precio de menor a mayor
const preciosmenorMayor= ()=>{
    arrayProductos.sort((a,b)=> a.precio -b.precio);
mostrarListaOrdenada();
};

const preciosmayorMenor= ()=>{
    arrayProductos.sort((a,b)=> b.precio -a.precio);
mostrarListaOrdenada();
};

const mostrarListaOrdenada =()=>{
let array =[];
arrayProductos.forEach(producto => array.push(producto.nombre+'$'+producto.precio));
alert('Lista de precios:'+'\n'+array.join('\n'));
};

function comprarProductos(){
let productoNombre= '';
let productoCantidad =0;
let total= 0;
let seguirComprando= false;

do{
productoNombre = prompt('¿Quieres comprar shampoo,acondicionador,snacks o comida?','Ej:snacks');
productoCantidad = parseInt(prompt('¿Cuantos quieres comprar?'));
const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

if(producto){
    total += producto.precio * productoCantidad;

}else{
alert('El producto no se encuentra en stock')
}

console.log(producto);
seguirComprando = confirm('¿Quieres agregar otro producto?');
}
while (seguirComprando)
applicarDescuento(total);
}

function applicarDescuento(totalCompra){
    if(totalCompra >= 5000){
        totalCompra = totalCompra * 0,80;
        alert('¡Tenes 20% de descuento!')
    }
    calcularEnvio(totalCompra);
}
function calcularEnvio (totalCompra){
let tieneEnvioADomicilio =confirm ('¿Quieres envio a domicilio?');
if (tieneEnvioADomicilio && totalCompra >= 2000){
    alert ('Tienes envio gratis . El total de la compra es : '+totalCompra);

}else if (tieneEnvioADomicilio && totalCompra <2000 && totalCompra !== 0){
    totalCompra+= 700;
    alert('El envio cuesta $700. El total de la compra es :'+totalCompra);

}else{
    alert('El total de la compra es: '+totalCompra);
}

};

function comprar(){
  const quieroOrdenar =confirm('¿Quieres ordenar la lista de productos del mas bajo al mas caro?');
if(quieroOrdenar){
    preciosmenorMayor();

}else{
    preciosmayorMenor();
}
comprarProductos();
};

comprar();