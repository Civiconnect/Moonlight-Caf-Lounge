// fetch the watch data from our server
const response = await fetch("/Moonlight-Cafe-Lounge/Menu.json");
const Menu = await response.json();

console.log(Menu); 
console.log(response);
console.log("hello world");

// get the product-cards-grid element
const grid = document.querySelector('.productCardGrid');

// get the product-card template, remove it from the grid.
const cardTemplate = document.querySelector(".productCard");
grid.removeChild(cardTemplate);

// loop through the data and create a card for each item
for  (let i = 0; i < Menu.length; i++) {
    // clone the template
    const card = cardTemplate.cloneNode(true);
    // set the data
    card.querySelector(".productCard-Foodtype").textContent = Menu[i].Foodtype;
    card.querySelector(".productCard-details").textContent = Menu[i].details;
    card.querySelector(".productCard-image").src = Menu[i].image;
    // add the card to the grid
    grid.appendChild(card);
}