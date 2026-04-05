// let nombre = prompt("cual es tu nombre?");
// let edad = Number (prompt("cual es tu edad?"));
// let email = prompt("cual es tu correo?");
// console.log(nombre, edad, email);

//Descuento
// let precio = Number (prompt("precio del articulo"));
// let descuento = Number (prompt("escoje tu descuento"));
// let precioDescuento = (precio * descuento)/100;
// alert("precio del articulo: " + precioDescuento);
// let total = (precio - precioDescuento);1
// alert("precio total: " + total);

//kilometros a metros
// let km = Number(prompt("Metros"));
// let m = (m / 1000);
// alert(km + " kilometros");

//metros a kilometros
// let km = Number(prompt("kilometros"));
// let m = (km * 1000);
// alert(m + " Metros");

// Edad canina
// let Edad = Number(prompt("Edad Humana"));
// let Canina = (Edad*7);
// alert(Canina + " Canina");


// Convertidor COP - USD: 3,700 
// let cop = Number (prompt("Pesos colombianos"));
// let usd = (cop * 0.00027)
// alert("Serian en Dolares " + usd)

// let usd = Number (prompt("Dolares"));
// let cop = (usd * 3.699)
// alert("Tus " + usd +  " serian " + cop + " pesos colombianos")


// Convertidor de grados, Celcius a fahrenheit
// let ce = Number (prompt("Grados Celcius a fahrenheit"))
// let fa = (ce*9 /5)+32
// 4
// alert("Tus grados " + ce + " Celcius serian " + fa + " fahrenheit")
// let fahrenheit = cs (celciuos *9 /5)+32

// let fa = Number(prompt("Grados fahrenheit a Celcius"))
// let ce = (fa-32)*5/9
// alert("Tus grados " + fa + " fahrenheit serian " + ce + " Celcius")

//  Area de un cuadrado
// let area = Number (prompt("ingresa un numero"))
// let lado = (area * area)
// alert(lado)

// Perimetro de un cuadrado
// let area = Number (prompt("ingresa un numero"))
// let lado = (area *4)
// alert("el perimetro es de " + lado)

//convertidor de minutos a segundos
// let min = Number (prompt("ingresa un numero"))
// let seg = (min * 60)
// alert("el numero de segundos es " + seg)

//convertidor de segundos a minutos
// let seg = Number (prompt("ingresa un numero"))
// let min = (seg / 60)
// alert("el numero de minutos es " + min)


// let nombre = 'luis';
// let edad = 33;
// let correo = 'wasa@gmail.com';
// console.log('Hola, tu nombre es '+ nombre +' tienes '+ edad + ' y tu correo es '+ correo);

// let personas = prompt (`cuantas personas comieron?`)
// let comio = prompt (`quien comio mas?`)
// let valor = prompt (`cuanto fue la cuenta?`)
// let total = (valor / personas)
// let total2 = (total*1.6)
// let total3 = (total/1.2)


// console.log (`Comirron ${personas} personas, ${comio} fue el que mas comio, Todos tendran que pagar ${total3} y ${comio} tendra que pagar ${total2}`)

let monto = Number(prompt("Monto a guardar"));
let meses = Number(prompt("A cuantos meses"));
let tasa = (monto * 0.010 );
let total = (tasa*meses);



console.log("El total de la cuenta es " + total);