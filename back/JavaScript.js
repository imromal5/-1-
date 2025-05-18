document.getElementById("deliveryMethod").addEventListener("change", function () {
    const message = document.getElementById("deliveryMessage");
    const addressContainer = document.getElementById("addressContainer");

    if (!message || !addressContainer) return; // Проверяем, что элементы существуют

    switch (this.value) {
        case "courier":
            message.textContent = "Ваш заказ будет доставлен через 2-3 дня.";
            addressContainer.style.display = "block";
            break;
        case "pickup":
            message.textContent = "Вы сможете забрать заказ в пункте выдачи.";
            addressContainer.style.display = "none";
            break;
        case "mail":
            message.textContent = "Ваш заказ будет отправлен по почте, доставка займет 5-7 дней.";
            addressContainer.style.display = "block";
            break;
        default:
            message.textContent = "Выберите способ доставки.";
            addressContainer.style.display = "none";
            break;
    }
});

document.querySelector(".order__button").addEventListener("click", function() {
    window.location.href = "index.html";
});


//////////////////////////////////
    const burger = document.querySelector('.burger');
    const burgerMenuPopup = document.querySelector('.burger-menu-popup');

    burger.addEventListener('click', () => {
        burgerMenuPopup.classList.toggle('open');
    });

    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.burger-menu__list a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenuPopup.classList.remove('open');
        });
    });


////////////////////////////////////////////////
