import "./style.css";

/*
Laboratorio🔬 Módulo 2 - Tipos de datos y Operadores

Tienes un grupo de 6 amigos y quieres invitarlos a cenar por tu cumpleaños.

Solo puedes permitirte invitar a las bebidas, ya que estás un poco ajustado de dinero.
Tienes un ticket de cena que cuesta 120 € y en el que ya se incluyen las bebidas por un valor de 18 €.
Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.
Utiliza JavaScript para hacer el cálculo y mostrar el resultado por consola.


*/

let precio_cena = 120;
let costo_bebidas = 18;
let comensales = 7;

let costo_real_cena = precio_cena - costo_bebidas;
let total_individual = costo_real_cena / comensales;

console.log(precio_cena - costo_bebidas);
console.log(`Tenemos un ticket🗳️ de cena que cuesta ${precio_cena} euros y en el que se incluyen las bebidas.\nSolo tenemos dinero para costear los ${costo_bebidas} que cuesta el refrigerio por lo que realizamos la resta del costo de las bebidas al precio de la cena, resultando en: ${precio_cena} - ${costo_bebidas} = ${costo_real_cena}💵 \n
Somos ${comensales} y el precio tras dividir la cuenta es de: ${total_individual.toFixed(
  2
)}`);
