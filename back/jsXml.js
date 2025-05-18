document.addEventListener("DOMContentLoaded", function () {
    fetch("products.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const items = xmlDoc.getElementsByTagName("item");

            const catalogContainer = document.getElementById("catalog");
            const cartItemsContainer = document.getElementById("cart-items");

            function addToCart(name, price) {
                const li = document.createElement("li");
                li.textContent = `${name} - ${price}р.`;
                li.classList.add("basket");

                const removeButton = document.createElement("button");
                removeButton.textContent = "Удалить";
                removeButton.classList.add("button", "button--zakaz1"); // Добавлен класс
                removeButton.addEventListener("click", () => li.remove());

                li.appendChild(removeButton);
                cartItemsContainer.appendChild(li);
            }

            Array.from(items).forEach(item => {
                const name = item.getElementsByTagName("name")[0].textContent;
                const price = item.getElementsByTagName("price")[0].textContent;
                const imageSrc = item.getElementsByTagName("img")[0].textContent;

                const card = document.createElement("div"); 
                card.classList.add("catalog__card");

                const img = document.createElement("img");
                img.src = imageSrc;
                img.alt = name;

                const title = document.createElement("h2");
                title.textContent = name;
                const priceTag = document.createElement("h2");
                priceTag.textContent = `${price}р.`;

                const button = document.createElement("button");
                button.textContent = "Заказать";
                button.classList.add("button", "button--zakaz");
                button.addEventListener("click", () => addToCart(name, price));

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(priceTag);
                card.appendChild(button);
                catalogContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Ошибка загрузки XML: ", error));
});
