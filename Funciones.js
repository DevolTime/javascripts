let numero = [26, 2, 3, 4, 33, 6, 7, 22, 9, 11]

function multiplos (numero) {
    let multiplo = []

    for (let i = 0; i < numero.length; i++) {
        multiplo.push(numero[i] * 2)
    } 
    
    console.log(multiplo)
}

multiplos(numero)