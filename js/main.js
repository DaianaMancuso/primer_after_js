let pagos = 0;

let darwin = 19000;

pagos += darwin;

let moto_g= 69000;
pagos += moto_g

console.log( " a pagar: " + pagos)

let acumulador = 0;
let producto = 0;
let cantProductos = 0;

//a medida q vas agregando producto se incrementa

cantProductos++;

for (let i=0;i<3;i++ ){
    producto = Number(prompt("ingrese valor producto"));

    acumulador += producto; // para que te vaya acumulando los productos que ingreses
}

console.log ("a pagar: " + acumulador);