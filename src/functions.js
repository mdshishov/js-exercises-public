// Задание 1
// В этом простом задании вам дается число, и вы должны сделать его положительным.
// Примечания
// - число уже может быть положительным, и в этом случае никаких изменений не требуется.

// makePositive(1);     // 1
// makePositive(-5);    // 5
// makePositive(0);     // 0
// makePositive(-0.12); // 0.12

const makePositive = (num) => Math.abs(num);

console.log('Задание 1');
console.log(makePositive(1));
console.log(makePositive(-5));
console.log(makePositive(0));
console.log(makePositive(-0.12));
console.log('');


// Задание 2
// Создайте функцию, которая будет возвращать оператор приветствия, использующий входные данные; ваша программа должна возвращать, 'Hi !'. Если передаётся пустая строка - возвращается 'Hi!'

// greet('John'); ➞ 'Hi John!'
// greet('Elise'); ➞ 'Hi Elise!'
// greet(''); ➞ 'Hi!'

const greet = (name) => name ? `Hi ${name}!` : 'Hi!'

console.log('Задание 2');
console.log(greet('John'));
console.log(greet('Elise'));
console.log(greet(''));
console.log('');


// Задание 3
// Создать функцию, которая принимает имя и фамилию пользователя, а возвращает имя и первую букву фамилии.

// getShotFullName('Oliver', 'Smith'); ➞ 'Oliver S.'
// getShotFullName('Jack', 'Johnson'); ➞ 'Jack J.'
// getShotFullName('Harry', 'Williams'); ➞ 'Harry W.'
// getShotFullName('Jacob', 'Brown'); ➞ 'Jacob B.'
// getShotFullName('Charley', 'Jones'); ➞ 'Charley J.'

const getShotFullName = (name, surname) => `${name} ${surname[0]}.`

console.log('Задание 3');
console.log(getShotFullName('Oliver', 'Smith'));
console.log(getShotFullName('Jack', 'Johnson'));
console.log(getShotFullName('Harry', 'Williams'));
console.log(getShotFullName('Jacob', 'Brown'));
console.log(getShotFullName('Charley', 'Jones'));
console.log('');


// Задание 4

// Оригинал задачи с codewars Реализуйте функцию, которая принимает две строки, состоящие из t и f, возвращает новую строку, которая показывает, как две строки взаимодействуют между собой.
// Правила взаимодействия:

//     когда в одной строке символов меньше чем в другой, получается '-'.
//     когда символ t взаимодействует с символом t, получается символ t.
//     когда символ f взаимодействует с символом f, получается символ f.
//     когда символ f взаимодействует с символом t, получается символ ..

// neutralise("ffttff", "ttfftt") ➞ "......"
// neutralise("ftftft", "ftftft") ➞ "ftftft"
// neutralise("fttf", "ftft") ➞ "ft.."

// Задание 5

// Оригинал задачи с codewars; Ваша задача - создать функцию, которая выполняет три основные математические операции и возвращает результат вычисления. Функция должна принимать строку, представляющую арифметическое выражение. Функция должна возвращать результат вычисления после применения выбранной операции. Операции: +,-,*

// basicOp('4+7'); ➞ 11
// basicOp('1-2'); ➞ -1
// basicOp('3*2'); ➞ 6

export { makePositive, greet, getShotFullName };
