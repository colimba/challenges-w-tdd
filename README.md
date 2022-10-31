# Acerca de tdd-training

Prácticas con TDD haciendo retos propuestos por [adventjs](https://adventjs.dev/).

Dependencia para ejecución de test 👉 [vitest](https://vitest.dev/) `npm run test` 🚀 

## 1. [Contando ovejas para dormir](https://adventjs.dev/challenges/01) (sheepCounter.js)
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color **rojo** y que además su nombre contenga tanto las letras **n** y **a**, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:
```js
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
```
Al ejecutar el método debería devolver lo siguiente:
```js
const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```
## 2. [¡Ayuda al elfo a listar los regalos!](https://adventjs.dev/challenges/02) (listGifts.js)
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un `_` delante de la palabra, por ejemplo `_playstation`, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
```js
const carta = 'bici coche balón _playstation bici coche peluche'
```
Al ejecutar el método debería devolver lo siguiente:
```js
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

## 3. [El Grinch quiere fastidiar la Navidad](https://adventjs.dev/challenges/03) (grinchPrank.js)
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis `()`.

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves `{` y corchetes `[` dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:
```js
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
```
Crea una función que pasándole el texto de la carta, devuelva `true` si es válida y `false` si no lo es. ¡Y acaba con la travesura del Grinch!

## 4. [¡Es hora de poner la navidad en casa!](https://adventjs.dev/challenges/04) (xmasTree.js)
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento `5`, se pintaría esto:

```
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteriscos `*` con la altura proporcionada y, a los lados, usamos el guión bajo `_` para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de `#`.

Otro ejemplo con un árbol de altura 3:

```
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea `\n` para cada línea para que se forme bien el árbol.