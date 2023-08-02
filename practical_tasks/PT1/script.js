// Task1 Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

console.log(Math.min(...[1, 5, 7, 9]));

// Task2 Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let count = 0;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        }
    };
}

// console.log(count); // count is not defined

// Счетчик 1
const counter1 = createCounter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.increment()); // 3
console.log(counter1.increment()); // 4
console.log(counter1.decrement()); // 3

// Счетчик 2
const counter2 = createCounter();
console.log(counter2.increment()); // 1
console.log(counter2.decrement()); // 0
console.log(counter2.increment()); // 1
console.log(counter2.decrement()); // 0

// Task3 Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

function factorial(value) {
    if (value === 1 || value === 0) {
        return 1;
    } else {
        return factorial(value - 1) * value;
    }
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1