let fecha = prompt ('Voy a calcular tu NUMERO MAESTRO ✨🔮. Escribí tu fecha de nacimiento (DD)')
let fecha2 = Number(fecha)

let mes = prompt ('Escribí tu mes de nacimiento (MM)')
let mes2 = Number(mes)

let año = prompt ('Escribí tu año de nacimiento (AAAA)')
let año2 = Number(año)



if (fecha > 31) {
    alert (`⛔️ LA FECHA ES INCORRECTA ⛔️. Refrescá la pagina para ingresarlo nuevamente`)
    
} else if (mes > 12){
    alert (`⛔️ El MES ES INCORRECTO ⛔️. Refrescá la pagina para ingresarlo nuevamente`) 
    
} else if (año > 2021 && año < 1900){
    alert (`⛔️ El AÑO ES INCORRECTO ⛔️. Refrescá la pagina para ingresarlo nuevamente`)
     
} else { 
    alert (`¡LOS DATOS INGRESADOS SON CORRECTOS¡ 💯😌🙏🏾`) 
}



let resultadoPrevio1 = Number(fecha2 + mes2 + año2)
alert (`ANOTA ESTE NUMERO: ${resultadoPrevio1}. Ahora ingresá cada uno de los digitos por separado.`)



let primerDigito = prompt ('Primer dígito:')
let digito1 = Number(primerDigito)

let segundoDigito = prompt ('Segundo dígito:')
let digito2 = Number(segundoDigito)

let tercerDigito = prompt ('Tercer dígito:')
let digito3 = Number(tercerDigito)

let cuartoDigito = prompt ('Finalmente, cuarto dígito:')
let digito4 = Number(cuartoDigito)



let resultadoFinal = Number (digito1 + digito2 + digito3 + digito4)
alert (`¡Felicitaciones! tu número maestro o de tu vida es: ${resultadoFinal} 🌈🦄💖💯.`)