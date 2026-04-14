// let btn1 = document.getElementById("btn1");

// btn1.addEventListener('click', () => {

// let jugador = prompt("Elije una opción: piedra, papel o tijera")
// let options = [`piedra`, `papel`, `tijera`]
// let azar = Math.floor(Math.random() * 3)
// let computer = options[azar]

// if (jugador === computer) {
//     alert("El jugador saco " + jugador + ", " + " El bot saco " + computer + "," + " empate")
// }
// else if (jugador == `piedra` && computer == `papel` || computer == `piedra` && jugador == `papel`) {
//     alert("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana papel")
// }
// else if (jugador == `papel` && computer == `tijera` || computer == `papel` && jugador == `tijera`) {
//     alert("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana tijera")
// }
// else if (jugador == `tijera` && computer == `piedra` || computer == `tijera` && jugador == `piedra`) {
//     alert("El jugador saco " + jugador + "," + " El bot saco " + computer + "," + " gana piedra")
// }
// });


// let btn2 = document.getElementById("btn2");
// btn2.addEventListener('click', () => {
//     let azar = Math.floor((Math.random() * 10) + 1);
//     let estado = true;
//     let vida = 3

//     while (estado && vida > 0) {
//         let opcion = Number(prompt("Di un número entre 1 y 10, tienes 3 intentos"));

//         if (opcion < 1 || opcion > 20) {
//             alert("Ingresa un número válido");
//         } else if (opcion === azar) {
//             alert("Felicidades, has Ganado");
//             estado = false;
//         } else if (opcion > azar) {
//             vida--;
//             alert("El número es mayor");
//         } else if (opcion < azar) {
//             vida--;
//             alert("El número es menor");
//         }
//     }

//     if (vida === 0) {
//         alert("Perdiste el nuemero era " + azar)
//     }
// })

// let btn3 = document.getElementById("btn3");
// btn3.addEventListener('click', () => {
//     let numero = Number(prompt("ingresa el mes en numeros"))
//     let mes;
//     let estacion;

//     switch (numero) {
//         case 1: case 2: case 12:
//             alert("Es invierno")
//             break;
//         case 3: case 4: case 5:
//             alert("Primavera")
//             break;
//         case 6: case 7: case 8:
//             alert("Verano")
//             break;
//         case 9: case 10: case 11:
//             alert("Otoño")
//         default:
//             alert("Ese no es un mes")
//     }
// })




//Cards ejercicio

const personajes = [
    { nombre: "Rem", imagen: "https://dk2dv4ezy246u.cloudfront.net/widgets/sSBS7c77esj_large.jpg" },
    { nombre: "Goku", imagen: "https://i.pinimg.com/736x/c4/0f/b0/c40fb0e2db6ce980cec04b4a643a9d54.jpg" },
    { nombre: "Vegeta", imagen: "https://i.pinimg.com/736x/4f/2b/dd/4f2bdd4891e5837eb3a1931d8a6e88bb.jpg" },
    { nombre: "Monkey D. Luffy", imagen: "https://i.pinimg.com/1200x/b2/ec/c7/b2ecc7df9a2e0a411a8e5454af4e7cb3.jpg" },
    { nombre: "Roronoa Zoro", imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/ee10d2124278911.6100c34727c8d.png" },
    { nombre: "Nami", imagen: "https://i.pinimg.com/736x/75/82/26/75822614989f12b1dfbecbcd710ab03f.jpg" },
    { nombre: "Levi Ackerman", imagen: "https://paintwaint.in/cdn/shop/files/Background-2025-06-21T151246.166.png" },
    { nombre: "Eren Yeager", imagen: "https://static.wikia.nocookie.net/listofdeaths/images/2/29/Eren_Yeager.jpg/" },
    { nombre: "Mikasa Ackerman", imagen: "https://i.pinimg.com/736x/61/c9/61/61c9617105f438a847ea9f7c3f9a08b8.jpg" },
    { nombre: "Tanjiro Kamado", imagen: "https://cdn.shopify.com/s/files/1/0966/6602/6315/files/m_2Fx1000_2Fdfdb28bc-d267-4f05-9bfd-26d048f62319.jpg" },
    { nombre: "Nezuko Kamado", imagen: "https://i.pinimg.com/736x/3c/2d/29/3c2d29252e59837e243a55744f3a3229.jpg" },
    { nombre: "Satoru Gojo", imagen: "https://i.pinimg.com/736x/bc/31/7c/bc317c7c989f04e7b5c7838923377c73.jpg" },
    { nombre: "Yuji Itadori", imagen: "https://aurapfp.com/wp-content/uploads/2026/02/Yuji-itadori-pfp-3-576x1024.webp" },
    { nombre: "Killua Zoldyck", imagen: "https://w0.peakpx.com/wallpaper/935/962/HD-wallpaper-big-wallpepers-killua-zoldyck.jpg" },
    { nombre: "Gon Freecss", imagen: "https://wallpapercat.com/w/full/8/c/9/1227579-1920x2485-iphone-hd-gon-freecss-wallpaper.jpg" },
    { nombre: "Light Yagami", imagen: "https://m.media-amazon.com/images/I/71AEjh0+uLL.jpg" },
    { nombre: "L Lawliet", imagen: "https://i.pinimg.com/474x/84/14/d3/8414d36cebf371e33740cdb55392f254.jpg" },
    { nombre: "Naruto Uzumaki", imagen: "https://cdng.europosters.eu/pod_public/1300/239998.jpg" },
    { nombre: "Sasuke Uchiha", imagen: "https://i.pinimg.com/736x/41/a5/a8/41a5a88487ce52ec3901f8721187c3a5.jpg" }
];

let tittle = document.querySelector("h1");
let container = document.querySelector("section");

tittle.textContent = "Personajes";


for (let i = 0; i < personajes.length; i++) {
    let nombre = personajes[i].nombre;
    let imagen = personajes[i].imagen;
    
    container.innerHTML += ` 
    
    <div class="card">
        <div class="img">
            <img src="${imagen}" alt="${nombre}">
        </div>
        <p>${nombre}</p>
    </div>`
    
}
