let btn1 = document.getElementById("btn1");

btn1.addEventListener('click', () => {

let jugador = prompt("Elije una opción: piedra, papel o tijera")
let options = [`piedra`, `papel`, `tijera`]
let azar = Math.floor(Math.random() * 3)
let computer = options[azar]

if (jugador === computer) {
    alert("El jugador saco " + jugador + ", " + " El bot saco " + computer + "," + " empate")
}
else if (jugador == `piedra` && computer == `papel` || computer == `piedra` && jugador == `papel`) {
    alert("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana papel")
}
else if (jugador == `papel` && computer == `tijera` || computer == `papel` && jugador == `tijera`) {
    alert("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana tijera")
}
else if (jugador == `tijera` && computer == `piedra` || computer == `tijera` && jugador == `piedra`) {
    alert("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana piedra")
}
});


let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', () => {
    let azar = Math.floor((Math.random() * 10) + 1);
    let estado = true;
    let vida = 3

    while (estado && vida > 0) {
        let opcion = Number(prompt("Di un número entre 1 y 10, tienes 3 intentos"));

        if (opcion < 1 || opcion > 20) {
            alert("Ingresa un número válido");
        } else if (opcion === azar) {
            alert("Felicidades, has Ganado");
            estado = false;
        } else if (opcion > azar) {
            vida--;
            alert("El número es mayor");
        } else if (opcion < azar) {
            vida--;
            alert("El número es menor");
        }
    }

    if (vida === 0) {
        alert("Perdiste el nuemero era " + azar)
    }
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener('click', () => {
    let numero = Number(prompt("ingresa el mes en numeros"))
    let mes;
    let estacion;

    switch (numero) {
        case 1: case 2: case 12:
            alert("Es invierno")
            break;
        case 3: case 4: case 5:
            alert("Primavera")
            break;
        case 6: case 7: case 8:
            alert("Verano")
            break;
        case 9: case 10: case 11:
            alert("Otoño")
        default:
            alert("Ese no es un mes")
    }
})