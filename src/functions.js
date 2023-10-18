// Задание 1
// Реализовать функцию, которая принимает строку и целое число, а возвращает символ строки стоящий по указанному в числе индексу. Если символа на указанной позиции нет - возвращается пустая строка.

// getSymbol('The members', 4);  // 'm'
// getSymbol('type can in', 1);  // 'y'
// getSymbol('an error', 20);    // ''

const getSymbol = (str, num) => (str[num] === undefined) ? '' : str[num];

console.log('Задание 1');
console.log(getSymbol('The members', 4));
console.log(getSymbol('type can in', 1));
console.log(getSymbol('an error', 20));


// Задание 2
// Реализовать функцию, которая принимает целое число из отрезка [100, 999] и возвращает число, без второй цифры исходного числа.

// removeDigit(208);  // 28
// removeDigit(109);  // 19
// removeDigit(940);  // 90

const removeDigit = (num) => (Math.floor(num / 100) * 10) + (num % 10);

console.log('Задание 2');
console.log(removeDigit(208));
console.log(removeDigit(109));
console.log(removeDigit(940));


// Задание 3
// Реализовать функцию, которая принимает два целых числа и возвращает информацию о том, является ли одно квадратом другого.

// isSquare(2, 4);    // true
// isSquare(81, 9);   // true
// isSquare(25, 125); // false

const isSquare = (num1, num2) => (num1 === num2 ** 2) || (num2 === num1 ** 2);

console.log('Задание 3');
console.log(isSquare(2, 4));
console.log(isSquare(81, 9));
console.log(isSquare(25, 125));


// Задание 4
// Реализовать функцию, которая принимает целое положительное число и возвращает количество цифр в этом числе. Исходное число от 0 до 2000000000.

// numberLength(123);   // 3
// numberLength(3);     // 1
// numberLength(19283); // 5

const numberLength = (num) => num.toString().length;

console.log('Задание 4');
console.log(numberLength(123));
console.log(numberLength(3));
console.log(numberLength(19283));


// Задание 5
// Реализовать функцию, которая принимает строку и возвращает строку-перевертыш.

// flipOver('hello');    // olleh
// flipOver('swap');     // paws
// flipOver('John Doe'); // eoD nhoJ

const flipOver = (str) => {
    let res = '';

    for (let i = 0; i < str.length; i += 1) {
        res = str[i] + res;
    }

    return res;
};

console.log('Задание 5');
console.log(flipOver('hello'));
console.log(flipOver('swap'));
console.log(flipOver('John Doe'));
console.log();

export { getSymbol, removeDigit, isSquare, numberLength, flipOver };