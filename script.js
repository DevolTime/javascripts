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
// let monto = Number(prompt("Monto a guardar"));
// let meses = Number(prompt("A cuantos meses"));
// let tasa = (monto * 0.010 );
// let total = (tasa*meses);
// console.log("El total de la cuenta es " + total);

// let notas = []
// let nota = Number(prompt("nota"))
// let nota2 = Number(prompt("nota2"))
// let nota3 = Number(prompt("nota3"))
// let nota4 = Number(prompt("nota4"))
// let nota5 = Number(prompt("nota5"))
// notas.push(nota, nota2, nota3, nota4, nota5,)
// let promedio = (nota[0] + nota2[1] + nota3[2] + nota4[3] + nota5[4]) / notas.length
// console.log("el promedio es de " + promedio);

//cuanto costo el producto, costo, cuesta menos de 100 se suma 10%,
// entre 100 y 200 descuento de 10%
// mas de 200 descuento de 20%

// let precio = Number(prompt("precio del producto"))
// let des = (precio * 1.10)
// let des2 = (precio * 0.90)
// let des3 = (precio * 0.80)

// if (precio <= 0) {
//     console.log("precio no valido");
// } else if (precio < 100) {
//     console.log(des, " mas 10% por envios");
// } else if (precio < 200) {
//     console.log(des2, " -10% descuento");
// } else {
//     console.log(des3, " -20% descuento");
// }


// let operacion = Number(prompt(`¿cual operacion quieres hacer?
//     1) suma
//     2) resta
//     3) multiplicacion
//     4) división
// `))

// let n1 = Number(prompt("ingresa el primer numero"))
// let n2 = Number(prompt("ingresa el segundo numero"))

// if (operacion == 1) {
//     console.log(n1 + n2)
// } if (operacion == 2) {
//     console.log(n1 - n2)
// } if (operacion == 3) {
//     console.log(n1 * n2)
// } if (operacion == 4) {
//     console.log(n1 / n2)
// }

// juego de piedra, papel o tijera
// let jugador = prompt("ingresa el nombre del jugador 1")
// let options = [`Piedra`, `papel`, `tijera`]
// let azar = Math.floor(Math.random() * 3)
// let computer = options[azar]

// if (jugador === computer) {
//     console.log("El jugador saco " + jugador + ", " + " El bot saco " + computer + "," + " empate")
// }
// else if (jugador == `piedra` && computer == `papel` || computer == `piedra` && jugador == `papel`) {
//     console.log("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana papel")
// }
// else if (jugador == `papel` && computer == `tijera` || computer == `papel` && jugador == `tijera`) {
//     console.log("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana tijera")
// }
// else if (jugador == `tijera` && computer == `piedra` || computer == `tijera` && jugador == `piedra`) {
//     console.log("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana piedra")
// }

// let numero = [26, 2, 3, 4, 33, 6, 7, 22, 9, 11]
// let pares = []
// let impares = []

// for (i = 0; i < numero.length; i++) {
//     if (numero[i] % 2 == 0) {
//         pares.push(numero[i])
//     } else {
//         impares.push(numero[i])
//     }
// }
// console.log(pares + " Numeros pares")
// console.log(impares + " Numeros pares")


// let tabla = Number(prompt("ingresa un numero"))
// let rango = Number(prompt("ingrese el rango"))

// if (tabla < 1 || rango < 1) {
//     console.log('debe ser valores positivos')
// } else if (tabla > 10) {
//     console.log('la tabla debe ser entre 1 y 10')
// } else {
//     for (let i = 1; i <= rango; i++) {
//         console.log(`${tabla} * ${i} = ${i * tabla}`)
//     }
// }

// let numeros = [1, 6, 23, 9, 5, 9, 25]
// let suma = 0
// let max = 0

// for (i = 0; i < numeros.length; i++) {
//     let num = numeros[i];
//     suma = suma + num
//     if (max < num) {
//         max = num
//     }
// }
// console.log(suma + ' Suma')
// console.log(max + ' Mayor')


// const frutas = [
//     "manzana", "banana", "naranja", "pera", "mango", "piña", "sandía", "kiwi", "melocotón", "cereza", "papaya", "uva"
// ];




// let max = []
// let min = []
// let letra = []
// let reves = []

// for (let i = 0; i < frutas.length; i++) {
//     let len = frutas[i].length
//     console.log(`la palabra ${frutas[i]} tiene ${len} letras`)
// }

// for (let i = frutas.length - 1; i > 0; i--) {
//     reves.push(frutas[i])
// }
// console.log('al reves ' + reves)


// for (i = 0; i < frutas.length; i++) {
//     if (max.length < frutas) {
//         max = frutas[i]

//     } if (min.length > frutas) {
//         min = frutas[i]
//     }
// }
// console.log('la palabra mas corta es ' + min)
// console.log('la palabra mas larga es ' + max)




// const isekai = [
//     {
//         nombre: "Rimuru Tempest",
//         raza: "Slime",
//         nivel: 98
//     },
//     {
//         nombre: "Kirito",
//         raza: "Humano",
//         nivel: 87
//     },
//     {
//         nombre: "Naofumi Iwatani",
//         raza: "Humano",
//         nivel: 82
//     },
//     {
//         nombre: "Ainz Ooal Gown",
//         raza: "No-muerto",
//         nivel: 99
//     },
//     {
//         nombre: "Subaru Natsuki",
//         raza: "Humano",
//         nivel: 60
//     },
//     {
//         nombre: "Kazuma Satou",
//         raza: "Humano",
//         nivel: 55
//     },
//     {
//         nombre: "Tanya Degurechaff",
//         raza: "Humano",
//         nivel: 90
//     },
//     {
//         nombre: "Shiroe",
//         raza: "Humano",
//         nivel: 78
//     }
// ];

// let buscado = 90
// let nombre = []
// let raza = []
// let lvl = []

// for (let i = 0; i < isekai.length; i++) {
//     if (isekai[i].nivel < buscado) {
//         console.log(`Nombre: ${isekai[i].nombre}, Raza: ${isekai[i].raza}, Nivel: ${isekai[i].nivel}`);
//     } else {
//     }
// }

// let azar = Math.floor((Math.random() * 5) + 1);
// let estado = true;
// let vida = 3

// while (estado && vida > 0) {
//     let opcion = Number(prompt("Di un número entre 1 y 20, tienes 3 intentos"));

//     if (opcion < 1 || opcion > 20) {
//         alert("Ingresa un número válido");
//     } else if (opcion === azar) {
//         alert("Felicidades, has Ganado");
//         estado = false;
//     } else if (opcion > azar) {
//         vida--;
//         alert("El número es mayor");
//     } else if (opcion < azar) {
//         vida--;
//         alert("El número es menor");
//     }
// }

// if (vida === 0) {
//     alert("Perdiste el nuemero era " + azar)
// }

// Estaciones
// let numero = Number(prompt("ingresa el mes en numeros"))
// let mes;
// let estacion;

// switch (numero) {
//     case 1: case 2: case 12:
//         alert("Es invierno")
//         break;
//     case 3: case 4: case 5:
//         alert("Primavera")
//         break;
//     case 6: case 7: case 8:
//         alert("Verano")
//         break;
//     case 9: case 10: case 11:
//         alert("Otoño")
//     default:
//         alert("Ese no es un mes")
// }

// Cacular año bisiesto
// let año = Number(prompt("Ingresa un año"));

// if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
//     alert(año + " es un año bisiesto");
// } else {
//     alert(año + " NO es un año bisiesto");
// }


// Año bisiesto 2
// let data = [1200, 3000, 5000, 400, 600, 4, 3]

// for (let i = 0; i < data.length; i++) {
//     let año = data[i]
//     if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
//         console.log(año + " es un año bisiesto");
//     } else {
//         console.log(año + " NO es un año bisiesto");
//     }
// }