debugger;
alert(
  "A continuacion vamos a realizar la serie fibonacci, la cual comienza con 0, 1 y a partir de estos, cada serie siguente es la suma de los dos anteriores."
);
/* let numero = parseInt(prompt("Ingresá un numero entero positivo:")); */
let numero = "";
let correctNumber = /^[0-9]+$/;
while (numero != numero.toString().match(correctNumber)) {
  numero = parseInt(prompt("Ingresá un numero entero positivo:"));
}
var fibonacci = [];
for (j = 0; j <= numero; j++) {
  if (j === 0) {
    fibonacci.push(0);
    console.log("Serie Fibonacci: " + fibonacci);
  } else if (j === 1) {
    fibonacci.push(1);
    console.log("Serie Fibonacci: " + fibonacci);
  } else {
    fibonacci.push(fibonacci[j - 1] + fibonacci[j - 2]);
    console.log("Serie Fibonacci: " + fibonacci);
  }
}
