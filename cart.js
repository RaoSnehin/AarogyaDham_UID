let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PARACETEMOL',
        image: 'tinywow_gettyimages-157402355-612x612_56302225.jpg',
        price: 10
    },
    {
        id: 2,
        name: 'Cetrizine',
        image: 'tinywow_Cetirizine-Tablet_56307633.jpg',
        price: 40
    },
    {
        id: 3,
        name: 'Ibu Profin',
        image: 'gettyimages-ibuprofin.jpg',
        price: 50
    },
    {
        id: 4,
        name: 'Aceclofenac',
        image: 'tinywow_aceclofenac_new_56319295.jpg',
        price: 20
    },
    {
        id: 5,
        name: 'Digene',
        image: 'tinywow_digene_new_56319717.jpg',
        price: 30
    },
    {
        id: 6,
        name: 'Zandu',
        image: 'tinywow_zandu_new_56320090.jpg',
        price: 20
    },
    {
        id: 7,
        name: 'Pain Killer',
        image: 'tinywow_pain_new_56320480.jpg',
        price: 60
    },
    {
        id: 8,
        name: 'Insulin',
        image: 'insulin.jpeg',
        price: 120000
    },
    {
        id: 9,
        name: 'Epuphrin',
        image: 'epophrin.png',
        price: 220
    },
    {
        id: 10,
        name: 'Hepaprin',
        image: 'hepaprin.jpeg',
        price: 200
    },
    {
        id: 11,
        name: 'Penicilin',
        image: 'penicilin.jpeg',
        price: 150
    },
    {
        id: 12,
        name: 'Morphine',
        image: 'morphine.png',
        price: 1500
    },
    {
        id: 13,
        name: 'Polio Vaccine',
        image: 'polio.png',
        price: 275
    },
    {
        id: 14,
        name: 'DTAP',
        image: 'DTAP.png',
        price: 120
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}