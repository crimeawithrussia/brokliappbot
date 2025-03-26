const tg = window.Telegram.WebApp;
tg.ready();

// Показываем имя пользователя
const user = tg.initDataUnsafe.user;
document.getElementById("user-name").innerText = `Привет, ${user.first_name}!`;

// Настраиваем главную кнопку
tg.MainButton.setText("Открыть магазин");
tg.MainButton.show();
tg.MainButton.onClick(() => {
    document.getElementById("content").innerHTML = "<p>Выберите раздел:</p>";
});

// Функции для кнопок
function showCatalog() {
    document.getElementById("content").innerHTML = "<p>Здесь будет каталог товаров.</p>";
}

function showCart() {
    document.getElementById("content").innerHTML = "<p>Ваша корзина пока пуста.</p>";
}

function showProfile() {
    document.getElementById("content").innerHTML = "<p>Ваш профиль: история заказов скоро появится.</p>";
}
