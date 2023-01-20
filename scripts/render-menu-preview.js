// fetch the watch data from our server
const response = await fetch("/Moonlight-Cafe-Lounge/Menu.json");
let Menu = await response.json();
Menu = Menu.slice(0, 3);

// get the product-cards-grid element
const grid = document.querySelector('.productCardGrid');

// get the product-card template, remove it from the grid.
const cardTemplate = document.querySelector(".productCard");
grid.removeChild(cardTemplate);

for (let i = 0; i < Menu.length; i++) {
    // clone the template
    const card = cardTemplate.cloneNode(true);
    // set the data
    card.querySelector(".productCard-Foodtype").textContent = Menu[i].Foodtype;
    card.querySelector(".productCard-details").textContent = Menu[i].details;
    card.querySelector(".productCard-image").src = Menu[i].image;
    // add the card to the grid
    grid.appendChild(card);
}