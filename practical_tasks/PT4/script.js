// Задача 1 Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

localStorage.clear();

const usersURL = 'https://jsonplaceholder.typicode.com/users';
const div1 = document.querySelector('.wrapper');

const getAsyncAwaitData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

try {
    const users = await getAsyncAwaitData(usersURL);
    users.forEach((user) => {
        localStorage.setItem(user.id, JSON.stringify(user));
        div1.insertAdjacentHTML(
            'beforeend',
            `<div class="user">
            <figcaption>
            id: ${user.id}<br>
            name: ${user.name}<br>
            username: ${user.username}<br>
            email: ${user.email}<br>
            phone: ${user.phone}<br>
            website: ${user.website}
            </figcaption>
            <button id="button_id">Удалить пользователя</button>
            </div>`
        );
    });
    const btns = document.querySelectorAll('button');
    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            localStorage.removeItem(index + 1);
            btn.parentNode.remove();
        });
    });
} catch (error) {
    console.error('Не беспокойтесь. Мы уже работаем над проблемой. Подождите несколько минут или перезагрузите страницу');
}

// Задача 2 Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const dogsURL = 'https://dog.ceo/api/breeds/image/random';
const div2 = document.querySelector('.dogs');

setInterval(async () => {
    const newDog = await getAsyncAwaitData(dogsURL);
    div2.innerHTML = `<img src='${newDog.message}' alt='dog photo'>`;
}, 3000);
