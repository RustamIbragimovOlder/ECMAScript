// Spread operator and Rest operator

// Example1 простой
// const arr = [1, 5]
const arr = [1, 5, 9, 15, 4, 2, 45] // Меняем массив на гораздо больший чем 2 элемента
// функция поиска максимума
function max(param1, param2, ...rest) { // если элементов больше, чем указанные 2 аргумента - добавляем ...rest
    if (param1 > param2) {
        console.log(param1);;
    } else {
        console.log(param2);
    }
    console.log(rest);
}
console.log(max(...arr));
// Меняем созданную функцию на метод Math.max
// console.log(Math.max(...arr));

// Example2 сложный только Spread operator
// есть массив с объектами Группа1
const studentsGroup1PracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];
// есть массив с объектами Группа2
const studentsGroup2PracticeTime = [
    {
        firstName: "Mankov",
        practiceTime: 87
    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlyarov",
        practiceTime: 140
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    },
];
// Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов, и находить максимум среди них. Функция должна вызываться подобным образом: const maximum = findMax(4, 7, 10);
function findMax() {
    const values = arguments; // arguments - переменная доступная внутри каждой функции, которая содержит в себе все аргументы, переданные в функцию. Является псевдомассивом.
    let maxValue = -Infinity; // присваиваем переменной maxValue минимально возможное значение -Infinity
    // Так как arguments является псевдомассивом, мы не можем применять к нему новые методы массивов такие как forEach или reduce, поэтому будем итерировать по старинке.
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};
// Мы должны передавать в нашу функции только числа, а в наших массивах содержаться объекты, поэтому сначала создадим массивы только со значениями времени отработанными студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
console.log(group1PracticeTime); // [ 56, 120, 148, 20, 160 ] значения 1-й группы
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);
console.log(group2PracticeTime); // [ 87, 133, 140, 10 ] значения 2-й группы
// Теперь можем вызывать нашу функцию поиска максимального значения. Она принимает множество числовых аргументов, а у нас есть только массив, вот тут нам и поможет оператор spread.
const maxTimeFromGroup1 = findMax(...group1PracticeTime); // ...group1PracticeTime - вытянет из массива все элементы и передаст их в функцию как отдельные переменные.
// Это аналогично страшной и неудобной записи:
// findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], group1PracticeTime[3], group1PracticeTime[4])
console.log(maxTimeFromGroup1); // 160 мах 1-й группы
const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140 мах 1-й группы
// Давайте также найдем максимально отработанное время среди двух групп. Мы можем сделать это передав данные обоих массивов в функцию таким образом:
// findMax(...group1PracticeTime, ...group2PracticeTime);
// А можем объединить два массива в один - это очень частая операция и оператор расширения (spread) очень в этом помогает.
const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
console.log(bothGroupsTime); // [ 56, 120, 148,  20, 160,  87, 133, 140, 10 ] значения обеих групп вместе
// Для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов первого и второго массива. Также мы могли бы добавить в него и другие элементы.
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160 мах обеих групп

// Example3 сложный Spread operator и Rest operator
// используя rest оператор мы избавляемся от псевдомассива arguments
function findMax(...values) { // тут мы принимаем все переданные аргументы и с помощью rest оператора упаковываем их в массив values. На этот раз values уже настоящий массив и мы можем использовать reduce для итерации по нему и нахождения максимального числа.
    return values.reduce((acc, value) => {
        if (value > acc) return value;
        return acc;
    }, -Infinity);
};
// Создадим массивы только со значениями времени отработанными студентами.
const group1PracticeTime2 = studentsGroup1PracticeTime.map((student) => student.practiceTime);
const group2PracticeTime2 = studentsGroup2PracticeTime.map((student) => student.practiceTime);
// Вызовем нашу функцию поиска максимума, используя оператор spread.
const maxTimeFromGroup1_2 = findMax(...group1PracticeTime2);
console.log(maxTimeFromGroup1); // 160
const maxTimeFromGroup2_2 = findMax(...group2PracticeTime2);
console.log(maxTimeFromGroup2); // 140
// Давайте также найдем максимально отработанное время среди двух групп.
const bothGroupsTime2 = [...group1PracticeTime, ...group2PracticeTime];
const maxTimeBothGroups2 = findMax(...bothGroupsTime2);
console.log(maxTimeBothGroups2); // 160

// СДЕЛАТЬ САМОМУ: мах из первых 3 - х и массив оставшихся

// Example4
const saveFullNameInDB = (firstName, lastName, ...additionals) => {
    saveFirstName(firstName);
    saveLastName(lastName);
    saveAdditionals(additionals);
}
// Благодаря rest оператору мы смогли собрать все дополнительные данные, которые были переданы для сохранения в базе данных, и можем передать их одним массивом в функцию сохранения дополнительных данных.


// Чистые функции
// Example5
const student = {
    firstName: "Ivan",
    age: 21,
};
// Функция вычисления года рождения. Принимает текущий год, и вычисляет год рождения студента используя глобальные данные.Это функция с побочными эффектами. Она сильно зависит от глобальной переменной student.
const getYearOfBith = (currentYear) => currentYear - student.age;
console.log(getYearOfBith(2021)); // 2000
student.age = 25;
console.log(getYearOfBith(2021)); // 1996 - Мы вызывали функцию дважды с одним и тем же параметром, но получили разный результат. Это значит что мы не можем точно знать что вернет функция в тот или иной момент работы программы, и мы не можем гарантировать что код будет выполняться верно.

// Чистая версия функции. Берет данные только из своих аргументов.
const getYearOfBithPureVersion = (age, currentYear) => currentYear - age;

// Example6
// Более сложный пример с мутацией (побочными эффектами), но более частый на практике.
// Функция добавления нового ключа в объект. Принимает исходный объект, имя ключа, и значение, которое надо добавить.
const addField = (object, key, value) => {
    object[key] = value;
    return object;
};
const updatedStudent = addField(student, 'lastName', 'Belkin');
console.log(student); // {firstName: "Ivan", age: 25, lastName: "Belkin"} - вызвав нашу функцию добавления поля, мы изменили начальный объект, что может привести к нежелательным последствиям в остальном коде, которые порой очень сложно обнаружить.Например дальше по коду может идти итерация объекта student и вывод только начальных полей, но мы добавили в него третье поле, которое тоже будет проитерировано.
console.log(updatedStudent); // {firstName: "Ivan", age: 25, lastName: "Belkin"}

// Чистый вариант функции - нам нужно создать новый объект внутри функции для изменения и возврата.
const addFieldPureVersion = (object, key, value) => {
    return { // возвращаем новый объект.
        ...object, // Воспользуемся оператором spread, для получения копии свойств исходного объекта.
        [key]: value // Добавим новое свойство.
    }
};
const updatedStudentPure = addFieldPureVersion(student, 'practiceTime', 148);
console.log(student); // {firstName: "Ivan", age: 25, lastName: "Belkin"} - на этот раз исходный объект не был изменен.
console.log(updatedStudentPure); // {firstName: "Ivan", age: 25, lastName: "Belkin", practiceTime: 148}

// Иммутабельность
// Example7
const mutableArr = [1, 2, 3, 4];
arr.push(5);
console.log(mutableArr); // [1, 2, 3, 4, 5] исходный объект изменен!!!

// Использование seamless-immutable.js
const immutableArr = Immutable([1, 2, 3, 4]);
const newImmutableArr = immutableArr.concat([5]);
console.log(immutableArr); // [1, 2, 3, 4] исходный объект не изменен!!!
console.log(newImmutableArr); // [1, 2, 3, 4, 5] это новый объект

// Замыкания
// Example8
// В алгоритмах часто есть необходимость подсчитать какие-либо действия, для этого создается переменная счетчик, с первоначальным значением 0 и при необходимых действиях значение этого счетчика увеличивается на единицу. Это может быть например количество просмотров статьи, или количество нажатий на определенную кнопку на сайте, например на кнопку спасибо
// Функция создания счётчика замыкает внутри себя значение счётчика.
const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}

// Создаем счетчик.
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

// Создадим еще один счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
counter2(); // 1
counter1(); // 3

// Example9
// Создание функции с кэшированием результатов расчета. Бывают функцию, которые делают сложные и долгие расчеты, поэтому имеет смысл сохранять результат такого расчета с привязкой к аргументам, с которыми была вызвана функция, чтобы если функция будет вызвана с такими аргументами повторно, можно было взять уже готовый результат, а не рассчитывать его снова. Для примера возьмем простую функцию, которая вычисляет квадрат числа:

const closureFunction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}
const chachedPow = closureFunction();
chachedPow(2); // 4
chachedPow(8); // 64
chachedPow(2); // 4 — тут функция возьмёт значение из кеша и не будет вычислять его заново.Это особенно эффективно работает, когда мы имеем дело со сложными и тяжёлыми вычислениями или, например, запросами каких-то ресурсов из базы данных или внешних источников.Тут нельзя забывать о валидации кеша.Он может стать неактуальным, если мы имеем дело с базой данных или внешними источниками данных.
// В этом примере реализовано простое замыкание для сохранения результатов вычисления в кэш. Если в кеше результат уже есть, то мы возвращаем его. Если нет, то вычисляем и добавляем в кэш. Обратиться к переменной cache снаружи функции нельзя: она защищена (замкнута) внутри функции closureFunction.

// Example10
// Ещё один пример использования замыкания — это сокрытие переменных внутри подключаемых модулей. Мы можем подключить на страницу много внешних скриптов, и каждый такой скрипт будет определять свои переменные, которые в какой-то момент могут совпасть с переменными из другого скрипта, и всё сломается. Именно поэтому придумали скрывать необходимые скрипту переменные внутри модуля (замыкания). Вот так выглядит один из вариантов:
(function () {
    const sliderTexts = ['Promo', 'Brands', 'Best'];
    function showSlider(texts) {
        console.log(texts[0]);
        console.log(texts[1]);
        console.log(texts[2]);
    }
    showSlider(sliderTexts);
}());
// Мы создаём функцию, которая тут же вызывается и исполняет код. При этом переменная sliderTexts скрыта от других скриптов и не может быть переопределена.

// Лексический контекст
// Example11
const lastName = "Petrov";
// lexical environment: { lastName: "Petrov" }
const getFullName = (firstName) => {
    // lexical environment: { lastName: "Petrov", firstName: <определяется в момент вызова функции> }
    const fullName = firstName + ' ' + lastName;
    // lexical environment: {lastName: "Petrov", firstName: <определяется в момент вызова функции>, fullName: <вычисляется в момент вызова функции> }
    console.log(fullName);
    return energy;
};
getFullName("Ivan"); // Ivan Petrov
// lexical environment в момент вызова функции становится таким: { lastName: "Petrov", firstName: "Ivan", fullName: "Ivan Petrov" }

// Example12
// Напишем функцию, которая будет строить дома: создадим массив функций, при вызове функции из каждого элемента массива должен выводиться номер дома.

const houses = [];
let i = 0;
while (i < 10) {
    let houseNumber = i; // Здесь мы создаём блочную переменную, которая сохранит значение i для конкретной итерации цикла, и именно её значение попадёт в лексическое окружение функции house.
    let house = function () { // функция «дом»
        console.log(houseNumber); // выводит номер дома
    };
    houses.push(house);
    i++;
}
houses[0](); // 0 — у нулевого дома номер 0
houses[7](); // 7 — и у седьмого дома номер 7

// Рекурсия
// простой пример факториал 5! = 1 * 2 * 3 * 4 * 5
// n! = (n - 1)! * n
function factorial(number) {
    if (number === 1) {
        return 1;
    } else {
        return factorial(number - 1) * number;
    }
}
console.log(factorial(5));

// Example13 вычисление степени: 2^10 = 2^9*2
const exponentiation = (base, exponent) => {
    // Всегда проверяйте данные, которые к вам пришли.
    if (typeof base !== 'number' || typeof exponent !== 'number')
        return NaN;
    // Если наша степень больше нуля, вызываем рекурсию, то есть берём основание и умножаем на нашу же функцию, только с аргументом степени, уменьшенным на единицу.
    if (exponent > 0) return base * exponentiation(base, exponent - 1);
    // В противном случае делаем выход из рекурсии, просто возвращая основания, так как любое число в нулевой степени равно одному.
    return 1;
}
const result = exponentiation(2, 10);
console.log(result); // 1024

// Example14 пример с древовидной структурой полей формы
// Типы полей в форме. Очень полезно выносить повторяющиеся данные в справочники.
const fieldTypes = {
    text: 'textField',
    fieldSet: 'fieldSet',
};
// Тестовый объект полей формы, который может быть получен от сервера (Backend).
const formData = [
    {
        fieldName: "First name",
        required: true,
        type: fieldTypes.text,
    },
    {
        fieldName: "Last name",
        required: false,
        type: fieldTypes.text,
    },
    {
        fieldName: "Address",
        required: true,
        type: fieldTypes.fieldSet,
        fields: [
            {
                fieldName: "State - Province",
                required: true,
                type: fieldTypes.text,
            },
            {
                fieldName: "Street",
                required: true,
                type: fieldTypes.text,
            },
            {
                fieldName: "House",
                required: true,
                type: fieldTypes.text,
            },
        ]
    },
];
// Наша функция, которая должна на основе этих данных построить HTML-форму.
const getForm = (formStructure) => {
    // Всегда проверяйте данные, которые к вам пришли.
    if (!Array.isArray(formStructure)) return 'Wrong form structure';
    let form = ''; // Это очень грубый пример. Мы будем создавать форму просто как текст, а в реальности в этой переменной должны быть узлы DOM или компоненты фреймворка (например, React.js).
    formStructure.forEach((element, index) => {
        // Если поле текстовое, то мы обработаем его сразу.
        if (element.type === fieldTypes.text) {
            form = form + `<div class="field-wrapper"><label>${element.fieldName}</label>${element.required ? '<span class="required">*</span>' : ""}
            <input type="text">
            </div>`;
        }
        // Если это набор полей, то мы вызовем нашу функцию рекурсивно для вложенного набора полей.
        if (element.type === fieldTypes.fieldSet) {
            form = form + `<div class="fieldset">${getForm(element.fields)}</div>`;
        }
    });
    return form;
}
const res = getForm(formData);
console.log(res);

