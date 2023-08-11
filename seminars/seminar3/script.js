// Задание 1
// 	Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const getPrototypeChain = (obj) => {
    let prototypes = [];

    while (obj !== null) {
        prototypes.push(obj);
        obj = Object.getPrototypeOf(obj);
    }

    return prototypes;
};

console.log(getPrototypeChain({ arg1: 100500 })); // [ { arg1: 100500 }, [Object: null prototype] {} ]
console.log({ arg1: 100500 }); // { arg1: 100500 }
console.log([]); // []
const str = 'Привет';
console.log(getPrototypeChain({ str }));

// Задание 2 Напишите конструктор объекта Person, который принимает два аргумента: name (строка) и age (число). Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

const Person = {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    },

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
    },
};

Person.name = 'John';
Person.age = 25;
Person.introduce();

// Задание 3 Напишите конструктор объекта BankAccount, который будет представлять банковский счет. Конструктор должен принимать два аргумента: accountNumber (строка) и balance (число). Конструктор должен создавать объект с указанными свойствами accountNumber и balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает баланс на указанную сумму, если на счету есть достаточно средств. Если средств недостаточно, выводится сообщение "Недостаточно средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета.

// смотри семинар №2

// Задание 4 Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".
// Пример использования
// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Животное ${this.name} издаёт звук`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // наследование свойства name родителя
        this.breed = breed;
    }

    fetch() {
        console.log(`${this.name} породы ${this.breed} принёс мяч`);
    }
}

const animal1 = new Animal('Корова');
animal1.speak(); // Животное Корова издаёт звук
const dog1 = new Dog('Бобик', 'Дворняжка');
dog1.speak(); // Животное Бобик издаёт звук
console.log(dog1.breed); // Дворняжка
dog1.fetch(); // Бобик породы Дворняжка принёс мяч
console.log(dog1); // Dog { name: 'Бобик', breed: 'Дворняжка' }

// Задание 5 Придуманное расширение свойств и методов глобального объекта

class newMath extends Object {
    add() {
        return a + b;
    }
    div() {
        return a - b;
    }
}

const calc = new newMath();
console.log(calc);

// Пример MoveTo библиотеки Move To - работа с якорными ссылками (плавный переход к якорной ссылке)

// Создаем объект класса MoveTo. Класс MoveTo указан в подключенной библиотеке
const moveTo = new MoveTo({
    duration: 5000,
});

const btn = document.querySelector('.btn1'); // присвоение переменной btn значение первого элемента с классом btn1

moveTo.registerTrigger(btn); // регистрация для кнопки btn библиотеки MoveTo

// Пример библиотеки lodash - содержит много разных методов

// Метод _.chunk: на вход - массив и число, на выходе множество массивов с размером = числу
console.log(_.chunk(['a', 'b', 'c', 'd', 1, 34, 35, 46, 54, 7, 3, 5, 235, , true], 4)); // результат смотри в браузере
// Array(4)
// 0 : (4) ['a', 'b', 'c', 'd']
// 1 : (4) [1, 34, 35, 46]
// 2 : (4) [54, 7, 3, 5]
// 3 : (3) [235, undefined, true] // undefined - это значение пробела в исходном массиве
// length : 4
// [[Prototype]] : Array(0)

// Пример библиотеки Tippy.js - при наведении курсора на элемент - выводит подсказки
tippy(btn, {
    content: 'Привет! Это первая кнопка!',
    placement: 'top-start',
    animation: 'scale',
    theme: 'light',
});
const btn2 = document.querySelector('.btn2'); // присвоение переменной btn2 значение первого элемента с классом btn2
tippy(btn2, {
    content: 'Привет! А я - вторая кнопка!',
    placement: 'bottom-start',
    animation: 'scale',
});

// Пример библиотеки Swiper - организация на сайте карусели, слайдера + пагинация (пролистывание)
// Pagination custom

const swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

// Пример библиотеки lazysizes - чтобы медиафайлы, находящиеся на сайте подгружались не сразу, а постепенно по мере необходимости - смотри в браузере

// Пример библиотеки IMask - работает с input (ввод данных по маске, шаблону)

const input = document.querySelector('.input1');

IMask(input, {
    mask: '+{7}(000)000-00-00',
});