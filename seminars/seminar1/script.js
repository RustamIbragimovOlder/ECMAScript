// Задание 1  Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2]; // функция принимает два массива, ракрывает их и объединяет
const newArray = mergeArrays(array1, array2);
console.log(array1); // [ 1, 2, 3 ]
console.log(array2); // [ 4, 5, 6 ]
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]

// Задание 2 Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

// var1
const removeDuplicates1 = (...numbs) => { // функция принимает последовательность чисел
    const arr = [...numbs]; // формируем из последовательности чисел массив
    return arr.filter((el, index) => { // метод filter проходит по всем элементам массива
        return arr.indexOf(el) === index; // метод indexOf ищет переданный элемент в массиве. Если элемент один, то возвращает индекс этого элемента. Если элементов много — возвращает индекс первого подходящего элемента. 
    });
};

// var2
const removeDuplicates2 = (...numbs) => {
    const arr = [...numbs]; // формируем из последовательности чисел массив
    const uniqArr = [...new Set(arr)]; // объявляем новый массив uniqArr, метод Set - собирает уникальные значения из переданного в него массива
    return uniqArr;
};

console.log(removeDuplicates1(1, 2, 3, 2, 4, 1, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(removeDuplicates2(1, 2, 3, 2, 4, 1, 5)); // [ 1, 2, 3, 4, 5 ]

// Задание 3 Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.

array = [1, 2, 3, 4, 5, 6, 7, 8];
const getEvenNumbers = (arr) => {
    const newArr = arr.filter((el) => {
        if (el % 2 == 0) {
            return el;
        }
    });
    return newArr;
};
console.log(array); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(getEvenNumbers(array)); // [ 2, 4, 6, 8 ]

// Задание 4 Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.

const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
const calculateAverage = (arr) => {
    const sum = arr.reduce((acc, el) => {
        return acc + el;
    }, 0);
    return sum / arr.length;
};
console.log(calculateAverage(array3)); // 4.5

// Задание 5 Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

string = 'привет, дорогой друг!!!';
const capitalizeFirstLetter = (str) => { // функция принимает строку
    return str.replace(/(^|\s)\S/g, (char) => char.toUpperCase()); // replace - метод  и /(^|\s)\S/g - регулярное выражение вместе делят строку на слова и находят в каждом слове первый символ (букву), char.toUpperCase() - меняет первый символ в каждом слове на верхний регистр
};
console.log(string); // привет, дорогой друг!!!
console.log(capitalizeFirstLetter(string)); // Привет, Дорогой Друг!!!

// Задание 6 Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число. Значение должно быть доступно только через методы объекта, а не напрямую.

const createCalculator = (arg) => {
    return {
        add(numb) {
            console.log(arg + numb);
        },
        subtract: function (numb) {
            console.log(arg - numb);
        },
    };
};
const calc = createCalculator(20);
calc.add(8); // 28
calc.subtract(7); // 13

// Задание 7 Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.
// Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (name) => {
    const greeting = () => `Hello, ${name}`;
    return greeting();
};
const greeting = createGreeting('John');
console.log(greeting); // Hello, John

// Задание 8 Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Задание 9 Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.
// Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

const sumDigits = (num) => {
    if (num < 10) {
        return num;
    } else {
        return (num % 10) + sumDigits(Math.floor(num / 10)); // Math.floor - отбрасывает последнюю цифру
    }
};

console.log(sumDigits(123)); // 6
console.log(sumDigits(456789)); // 39