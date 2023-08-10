// Прототип

// Листинг 1.
// Для начала создадим просто объект робота пылесоса без характеристик и с обобщенными методами. Это будет некий абстрактный робот-пылесос в вакууме:
// Объект робот-пылесос.
const VacuumCleaner = {
    model: "vacuum cleaner",
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner');
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    goCharge: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner');
        console.log('I am going to charge...');
    }
};

// Мы оставили в нем только служебные свойства и методы, при этом мы убрали даже свойства isUVLampOn - так как это свойство будет не во всех моделях пылесосов. Теперь мы хотели бы создать пылесос с конкретными характеристиками, но чтобы не создавать объект с нуля и прописывать все свойства мы можем взять базовую модель VacuumCleaner и наследоваться от неё, установив у нового объекта свойства прототипа __proto__ на родительский объект и добавив новые свойства - вот так:

// Листинг 2.
// Объявление родительского объекта смотри в листинге 1.
// Объект робот-пылесос.
const DancingSeries = {
    // Объявляем новые свойства и переопределить свойство model.
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,
    // Добавляем новый метод.
    switchUVLamp: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};

// Наш новый объект DancingSeries - это тоже некий общий объект для создания серии пылесосов с одинаковым функционалом, и разными характеристиками. Далее на основе него мы уже можем создать несколько конкретных моделей пылесосов, переписав в них характеристики. Давайте создадим робот Samba:

// Листинг 3.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект робот-пылесос.
const Samba = {
    // Обновляем свойства под конкретную модель.
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
};

// Наш первый родительский объект тоже имеет свойство __proto__, оно ссылается на объект Object, т.к. мы не указывали его. Давайте попробуем вызвать методы и свойства нашего нового объекта Samba:

// Листинг 4.
// Обращение к свойствам объекта.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Samba.isUVLampOn = true;
Samba.switchUVLamp();
// I am the method of DancingSeries
// 'UV lamp is not working.'
Samba.goCharge();
// I am the method of VacuumCleaner
// 'I am going to charge...'

// Если мы попытаемся в потомке переопределить свойство или метод из родительского объекта, то родительский объект остается нетронутым, а в дочерний запишется новое свойство или метод, и оно будет вызываться при обращении к нему, давайте создадим еще одного робота, и переопределим в нем метод startCleaning:

// Листинг 5.
// Объект робот-пылесос.
const Djaiv = {
    // Обновляем свойства под конкретную модель.
    model: "Djaiv-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Переопределим метод startCleaning.
    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of Djaiv');
        console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
};

// И попробуем вызвать методы пылесоса Samba и Djaiv, чтобы увидеть разницу:

// Листинг 6.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект Samba смотри в листинге 3.
// Объект Djaiv смотри в листинге 5.
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Djaiv.startCleaning();
// I am the method of Djaiv
// I am Djaiv, and I am cleaning... I have been started: 1 times.

// Устанавливать прототип объекта можно используя свойство __proto__, но также в языке есть два метода для чтения и установки прототипа объекта - это getPrototypeOf и setPrototypeOf. Эти методы не доступны в браузере Internet Explorer версии ниже 10.

// getPrototypeOf ПОЛУЧЕНИЕ
// Метод getPrototypeOf позволяет получить ссылку на объект прототип. Давайте узнаем какой объект является прототипом для нашего объекта Djaiv, потом посмотрим кто является его прототипом и кто является прототипом его прототипа:

// Листинг 9.
// Получим прототип для объекта Djaiv.
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series
const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); //vacuum cleaner
const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object]

// В последнем прототипе мы не стали смотреть свойство model, т.к. там его нет, мы добрались до самого высокого родителя, которым является объект Object, все объекты наследуются от него. Если мы попытаемся получить его прототип, то в ответ получим null, т.к. Объект Object не имеет прототипа.

// setPrototypeOf УСТАНОВКА
// Давайте создадим другую серию роботов - musicSeries, с немного другим функционалом (они будут уметь мыть полы), и установим её в качестве прототипа для нашего нового пылесоса Blues. Так как новая серия будет иметь дополнительный функционал, которого нет в серии DancingSeries, прежде чем вызвать такой функционал у определенного объекта, стоит проверить, кто его родитель. Для установки прототипа используем метод setPrototypeOf - он принимает два аргумента, первый это объект для которого устанавливается прототип, второй - это объект который будет прототипом для первого. Для начала создадим объект серии:

// Листинг 10.
// Объект робот-пылесос.
const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};

// Создадим нашего нового робота:

// Листинг 11.
// Объект робот-пылесос.
const Blues = {
    // Обновляем свойства под конкретную модель.
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};
// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries);

// Теперь можем попробовать вызвать методы наших роботов, проверяя кто является их прототипом:

// Листинг 12.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект Djaiv смотри в листинге 5.
// Объявление MusicSeries смотри в листинге 10.
// Объект Blues смотри в листинге 11.
if (Object.getPrototypeOf(Djaiv).model === 'dancing series') {
    Djaiv.startCleaning(); //
}
if (Object.getPrototypeOf(Blues).model === 'music series') {
    Blues.startWipe(); //
}
// Если мы не будем проверять прототип и просто вызовем метод чужого прототипа мы, естественно, получим ошибку.
Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function

// Конструктор объекта
// Конструктор объекта - функция, которая позволяет создавать экземпляры объектов, при этом позволяя произвести инициализацию объекта. Конструктор объекта вызывается не напрямую, а с помощью оператора new, который позволяет создать новый экземпляр объекта.
// Чтобы создать функцию конструктор для объекта, она должна называться с большой буквы(не обязательно, но это позволяет явно видеть что это конструктор для объекта), а внутри этой функции через this объявить свойства и методы для объекта. При этом мы можем передавать аргументы этой функции, которые можем использовать как первоначальные значения для свойств, или для создания сложной логики в методах, или даже определять какие методы и свойства получит объект в зависимости от аргументов.
// Давайте создадим функцию конструктор для роботов Samba:

// Листинг 13.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
    // Делаем ссылку на прототип от родителя.
    this.__proto__ = DancingSeries;
}
// Создадим экземпляр нового объекта.
const Samba1 = new Samba(1014778);
console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning());
// I am the method of VacuumCleaner
// I am cleaning... I have been started: 1 times.

// Вместо создания конкретного объекта, мы создали функцию, которая делает все то же самое, только записывает свойства и методы через this. А чтобы создать непосредственно сам объект, нам нужно вызвать эту функцию через оператор new.

// Листинг 14.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге 13.
// Создадим 10 роботов пылесосов Samba, как на конвейере.
const robots = [];
for (let index = 0; index < 10; index++) {
    // Создадим экземпляр нового объекта и добавляем его в массив наших роботов, каждый с уникальным серийным номером.
    robots.push(new Samba(index));
}
console.log(robots[3].serialNumber); // 3
console.log(robots[7].serialNumber); // 7

// Далее мы можем взаимодействовать с нашим массивом роботов как нам удобно, обрабатывать его в циклах, обращаться к каждому роботу по отдельности, и нам понадобилось всего четыре строчки кода чтобы создать такое количество роботов.

// Затронем еще момент об установке прототипа для объектов создаваемых конструктором. Мы можем указывать this.__proto__ для установки прототипа, а можем указать наш прототип в prototype свойстве самого конструктора вот так:

// Листинг 15.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}
// Делаем ссылку на прототип от родителя.
Samba.prototype = DancingSeries;
// Создадим экземпляр нового объекта.
const Samba2 = new Samba(1014778);
console.log(Samba2.serialNumber); // 1014778
console.log(Samba2.startCleaning());
// I am the method of VacuumCleaner
// I am cleaning... I have been started: 1 times.

// Оператор new
// Оператор new позволяет создавать новые объекты, используя для этого функцию-конструктор. Работает он следующим образом:
// 1. Создает пустой объект, который наполнит всем необходимым.
// 2. Устанавливает этот объект как this для функции конструктора, чтобы можно было использовать this внутри функции и добавлять свойства и методы в этот объект.
// 3. Вызывает функцию конструктор для инициализации объекта.
// 4. Если у функции конструктора есть свойство prototype, устанавливает значение этого свойства как прототип для нового объекта (свойство __proto__).
// 5. Устанавливает свойство constructor объекта ссылкой на функцию конструктор.
// 6. Если функция конструктор не возвращает ничего или возвращает какое-то примитивное значение, то оператор new вернет новый созданный и наполненный объект, если конструктор возвращает объект, то оператор new вернет этот объект.

// Не так сложно, давайте попробуем создать свою версию оператора new в виде функции:

// Листинг 16.
// Наша реализация оператора new через функцию createObject.
function createObject(constructor) {
    // Создаем новый объект.
    const obj = {};
    // Установим новому объекту прототипом прототип функции - конструктора
    Object.setPrototypeOf(obj, constructor.prototype);
    // Вызовем функцию-конструктор, передав ей как this созданный на шаге 1 объект, и передадим остальные аргументы, если они были переданы в createObject
    const argsArray = Array.prototype.slice.apply(arguments);
    const result = constructor.apply(obj, argsArray.slice(1));
    // Вернем новый объект, если конструктор вернул примитивное значение или undefined, иначе вернем то, что вернул     конструктор.
    if (!result || typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') {
        return obj;
    } else {
        return result;
    }
}
// Создадим экземпляр нового объекта.
const Samba3 = createObject(Samba, 1014778);
// Проверим установку свойств в конструкторе.
console.log(Samba3.serialNumber); // 1014778
// Проверим, что прототип установился корректно, и мы можем вызывать методы из родительских объектов.
console.log(Samba3.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(Samba3.startCleaning());
// I am the method of VacuumCleaner
// I am cleaning... I have been started: 1 times.
// Проверим присвоение конструктора.
console.log(Samba3.constructor); // function Object() { [native code] }

// ❗ Свойство __proto__ объекта и свойство prototype у функции конструктора это не одно и то же. Свойство __proto__ есть у экземпляра объекта, и оно позволяет находить родителей объекта, свойство prototype выполняет служебную функцию при создании экземпляра объекта через оператор new.

// Посмотрите на пример кода, который расставит точки на «i».

// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}
// Делаем ссылку на прототип от родителя.
Samba.prototype = DancingSeries;
// Создадим экземпляр нового объекта.
const Samba4 = new Samba(1014778);
// Посмотрим на свойства __proto__ и prototype
console.log(Samba4.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(Samba4.prototype); // undefined
console.log(Samba4.__proto__ === Samba.prototype); // true

// ❗ В экземпляра объекта нет свойства prototype, данные из него перешли в свойство __proto__.

// Object.create
// Метод Object.create позволяет создавать новые объекты, принимая в качестве аргументов объект прототип для создаваемого объекта, и вторым аргументом (необязательным) свойства для нового объекта в формате объект с ключами и значениями дескрипторов для свойств. Использовать этот метод для создания новых объектов по типу наших роботов-пылесосов не очень удобно, нужно будет либо все свойства нового объекта указывать дескрипторами, что не очень удобно (но гибко), либо создавать с помощью метода объект с указанием прототипа, а все остальные свойства добавлять позже, но есть важная особенность у этого метода, которую можно использовать - в качестве первого аргумента можно передать null и тогда будет создан объект без прототипа. Давайте посмотрим на примере, зачем нам это нужно:

// Листинг 17.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге 13.
// Создадим робот пылесосSamba.
const Samba5 = new Samba(101);
// Попробуем обратиться к стандартному методу toString, хоть мы его и не объявляли ни в одном из объектов.
console.log(Samba5.toString()); // [object Object]

// Хоть мы и не объявляли метод toString в нашей цепочки объектов, но он присутствует и идёт от самого первого объекта (базового), т.к. его прототип - это сам объект Object, и метод toString пришел от него. Иногда бывает так, что нам совсем не нужны чужие методы, и не нужен прототип в объекте, потому что обращение к свойствам объекта определяются тем, что напишет пользователь, и пользователь может запросить свойство toString, которое мы не хотели бы показывать, и вот тут как раз можно использовать метод Object.create:

// Листинг 18.
// Создадим пустой объект без прототипа.
const Samba6 = Object.create(null);
// Попробуем обратиться к стандартному методу toString и посмотреть на свойство __proto__
console.log(Samba6.toString); // undefined
console.log(Samba6.__proto__); // undefined

// Таким образом мы получили чистый объект, без прототипа, а следовательно и без свойств из него.


