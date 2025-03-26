const tg = window.Telegram.WebApp;
tg.ready();

// Показываем имя пользователя
const user = tg.initDataUnsafe.user;
document.getElementById("user-name").innerText = `Привет, ${user.first_name}!`;

// Список товаров
const products = [
    { id: 1, name: "Витамин C", price: 500, description: "Для иммунитета" },
    { id: 2, name: "Омега-3", price: 900, description: "Для сердца" },
    { id: 3, name: "Витамин D", price: 700, description: "Для костей" }
];

// Корзина (пока пустая)
let cart = [];

// Настраиваем главную кнопку
tg.MainButton.setText("Перейти в корзину");
tg.MainButton.hide(); // Скрываем, пока корзина пуста
tg.MainButton.onClick(() => showCart());

// Функции для кнопок
function showCatalog() {
    let content = "<h2>Каталог</h2>";
    products.forEach(product => {
        content += `
            <div class="product">
                <p><strong>${product.name}</strong> — ${product.price} руб.</p>
                <p>${product.description}</p>
                <button onclick="addToCart(${product.id})">В корзину</button>
            </div>
        `;
    });
    document.getElementById("content").innerHTML = content;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} добавлен в корзину!`);
    tg.MainButton.show(); // Показываем кнопку корзины
}

function showCart() {
    if (cart.length === 0) {
        document.getElementById("content").innerHTML = "<p>Ваша корзина пуста.</p>";
        tg.MainButton.hide();
    } else {
        let content = "<h2>Корзина</h2>";
        let total = 0;
        cart.forEach(item => {
            content += `<p>${item.name} — ${item.price} руб.</p>`;
            total += item.price;
        });
        content += `<p><strong>Итого:</strong> ${total} руб.</p>`;
        document.getElementById("content").innerHTML = content;
        tg.MainButton.setText("Оформить заказ");
        tg.MainButton.show();
    }
}

function showProfile() {
    document.getElementById("content").innerHTML = "<p>Ваш профиль: история заказов скоро появится.</p>";
}

// Показываем каталог при загрузке
showCatalog();
