/**
 * Contesta a todas las preguntas al lado
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función?
 * "isPositive"
 * 
 * 2. ¿Que deberíamos escribir para ejecutar esta función?
 * "isPositive(6);
 * "
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean?
 * boolean
 * 
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué?
 * no es correcto porque el nombre no representa con bastante fidelidad el valor de la función?
 */

let x = 4;
if (isPositive(x)) {
  console.log("El número es negativo");
} else {
  console.log("El número es positivo");
}
