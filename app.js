let precioUsuario
let IVAFinal

function ingresarPrecio() {
    let valor = prompt("Ingrese el precio de su producto 💸")
        if(valor<0){
            prompt("Ingrese un monto valido")
        }
    return valor
}

precioUsuario = ingresarPrecio();

function IVA(resultado) {
    return resultado * 1.21;
}

IVAFinal = IVA(precioUsuario);

function MostrarIVA (IVAFinal) {
    return alert ("El precio ingresado 💸 es de $" + " " + precioUsuario + " y el precio final con el Impuesto al Valor Agregado (IVA) 🤑 es de $" + " " + IVAFinal )
}