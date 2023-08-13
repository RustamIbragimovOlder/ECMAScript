// Example1 localStorage - локальное хранилище браузера

localStorage.setItem('name', 'Bob'); // добавление данных в localStorage
localStorage.setItem('age', '30');
localStorage.setItem('gender', 'male');
localStorage.setItem('nickName', 'Cool Boy');

localStorage.removeItem('age'); // удаление данных из localStorage по ключу

const user = localStorage.getItem('name'); // получение данных из localStorage по ключу
console.log(user);

console.log(localStorage.key(1)); // получение ключа из localStorage по индексу

localStorage.clear(); // очистка localStorage

// Работа в localStorage с объектами

// localStorage.user = { name: 'John' }; // покажет [object Object] так как работает только со string

localStorage.user = JSON.stringify({ name: 'John' }); // переводим объект в строку

// Получение объекта из localStorage

const newUser = JSON.parse(localStorage.user);
console.log(newUser);

// IMPORT and EXPORT
// modules - набор небольших кусочков кода, с которыми удобно работать
// 1. В index.html добавить type="module" (лучше это делать по умолчанию!!!)
// 2. Создать модуль с какой - то функцией и прописать в нем export default [имя функции]; (вариант 2 или сразу export перед функцией) (вариант 3 экспорт объекта, состоящего из нескольких функций)
// 3. В основном файле JS прописать import [имя функции] from '[путь]'; (вариант 2 или сразу функцию) (вариант 3 import [свое имя метода] from '[путь]')

import add from './modules/add.js';
// import { def } from './modules/def.js';
import { def, data } from './modules/def.js'; // другими словами - деструктуризация
import calc from './modules/funcs.js';

// Проверка import/export
console.log(add(10, 20)); // 30
console.log(def(10, 5)); // 5
console.log(data); // (6) [1, 3, 34, 6, 7, 4]
console.log(calc); // {mult: ƒ, div: ƒ}
console.log(calc.mult(5, 5)); // 25
console.log(calc.div(50, 2)); // 25

// Асинхрон

// Promise - специальный объект JavaScript, который используется для написания и обработки асинхронного кода. Асинхронные функции возвращают объект Promise в качестве значения. Внутри промиса хранится результат вычисления, которое может быть уже выполнено или выполнится в будущем. Промис может находиться в одном из трёх состояний: pending — стартовое состояние, операция стартовала; fulfilled — получен результат; rejected — ошибка.

// метод resolve - Promise завершается успешно (от сервера получен ответ)
// метод reject - Promise завершается с ошибкой (сервер недоступен)

// В общем виде выглядит так:
// const myPromise = new Promise((resolve, reject) => { });
// console.log(myPromise);
// У объекта myPromise есть три метода:
// myPromise.then - обрабатывает ответ, полученный от сервера
// myPromise.catch - отлавливает ошибку
// myPromise.finally - выполняется в любом случае независимо от полученного результата
// myPromise
//     .then((value) => {
//         // value - значение, переданное методом resolve
//     })
//     .catch((error) => {
//         // действия для обработки ошибки
//     });

const url = 'https://jsonplaceholder.typicode.com/users';

// метод fetch - метод для работы с асинхронными данными

fetch(url)
    .then((response) => response.json()) // response - ответ от сервера
    .then((data) => console.log(data))
    .catch((error) => console.error('Что-то пошло не так')); // console.error - вывод красным (ошибочным) цветом (можно вместо вывода сделать возврат на предыдущую страницу, можно вывести картинку с подписью "Мы уже работаем над проблемой. Подождите пару минут")

// Упрощение (своего рода модуль для работы с данными)

// Делаем заготовку для работы с данными
const getData = (url) =>
    new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });

// Работаем с данными
getData(url).then((data) => console.log(data));
getData(url).catch((error) => console.error('Что-то пошло не так'));

// async/await (это надстройка над промисами)

const getData2 = async (url) => {
    const response = await fetch(url); // подожди, пока не отработает метод fetch
    const data = await response.json(); // подожди, пока не отработает метод json
    return data; // теперь выведи данные
};

try {
    const users = await getData2('https://jsonplaceholder.typicode.com/users');
    console.log(users);
} catch (error) {
    console.error('Что-то пошло не так!');
}

// Axios - библиотека для работы с асинхронными запросами

// Проект NASA - Работа с API

// const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=5n7e47W4uxejJylUpr7ImDVlsFcnbE0cuRGiROgv';
const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=5n7e47W4uxejJylUpr7ImDVlsFcnbE0cuRGiROgv&count=15';

const div = document.querySelector('.wrapper');

const getData3 = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

// try {
//     const data = await getData3(nasaURL);
//     console.log(data);
// } catch (error) {
//     console.error('Что-то пошло не так!');
// }

try {
    const data = await getData3(nasaURL);
    data.forEach((element) => {
        div.insertAdjacentHTML(
            'beforeend',
            `<figure>
                <img src="${element.url}" alt="pic" />
                <figcaption>${element.explanation}</figcaption>
                <button>Удалить</button>
            </figure>`
        );
    });


    const btns = document.querySelectorAll('button');
    console.log(btns);
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log('Клик');
        });
    });
} catch (error) {
    console.error('Что-то пошло не так!');
}
