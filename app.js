// RECIBO LAS NOTAS

// function PromedioNota (nota1, nota2, nota3) {
//     let SumaDeNotas = Number (nota1) + Number (nota2) + Number (nota3)
//     let ResultadoDeNotas = SumaDeNotas / 3
//     return ResultadoDeNotas;
// }

//Es bueno usar la regla upperCase para variables y funciones
let notas;
let promedioNotas;

//Esta funcion no recibe parametros, esta consultando datos dentro de ella y devolviendo un valor
// function ingresaNotas(nota1, nota2, nota3) {

//Por lo que podria ser declarada asi:
function ingresaNotas() {
  let nota1 = prompt("Ingrese 1ra. nota:");
  nota1 = parseInt(nota1);

  let nota2 = prompt("Ingrese 2da. nota:");
  nota2 = parseInt(nota2);

  let nota3 = prompt("Ingrese 3ra. nota:");
  nota3 = parseInt(nota3);

  if ((nota1, nota2, nota3 < 0 && nota1, nota2, nota3 > 10)) {
    prompt("Ingrese una nota valida");
  }
  //Estas devolvuendo una unica nota, que es la primera, lo podes ver por consola
  //   console.log(nota1);
  //   return nota1;

  //Lo que debes hacer es devolver las tres notas separadas, sumadas o ya promedidas
  //En este caso, sumamos las tres notas
  return nota1 + nota2 + nota3;
}

notas = ingresaNotas();
//Con un console.log comprobamos que el valor retornado es el correcto
console.log(notas);

//Esta muy bien declarada la funcion
function pro(notasSumadas) {
  return notasSumadas / 3;
}

//No estas inicializando la funcion, por lo que promedioFinal nunca recibe un valor
//Para iniciarla le falta los parentesis y el valor que recibe
// PromedioFinal = pro;

//Initializamos la funcio y le pasamos por parametro el valor esperado
promedioNotas = pro(notas);

//Esta muy bien declarada la funcion
function mostrarPromedioFinal(promedioFinal) {
  if (promedioFinal >= 7) {
    alert("PROMOCIONA CON 🎉" + " " + promedioFinal);
  } else {
    if (promedioFinal >= 4) {
      alert("Regulariza con 👌🏽" + " " + promedioFinal);
    } else {
      alert("Desaprueba con ⛔️" + " " + promedioFinal);
    }
  }
}

//Nunca la inicializas, por eso no muestra ningun alert
//Inicializamos la funcion mostrarPromedioFinal() para que se imprima en pantalla y le pasamos el valor esperado

mostrarPromedioFinal(promedioNotas);

//Fin
