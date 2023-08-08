// Задание 1: "Управление библиотекой книг"
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title(название) - строка, название книги.
// Свойство author(автор) - строка, имя автора книги.
// Свойство pages(количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге(название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Информация о книге: название - ${this.title}, автор - ${this.author}, количество страниц - ${this.pages}.`);
    }
}
const newBook1 = new Book('Золотой теленок', 'И.Ильф, Е.Петров', 382);
const newBook2 = new Book('Повести и рассказы', 'А.П. Чехов', 445);
newBook1.displayInfo();
newBook2.displayInfo();

// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name(имя) - строка, имя студента.
// Свойство age(возраст) - число, возраст студента.
// Свойство grade(класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// Пример использования класса

// const student1 = new Student("John Smith", 16, "10th grade");
// student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

// const student2 = new Student("Jane Doe", 17, "11th grade");
// student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

const student1 = new Student('John Smith', 16, '10th grade');
student1.displayInfo();
const student2 = new Student('Jane Doe', 17, '11th grade');
student2.displayInfo();
const student3 = new Student('Rustam Ibragimov', 55, '21th grade');
student3.displayInfo();

// Задача необязательная для выполнения:
// Это расширенная версия задачи с банком, которую мы решали на семинаре:
// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов.Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.
// Пример работы:
// const bank = new Bank("Мой Банк");
// const client1 = new Client("Иван", 25);
// const client2 = new Client("Мария", 30);
// bank.addClient(client1);
// bank.addClient(client2);
// bank.openAccount(client1, 1000);
// bank.openAccount(client2, 500);
// bank.deposit(123456789, 200);
// bank.withdraw(987654321, 100);
// bank.checkBalance(123456789);
// bank.checkBalance(987654321);

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.listClients = [];
        this.listAccounts = [];
    }

    // Методы класса

    // 1. Метод для добавления нового клиента
    addClient = (client) => {
        if (this.listClients.some(client => client === this.listClients)) {
            console.log(`Such a client ${client.clientName}, ${client.clientAge} added already exists`);
        } else {
            this.listClients.push(client);
            console.log(`Added a new client ${client.clientName}, ${client.clientAge}`);
        }
    }

    // 2. Метод для открытия нового счета для клиента
    openAccount = (client, accountNumber, amount) => {
        for (let i = 0; i < this.listClients.length; i++) {
            if (client === this.listClients[i]) {
                const account = { [accountNumber]: amount };
                this.listAccounts.push(account);
                console.log(`A new account ${accountNumber} has been opened for the client ${client.clientName}, ${client.clientAge}, the amount on the account ${amount}`);
            }
        }
    }

    // 3. Метод для пополнения счета
    deposit = (accountNumber, amount) => {
        for (let i = 0; i < this.listAccounts.length; i++) {
            if (Object.keys(this.listAccounts[i]) == accountNumber) {
                this.listAccounts[i][accountNumber] += amount;
                console.log(`Account ${accountNumber} topped up to the amount of ${amount}, current balance ${this.listAccounts[i][accountNumber]}`);
            }
        }
    }

    // 4. Метод для снятия денег со счета
    withdraw = (accountNumber, amount) => {
        for (let i = 0; i < this.listAccounts.length; i++) {
            if (Object.keys(this.listAccounts[i]) == accountNumber) {
                if (this.listAccounts[i][accountNumber] >= amount) {
                    this.listAccounts[i][accountNumber] -= amount;
                    console.log(`From the account ${accountNumber} withdrawn ${amount}, current balance ${this.listAccounts[i][accountNumber]}`);
                } else {
                    console.log(`There are not enough funds in the account ${accountNumber}`);
                }
            }
        }
    }

    // 5. Метод для проверки баланса
    checkBalance = (accountNumber) => {
        for (let i = 0; i < this.listAccounts.length; i++) {
            if (Object.keys(this.listAccounts[i]) == accountNumber) {
                console.log(`Account ${Object.keys(this.listAccounts[i])} balance ${Object.values(this.listAccounts[i])} `);
            }
        }
    }
}

class Client {
    constructor(clientName, clientAge) {
        this.clientName = clientName;
        this.clientAge = clientAge;
    }
}

const bank = new Bank('Мой Банк');

const client1 = new Client('Иван', 25);
const client2 = new Client('Мария', 30);
const client3 = new Client('Рустам', 55);

bank.addClient(client1);
bank.addClient(client2);
bank.addClient(client3);

bank.openAccount(client1, 111111111, 0);
bank.openAccount(client1, 222222222, 100);
bank.openAccount(client2, 333333333, 200);
bank.openAccount(client2, 444444444, 300);
bank.openAccount(client3, 555555555, 400);
bank.openAccount(client3, 666666666, 500);

bank.checkBalance(111111111);
bank.checkBalance(222222222);
bank.checkBalance(333333333);
bank.checkBalance(444444444);
bank.checkBalance(555555555);
bank.checkBalance(666666666);

bank.deposit(111111111, 100);
bank.deposit(222222222, 200);
bank.deposit(333333333, 300);
bank.deposit(444444444, 400);
bank.deposit(555555555, 500);
bank.deposit(666666666, 600);

bank.withdraw(111111111, 100);
bank.withdraw(222222222, 100);
bank.withdraw(333333333, 1500);
bank.withdraw(666666666, 100);

bank.checkBalance(111111111);
bank.checkBalance(222222222);
bank.checkBalance(333333333);
bank.checkBalance(444444444);
bank.checkBalance(555555555);
bank.checkBalance(666666666);
