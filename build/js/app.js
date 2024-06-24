const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuPopup = document.querySelector("#mobile-menu-popup");
const cartPopup = document.querySelector("#cart-popup");
const cartBtn = document.querySelector("#cart-btn");
const cartContainer = document.querySelector("#cart-container");
const closeCartBtn = document.querySelector('#close-cart-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const groceriesContainer = document.querySelector("#groceries-container");
const groceriesSort = document.querySelector("#groceries-sort");
const fruitsContainer = document.querySelector("#fruits-container");
const fruitsSort = document.querySelector("#fruits-sort");
const juicesContainer = document.querySelector("#juices-container");
const juicesSort = document.querySelector("#juices-sort");
const shoppingList = document.querySelector("#shopping-list");
const totalBill = document.querySelector("#total-bill");
const totalBillPopup = document.querySelector("#total-bill-popup");
const finalTotalBill = document.querySelector("#final-total-bill");
const shippingMethod1 = document.querySelector("#f1");
const shippingMethod2 = document.querySelector("#f2");
const searchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-btn");
cartBtn.addEventListener("click", () => {
    cartPopup.classList.toggle("hidden");
})
closeCartBtn.addEventListener("click", () => {
    cartPopup.classList.toggle("hidden");
})
mobileMenu.addEventListener("click", () => {
    mobileMenuPopup.classList.toggle("hidden");
})
closeMenuBtn.addEventListener("click", () => {
    mobileMenuPopup.classList.toggle("hidden");
})
const fruits = [
    {
        name: "Cà rốt",
        img: "/build/img/carrot.png",
        prices: { '500g': 20000, '1kg': 38000, '5kg': 180000 },
        type: 'fruit'
    },
    {
        name: "Cà chua",
        img: "/build/img/tomato.png",
        prices: { '500g': 17000, '1kg': 32000, '5kg': 150000 },
        type: 'fruit'
    },
    {
        name: "Xà lách",
        img: "/build/img/salad.png",
        prices: { '500g': 50000, '1kg': 95000, '5kg': 450000 },
        type: 'fruit'
    },
    {
        name: "Mướp đắng",
        img: "/build/img/bittermelon.png",
        prices: { '500g': 20000, '1kg': 38000, '5kg': 180000 },
        type: 'fruit'
    },
    {
        name: "Khoai tây",
        img: "/build/img/potato.png",
        prices: { '500g': 25000, '1kg': 48000, '5kg': 230000 },
        type: 'fruit'
    },
    {
        name: "Khoai lang",
        img: "/build/img/sweetpotato.png",
        prices: { '500g': 27000, '1kg': 52000, '5kg': 250000 },
        type: 'fruit'
    },
    {
        name: "Dưa hấu",
        img: "/build/img/watermelon.png",
        prices: { '500g': 12000, '1kg': 22000, '5kg': 100000 },
        type: 'fruit'
    },
    {
        name: "Cam Vinh",
        img: "/build/img/orange.png",
        prices: { '500g': 10000, '1kg': 18000, '5kg': 85000 },
        type: 'fruit'
    }
];

const juices = [
    {
        name: "Nước ép cà chua",
        img: "/build/img/tomatojuice.png",
        prices: { S: 17000, M: 19000, L: 21000 },
        type: 'juice'
    },
    {
        name: "Nước ép dưa hấu",
        img: "/build/img/watermelonjuice.png",
        prices: { S: 20000, M: 22000, L: 24000 },
        type: 'juice'
    },
    {
        name: "Nước ép cà rốt",
        img: "/build/img/carrotjuice.png",
        prices: { S: 12000, M: 14000, L: 16000 },
        type: 'juice'
    },
    {
        name: "Nước cam",
        img: "/build/img/orangejuice.png",
        prices: { S: 15000, M: 17000, L: 19000 },
        type: 'juice'
    },
    {
        name: "Nước ép ổi",
        img: "/build/img/guavajuice.png",
        prices: { S: 18000, M: 20000, L: 22000 },
        type: 'juice'
    },
    {
        name: "Nước ép dứa",
        img: "/build/img/pineapplejuice.png",
        prices: { S: 12000, M: 14000, L: 16000 },
        type: 'juice'
    },
    {
        name: "Nước ép lựu",
        img: "/build/img/pomegranatejuice.png",
        prices: { S: 20000, M: 22000, L: 24000 },
        type: 'juice'
    },
    {
        name: "Nước ép táo",
        img: "/build/img/applejuice.png",
        prices: { S: 24000, M: 26000, L: 28000 },
        type: 'juice'
    },
    {
        name: "Nước ép nho",
        img: "/build/img/grapejuice.png",
        prices: { S: 30000, M: 32000, L: 34000 },
        type: 'juice'
    }
];

const groceries = fruits.concat(juices);

let tempShoppingCart = localStorage.getItem("shoppingCart") ? JSON.parse(localStorage.getItem("shoppingCart")) : [];
console.log(tempShoppingCart);
let s = ``;
if (groceriesSort !== null) {
    groceriesSort.addEventListener("change", () => {
        if (groceriesSort.value == "sort1") {
            groceries.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
        if (groceriesSort.value == "sort2") {
            groceries.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            });
        }
        if (groceriesSort.value == "sort3") {
            groceries.sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (groceriesSort.value == "sort4") {
            groceries.sort((a, b) => {
                return b.price - a.price;
            });
        }
        displayGroceries();
    })
}
function displayGroceries() {
    let s = '';
    groceries.forEach(item => {
        if (item.name.toLowerCase().indexOf(searchBar.value.toLowerCase()) !== -1) {
            let sizeButtons = '';
            if (item.type === 'juice') {
                sizeButtons = `
                    <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', 'S')">S</button>
                    <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', 'M')">M</button>
                    <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', 'L')">L</button>`;
            } else if (item.type === 'fruit') {
                sizeButtons = `
                    <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', '500g')">500g</button>
                    <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', '1kg')">1kg</button>
                    <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', '5kg')">5kg</button>`;
            }

            s += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div class="bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="group relative overflow-hidden">
                        <img class="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="${item.img}">
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button onclick="addToCart(event, groceries)" class="text-white bg-green-500 hover:bg-green-600 p-2 rounded-full">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-4">
                        <a href="">
                            <div class="text-lg font-semibold">${item.name}</div>
                        </a>
                        <div class="text-gray-600">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</div>
                        <div class="text-yellow-400">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="font-semibold" id="${item.name}-price">${item.prices.S || item.prices['500g']} VND</div>
                        <div class="mt-2 flex space-x-2">
                            ${sizeButtons}
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });

    if (groceriesContainer !== null) groceriesContainer.innerHTML = s;
}

function updatePrice(name, size) {
    const item = groceries.find(item => item.name === name);
    if (item) {
        document.getElementById(`${name}-price`).innerText = item.prices[size] + " VND";
    }
}

displayGroceries();


if (fruitsSort !== null) {
    fruitsSort.addEventListener("change", () => {
        if (fruitsSort.value == "sort1") {
            fruits.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
        if (fruitsSort.value == "sort2") {
            fruits.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            });
        }
        if (fruitsSort.value == "sort3") {
            fruits.sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (fruitsSort.value == "sort4") {
            fruits.sort((a, b) => {
                return b.price - a.price;
            });
        }
        displayFruits();
    })
}
if (juicesSort !== null) {
    juicesSort.addEventListener("change", () => {
        if (juicesSort.value == "sort1") {
            juices.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
        if (juicesSort.value == "sort2") {
            juices.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            });
        }
        if (juicesSort.value == "sort3") {
            juices.sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (juicesSort.value == "sort4") {
            juices.sort((a, b) => {
                return b.price - a.price;
            });
        }
        displayJuices();
    })
}
function displayFruits() {
    s = '';
    fruits.forEach(item => {
        if (item.name.toLowerCase().indexOf(searchBar.value.toLowerCase()) !== -1) {
            let sizeButtons = `
                <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', '500g')">500g</button>
                <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', '1kg')">1kg</button>
                <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', '5kg')">5kg</button>`;

            s += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div class="bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="group relative overflow-hidden">
                        <img class="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="${item.img}">
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button onclick="addToCart(event, fruits)" class="text-white bg-green-500 hover:bg-green-600 p-2 rounded-full">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-4">
                        <a href="">
                            <div class="text-lg font-semibold">${item.name}</div>
                        </a>
                        <div class="text-gray-600">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</div>
                        <div class="text-yellow-400">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="font-semibold" id="${item.name}-price">${item.prices['500g']} VND</div>
                        <div class="mt-2 flex space-x-2">
                            ${sizeButtons}
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });
    if (fruitsSort !== null) fruitsContainer.innerHTML = s;
}
function updatePrice(name, size) {
    const item = groceries.find(item => item.name === name);
    if (item) {
        document.getElementById(`${name}-price`).innerText = item.prices[size] + " VND";
    }
}
displayFruits();

searchBtn.addEventListener("click", () => {
    displayGroceries();
    displayFruits();
    displayJuices();
})
function addToCart(event, arr) {
    let itemNameElement = event.currentTarget.closest(".group").nextElementSibling.querySelector("div.text-lg.font-semibold");
    if (!itemNameElement) {
        console.error("Item name element not found");
        return;
    }

    let itemName = itemNameElement.textContent;

    let item = arr.find(item => item.name === itemName);
    if (!item) {
        console.error("Item not found in array");
        return;
    }

    let priceElement = document.getElementById(`${item.name}-price`);
    let currentPrice = parseInt(priceElement.innerText.replace(" VND", ""));

    let selectedSize;
    if (item.type === 'juice') {
        selectedSize = Object.keys(item.prices).find(size => item.prices[size] === currentPrice);
    } else if (item.type === 'fruit') {
        selectedSize = Object.keys(item.prices).find(size => item.prices[size] === currentPrice);
    }

    if (!selectedSize) {
        console.error("Selected size not found");
        return;
    }

    let index = tempShoppingCart.findIndex(cartItem => cartItem.name === itemName && cartItem.size === selectedSize);

    if (index === -1) {
        let newItem = { name: item.name, img: item.img, price: currentPrice, quantity: 1, size: selectedSize };
        tempShoppingCart.push(newItem);
    } else {
        tempShoppingCart[index].quantity += 1;
    }

    displayInCart();
    calculateTotalBill();
    localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
}

function displayJuices() {
    let s = '';
    juices.forEach(item => {
        if (item.name.toLowerCase().indexOf(searchBar.value.toLowerCase()) !== -1) {
            let sizeButtons = `
                <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', 'S')">S</button>
                <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', 'M')">M</button>
                <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onclick="updatePrice('${item.name}', 'L')">L</button>`;

            s += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div class="bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="group relative overflow-hidden">
                        <img class="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="${item.img}">
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button onclick="addToCart(event, juices)" class="text-white bg-green-500 hover:bg-green-600 p-2 rounded-full">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-4">
                        <a href="">
                            <div class="text-lg font-semibold">${item.name}</div>
                        </a>
                        <div class="text-gray-600">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</div>
                        <div class="text-yellow-400">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="font-semibold" id="${item.name}-price">${item.prices.S} VND</div>
                        <div class="mt-2 flex space-x-2">
                            ${sizeButtons}
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });
    if (juicesContainer !== null) juicesContainer.innerHTML = s;
}
function updatePrice(name, size) {
    const item = groceries.find(item => item.name === name);
    if (item) {
        document.getElementById(`${name}-price`).innerText = item.prices[size] + " VND";
    }
}
displayJuices();
function addToCart(event, arr) {
    let itemNameElement = event.currentTarget.closest(".group").nextElementSibling.querySelector("div.text-lg.font-semibold");
    if (!itemNameElement) {
        console.error("Item name element not found");
        return;
    }

    let itemName = itemNameElement.textContent;

    let item = arr.find(item => item.name === itemName);
    if (!item) {
        console.error("Item not found in array");
        return;
    }

    let priceElement = document.getElementById(`${item.name}-price`);
    let currentPrice = parseInt(priceElement.innerText.replace(" VND", ""));

    let selectedSize;
    if (item.type === 'juice') {
        selectedSize = Object.keys(item.prices).find(size => item.prices[size] === currentPrice);
    } else if (item.type === 'fruit') {
        selectedSize = Object.keys(item.prices).find(size => item.prices[size] === currentPrice);
    }

    if (!selectedSize) {
        console.error("Selected size not found");
        return;
    }

    let index = tempShoppingCart.findIndex(cartItem => cartItem.name === itemName && cartItem.size === selectedSize);

    if (index === -1) {
        let newItem = { name: item.name, img: item.img, price: currentPrice, quantity: 1, size: selectedSize };
        tempShoppingCart.push(newItem);
    } else {
        tempShoppingCart[index].quantity += 1;
    }

    displayInCart();
    calculateTotalBill();
    localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
}

function displayInCart() {
    let s = '';
    tempShoppingCart.forEach(item => {
        s += 
    `<div class="flex flex-col md:flex-row justify-between gap-4 p-4 border-b">
        <div class="flex flex-col sm:flex-row gap-4 items-center">
            <img src="${item.img}" class="w-20 h-20">
            <div class="text-center sm:text-left">
                <div class="text-xl font-semibold">${item.name}</div>
                <div class="text-lg">Giá: ${item.price} VND</div>
            </div>
        </div>
        <div class="flex items-center gap-2 mt-4 sm:mt-0">
            <button class="bg-slate-200 p-2" onclick="removeOneQuantity(event)">-</button>
            <input type="text" value="${item.quantity}" class="w-10 h-10 text-center">
            <button class="bg-slate-200 p-2" onclick="addOneQuantity(event)">+</button>
            <button class="ml-6 bg-red-200 p-2" onclick="removeItemFromCart(event)">x</button>
        </div>
    </div>`;
    });
    shoppingList.innerHTML = s;
}
function displayInFinalCart() {
    if (cartContainer !== null) {
        let s = 
        `<div class="hidden md:flex flex-row text-center justify-between gap-4 p-4">
            <div class="w-2/5">Sản phẩm</div>
            <div class="w-1/3 pr-2 sm:pr-8 md:pr-14">Số lượng</div>
            <div>Giá thành</div>
        </div>`;
        tempShoppingCart.forEach(item => {
            s = s + 
            `<div class="flex flex-row justify-between gap-4 p-4 items-center">
                <div class="flex flex-col sm:flex-row gap-4 items-center w-2/5 ">
                    <div class="flex flex-col items-center gap-2">
                        <img src="${item.img}" class="w-20 h-20">
                        <button class="bg-red-200 px-2 py-1 hidden md:block flex-grow-0" onclick="removeItemFromCart(event)">x</button>
                    </div>
                    
                    <div class="text-center sm:text-left">
                        <div class="text-lg sm:text-2xl">${item.name}</div>
                        <div class="text-lg sm:hidden">Giá: <span class="text-green-600">${item.price} VND</span></div>
                    </div>
                </div>
                <div class="flex items-center gap-2 mt-4 sm:mt-0 w-1/3 justify-center">
                    <button class="bg-slate-200 p-1 md:p-2" onclick="removeOneQuantity(event)">-</button>
                    <input type="text" value="${item.quantity}" class="w-10 h-10 md:w-6 md:h-6 text-center">
                    <button class="bg-slate-200 p-1 md:p-2" onclick="addOneQuantity(event)">+</button>
                </div>
                <div class="hidden md:block">
                    <div class="text-xl">${item.price} <span class="hidden sm:inline-block">VND</span></div>
                </div>
                <div class="md:hidden">
                    <button class="bg-red-200 px-2 py-1 flex-grow-0" onclick="removeItemFromCart(event)">x</button>
                </div>
            </div>`;
        });
        cartContainer.innerHTML = s;
    }
}
displayInFinalCart();
if (shippingMethod1 !== null && shippingMethod2 !== null) {
    shippingMethod1.addEventListener("click", () => {
        if (shippingMethod1.checked) {
            document.querySelector("#f1-infos").classList.toggle("hidden");
            document.querySelector("#f2-infos").classList.toggle("hidden");
        }
    });
    shippingMethod2.addEventListener("click", () => {
        if (shippingMethod2.checked) {
            document.querySelector("#f1-infos").classList.toggle("hidden");
            document.querySelector("#f2-infos").classList.toggle("hidden");
        }
    });
}
displayInCart();
function calculateTotalBill() {
    let sum = 0;
    tempShoppingCart.forEach(item => {
        sum = sum + Number(item.price) * Number(item.quantity);
    })
    totalBill.textContent = sum + " VND";
    totalBillPopup.textContent = sum + " VND";
    if (finalTotalBill !== null) finalTotalBill.textContent = "Giá: " + sum + " VNĐ";
}
calculateTotalBill();
function removeOneQuantity(event) {
    let quantity = event.currentTarget.parentNode.getElementsByTagName("input")[0].value;
    let itemName = event.currentTarget.parentNode.parentNode.getElementsByTagName("div")[2].textContent;
    let itemName2 = event.currentTarget.parentNode.parentNode.getElementsByTagName("div")[2].getElementsByTagName("div")[0];
    if (quantity > 1) {
        quantity--;
        event.currentTarget.parentNode.getElementsByTagName("input")[0].value = quantity;
        tempShoppingCart.forEach(item => {
            if (item.name === itemName) {
                item.quantity = quantity;
            } else if (itemName2 != null && item.name === itemName2.textContent) {
                item.quantity = quantity;
            }
        })
        localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
        // console.log(tempShoppingCart);
    }
    displayInFinalCart();
    displayInCart();
    calculateTotalBill();
}
function addOneQuantity(event) {
    let quantity = event.currentTarget.parentNode.getElementsByTagName("input")[0].value;
    let itemName = event.currentTarget.parentNode.parentNode.getElementsByTagName("div")[2].textContent;
    let itemName2 = event.currentTarget.parentNode.parentNode.getElementsByTagName("div")[2].getElementsByTagName("div")[0];
    quantity++;
    event.currentTarget.parentNode.getElementsByTagName("input")[0].value = quantity;
    tempShoppingCart.forEach(item => {
        if (item.name === itemName) {
            item.quantity = quantity;
        } else if (itemName2 != null && item.name === itemName2.textContent) {
            item.quantity = quantity;
        }
    })
    localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
    // console.log(tempShoppingCart);
    calculateTotalBill();
    displayInCart();
    displayInFinalCart();
}
function removeItemFromCart(event) {
    let itemName = event.currentTarget.parentNode.parentNode.getElementsByTagName("div")[2].textContent;
    tempShoppingCart = tempShoppingCart.filter(item => {
        return item.name !== itemName;
    })
    localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
    displayInCart();
    displayInFinalCart();
    calculateTotalBill();
}