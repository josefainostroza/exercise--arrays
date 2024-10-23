const users = ['Macarena', 'Xavi', 'Diego'];
const numbers = [1, 2, 3, 4, 5, 6];

console.log(users[1].toUpperCase());

//Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.
const randomNumbers = (array) => {
  if (array && array.length === 5) {
    const random = array[Math.floor(Math.random() * array.length)];
    return random;
  }
};

console.log(randomNumbers([1, 5, 7, 8, 4]));

/*Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

-'La suma de todos los números es:[suma]' -
  'La media de todos los números es:[media]' -
  'El mayor es [mayor] y el menor es [menor]';*/

const operationNumbers = (array) => {
  if (array && array.length === 3) {
    const addition = array[0] + array[1] + array[2];
    const average = (array[0] + array[1] + array[2]) / 3;
    let major = 0;
    let minor = 0;
    if (array[0] > array[1] && array[1] > array[2]) {
      major = array[0];
      minor = array[2];
    } else if (array[0] > array[2] && array[2] > array[1]) {
      major = array[0];
      minor = array[1];
    } else if (array[1] > array[0] && array[0] > array[2]) {
      major = array[1];
      minor = array[2];
    } else if (array[1] > array[2] && array[2] > array[0]) {
      major = array[1];
      minor = array[0];
    } else if (array[2] > array[1] && array[1] > array[0]) {
      major = array[2];
      minor = array[0];
    } else if (array[2] > array[0] && array[0] > array[1]) {
      major = array[2];
      minor = array[1];
    }
    return `La suma de todos los números es ${addition}, La media de todos los números es ${average},El mayor es ${major} y el menor es ${minor} `;
  }
  return `El array debe tener 3 datos`;
};
console.log(operationNumbers([5, 9, 2]));

//- Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const randomContent = (array) => {
  if (array && array.length === 5) {
    const random = Math.floor(Math.random() * 11);
    if (array.includes(random)) {
      return `Si contiene el ${random} en la posición ${array.indexOf(random)}`;
    }
    return `No contiene el número`;
  }
  return `No contiene correctamente el array`;
};
console.log(randomContent([1, 2, 3, 4, 5]));

//- Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const arrayEmpty = (array) => {
  if (array && array.length === 0) {
    const random = Math.floor(Math.random() * 101);
    const random2 = Math.floor(Math.random() * 101);
    const random3 = Math.floor(Math.random() * 101);
    array.push(random);
    array.push(random2);
    array.push(random3);

    return array;
  }
  return 'no has escrito el array vacío';
};
console.log(arrayEmpty([]));

//Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

const dniLetter = (dni) => {
  const letter = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
  ];
  const index = dni % 23;
  const dniLetter = letter[index];
  return dni + dniLetter;
};
console.log(dniLetter([1590532]));

//Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const initialAndLastLetter = (array) => {
  let array2 = [];
  const hola0 = array[0].charAt(0).toUpperCase();
  const hola3 = array[0].charAt(array[0].length - 1).toUpperCase();
  const adios1 = array[1].charAt(0).toUpperCase();
  const adios4 = array[1].charAt(array[1].length - 1).toUpperCase();
  const gato2 = array[2].charAt(0).toUpperCase();
  const gato3 = array[2].charAt(array[2].length - 1).toUpperCase();

  array2.push(hola0, hola3, adios1, adios4, gato2, gato3);
  return array2;
};

console.log(initialAndLastLetter(['hola', 'adios', 'gato']));

//- Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.

const odd = (array) => {
  if (array && array.length === 3) {
    let count = 0;
    if (array[0] % 2 === 0) {
      count++;
    }
    if (array[1] % 2 === 0) {
      count++;
    }
    if (array[2] % 2 === 0) {
      count++;
    }
    return count;
  }
};
console.log(odd([12, 2, 3]));

//Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.

const inverse = (array) => {
  if (array && array.length === 3) {
    const array2 = [];
    array2.push(array[2]);
    array2.push(array[1]);
    array2.push(array[0]);

    return array2;
  }
};
console.log(inverse([1, 2, 3]));

//- Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.

const inverseMayus = (array) => {
  if (array && array.length === 3) {
    const array2 = [];
    array2.push(array[0].toUpperCase());
    array2.push(array[1].toUpperCase());
    array2.push(array[2].toUpperCase());

    return array2;
  }
};
console.log(inverseMayus(['hola', 'cómo', 'estás']));
