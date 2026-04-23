const nombre = [
    { nombre: "Juan", apellido: "Perez", edad: 25, altura: 1.61, Peso: 40 },
    { nombre: "María", apellido: "paes", edad: 28, altura: 1.72, Peso: 43 },
    { nombre: "Pedro", apellido: "gonzales", edad: 23, altura: 1.85, Peso: 48 },
    { nombre: "Ana", apellido: "franca", edad: 30, altura: 1.55, Peso: 60 },
    { nombre: "Luis", apellido: "baez", edad: 25, altura: 1.80, Peso: 76 }
];







for (let i = 0; i < nombre.length; i++) {
    const persona = nombre[i];
    const imc = calcularIMC(persona.Peso, persona.altura);
    console.log(`\nNombre: ${persona.nombre} ${persona.apellido} \nAltura: ${persona.altura} \nPeso: ${persona.Peso} \nIMC:`);
    console.log('IMC:', Number(imc.toFixed(1)));

    

    if (imc < 18.5) {
        console.log(`Peso inferior al normal:   Menos de 18.5`)
    } else if (imc < 24.9) {
        console.log(`Normal:    18.5 - 24.9`)
    } else if (imc < 29.9) {
        console.log(`Peso superior al normal:   25.0 - 29.9`)
    } else {
        console.log(`Obesidad:  Más de 30.0`)
    }
    console.log("<------------UwU------------>");
}

// calcular el indice de masa corporal

function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}
