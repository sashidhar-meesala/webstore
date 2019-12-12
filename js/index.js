// settings
const settings = {
  perpage: 10,
  current: 1,
  totalPages: 4
}
/**
 * DATA 
 * consists name,image url, product code, category of the product, price, brand, colors available, sizes, discount, 
 * and onsale boolean.
 */
const nike1 = {
  name: `Court majestic`,
  imageUrl: `img/nike/casual/nike-casual%20(1).jpeg`,
  productCode: 100,
  category: `casual`,
  price: 120.99,
  rating: 4.1,
  brand: `nike`,
  colors: [`red`, `blue`, `black`],
  stock: 4,
  sizes: [6, 7],
  discount: 10,
  onSale: false
};

const nike2 = {
  name: `Court Borough`,
  imageUrl: `img/nike/casual/nike-casual%20(2).jpeg`,
  productCode: 101,
  category: `casual`,
  price: 100.99,
  rating: 3.2,
  brand: `Nike`,
  colors: [`red`, `black`, `green`],
  stock: 0,
  sizes: [8, 9],
  discount: 15,
  onSale: false
};

const nike3 = {
  name: `EBERNON LOW`,
  imageUrl: `img/nike/casual/nike-casual%20(3).jpeg`,
  productCode: 102,
  category: `casual`,
  price: 140.99,
  rating: 3.8,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 6,
  sizes: [6, 9, 10],
  discount: 20,
  onSale: false
};

const nike4 = {
  name: `TANJUN Sneakers`,
  imageUrl: `img/nike/casual/nike-casual%20(4).jpeg`,
  productCode: 103,
  altname: `nikeshoe3`,
  category: `casual`,
  price: 160,
  rating: 3.1,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: false
};

const nike5 = {
  name: `TANJUN Running`,
  imageUrl: `img/nike/running/nike-running%20(1).jpeg`,
  productCode: 104,
  category: `running`,
  price: 180.99,
  rating: 3.5,
  brand: `Nike`,
  colors: [`green`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 15,
  onSale: false
};

const nike6 = {
  name: `Revolution 4 pro `,
  imageUrl: `img/nike/running/nike-running%20(2).jpeg`,
  productCode: 105,
  category: `running`,
  price: 189.99,
  rating: 5,
  brand: `Nike`,
  colors: [`green`, `blue`],
  stock: 10,
  sizes: [6, 8],
  discount: 10,
  onSale: false
};

const nike7 = {
  name: `FLEX EXPERIENCE`,
  imageUrl: `img/nike/running/nike-running%20(3).jpeg`,
  productCode: 106,
  category: `running`,
  price: 119.99,
  rating: 5,
  brand: `nike`,
  colors: [`black`],
  stock: 10,
  sizes: [9, 10],
  discount: 20,
  onSale: true
};

const nike8 = {
  name: `EXPERIENCE Pro`,
  imageUrl: `img/nike/sports/nike-sports%20(1).jpeg`,
  productCode: 107,
  category: `sports`,
  price: 209.99,
  rating: 4.8,
  brand: `Nike`,
  colors: [`blue`, `white`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 15,
  onSale: false
};

const nike9 = {
  name: `ZOOM WINFLO 5`,
  imageUrl: `img/nike/sports/nike-sports%20(2).jpeg`,
  productCode: 108,
  category: `sports`,
  price: 199.99,
  rating: 4.3,
  brand: `Nike`,
  colors: [`white`, `blue`, `green`],
  stock: 15,
  sizes: [7, 9],
  discount: 20,
  onSale: true
};

const nike10 = {
  name: `Superstar XV`,
  imageUrl: `img/nike/sports/nike-sports%20(3).jpeg`,
  productCode: 109,
  category: `sports`,
  price: 133.45,
  rating: 2.9,
  brand: `Nike`,
  colors: [`white`, `green`, `red`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: false
};

const nike11 = {
  name: `FLY.BY LOW II `,
  imageUrl: `img/nike/sports/nike-sports%20(4).jpeg`,
  productCode: 110,
  category: `sports`,
  price: 170.99,
  rating: 3.6,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 9],
  discount: 15,
  onSale: true
};

const nike = [
  nike1,
  nike2,
  nike3,
  nike4,
  nike5,
  nike6,
  nike7,
  nike8,
  nike9,
  nike10,
  nike11
];

const puma1 = {
  name: `Kor Sneakers `,
  imageUrl: `img/puma/casual/puma-casual%20(1).jpeg`,
  productCode: 111,
  category: `casual`,
  price: 150,
  rating: 3.3,
  brand: `Puma`,
  colors: [`white`, `green`],
  stock: 10,
  sizes: [7, 8, 9, 10],
  discount: 10,
  onSale: true
};

const puma2 = {
  name: `Poise Perf IDP`,
  imageUrl: `img/puma/casual/puma-casual%20(2).jpeg`,
  productCode: 112,
  category: `casual`,
  price: 112.99,
  rating: 4.2,
  brand: `Puma`,
  colors: ['black', `blue`],
  stock: 0,
  sizes: [8, 9],
  discount: 15,
  onSale: false
};

const puma3 = {
  name: `Icon IDP Canvas `,
  imageUrl: `img/puma/casual/puma-casual%20(3).jpeg`,
  productCode: 113,
  category: `casual`,
  price: 180,
  rating: 3.7,
  brand: `Puma`,
  colors: [`red`, `blue`, 'black'],
  stock: 12,
  sizes: [6, 7, 8],
  discount: 10,
  onSale: true
};

const puma4 = {
  name: `puma Perfecto`,
  imageUrl: `img/puma/casual/puma-casual%20(4).jpeg`,
  productCode: 114,
  category: `casual`,
  price: 129.99,
  rating: 4.7,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8],
  discount: 10,
  onSale: false
};

const puma5 = {
  name: `Puma Majestic`,
  imageUrl: `img/puma/running/puma-running%20(1).jpeg`,
  productCode: 115,
  category: `running`,
  price: 140,
  rating: 4.5,
  brand: `Puma`,
  colors: [`red`, `blue`],
  stock: 22,
  sizes: [8, 9],
  discount: 20,
  onSale: false
};

const puma6 = {
  name: `Puma Runner`,
  imageUrl: `img/puma/running/puma-running%20(2).jpeg`,
  productCode: 116,
  category: `running`,
  price: 150,
  rating: 1,
  brand: `Puma`,
  colors: [`white`, `blue`],
  stock: 11,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: false
};

const puma7 = {
  name: `Puma Accelerate`,
  imageUrl: `img/puma/running/puma-running%20(3).jpeg`,
  productCode: 117,
  category: `running`,
  price: 160,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 0,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: false
};

const puma8 = {
  name: `Puma Logic FLo`,
  imageUrl: `img/puma/running/puma-running%20(4).jpeg`,
  productCode: 118,
  category: `running`,
  price: 159.99,
  rating: 5,
  brand: `puma`,
  colors: [`blue`, `green`, `black`],
  stock: 10,
  sizes: [8, 9],
  discount: 10,
  onSale: false
};


const puma9 = {
  name: `Puma Consistent 11`,
  imageUrl: `img/puma/running/puma-running%20(5).jpeg`,
  productCode: 119,
  category: `running`,
  price: 190,
  rating: 3.9,
  brand: `Puma`,
  colors: [`green`, `blue`],
  stock: 0,
  sizes: [7, 9],
  discount: 15,
  onSale: false
};

const puma10 = {
  name: `Puma MagicX`,
  imageUrl: `img/puma/sports/puma-sports%20(1).jpeg`,
  productCode: 120,
  category: `sports`,
  price: 200,
  rating: 1,
  brand: `puma`,
  colors: [`blue`, `white`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};

const puma11 = {
  name: `Puma Sport2x`,
  imageUrl: `img/puma/sports/puma-sports%20(2).jpeg`,
  productCode: 121,
  category: `sports`,
  price: 200,
  rating: 4.2,
  brand: `puma`,
  colors: [`red`, `blue`, `black`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: true
};

const puma12 = {
  name: `Puma Sport CA`,
  imageUrl: `img/puma/sports/puma-sports%20(3).jpeg`,
  productCode: 122,
  category: `sports`,
  price: 210,
  rating: 2,
  brand: `Puma`,
  colors: [`black`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};
const puma = [
  puma1,
  puma2,
  puma3,
  puma4,
  puma5,
  puma6,
  puma7,
  puma8,
  puma9,
  puma10,
  puma11,
  puma12
];

const adidas1 = {
  name: `Adidas  XVR`,
  imageUrl: `img/adidas/casual/adidas-casual%20(1).jpeg`,
  productCode: 122,
  category: `casual`,
  price: 159.99,
  rating: 3.8,
  brand: `Adidas`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};


const adidas2 = {
  name: `Adidas Zoomx`,
  imageUrl: `img/adidas/casual/adidas-casual%20(2).jpeg`,
  productCode: 123,
  category: `Aasual`,
  price: 188.79,
  rating: 3.9,
  brand: `Adidas`,
  colors: [`black`, `green`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: false
};


const adidas3 = {
  name: `Adidas Casual TN`,
  imageUrl: `img/adidas/casual/adidas-casual%20(3).jpeg`,
  productCode: 124,
  category: `casual`,
  price: 210,
  rating: 5,
  brand: `Adidas`,
  colors: [`white`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: false
};


const adidas4 = {
  name: `Adidas Casuals`,
  imageUrl: `img/adidas/casual/adidas-casual%20(4).jpeg`,
  productCode: 125,
  category: `casual`,
  price: 210,
  rating: 2,
  brand: `Adidas`,
  colors: [`white`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};

const adidas5 = {
  name: `Adidas runner XS`,
  imageUrl: `img/adidas/running/adidas-running%20(1).jpeg`,
  productCode: 126,
  category: `running`,
  price: 210,
  rating: 2,
  brand: `Adidas`,
  colors: [`white`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};

const adidas6 = {
  name: `Adidas runner XR`,
  imageUrl: `img/adidas/running/adidas-running%20(2).jpeg`,
  productCode: 127,
  category: `running`,
  price: 210,
  rating: 2,
  brand: `Adidas`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};



const adidas7 = {
  name: `Adidas runner BZ`,
  imageUrl: `img/adidas/running/adidas-running%20(3).jpeg`,
  productCode: 128,
  category: `running`,
  price: 210,
  rating: 2,
  brand: `Adidas`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};


const adidas8 = {
  name: `Adidas runner VZ`,
  imageUrl: `img/adidas/running/adidas-running%20(4).jpeg`,
  productCode: 129,
  category: `running`,
  price: 210,
  rating: 2,
  brand: `Adidas`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 15,
  onSale: true
};


const adidas9 = {
  name: `Adidas Sport pro`,
  imageUrl: `img/adidas/sports/adidas-sports%20(1).jpeg`,
  productCode: 130,
  category: `sports`,
  price: 199,
  rating: 3.7,
  brand: `Adidas`,
  colors: [`red`, `white`],
  stock: 10,
  sizes: [7, 8],
  discount: 10,
  onSale: true
};



const adidas10 = {
  name: `Adidas sport x`,
  imageUrl: `img/adidas/sports/adidas-sports%20(2).jpeg`,
  productCode: 131,
  category: `sports`,
  price: 189,
  rating: 3.6,
  brand: `Adidas`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8],
  discount: 20,
  onSale: true
};


const adidas11 = {
  name: `Adidas sport max`,
  imageUrl: `img/adidas/sports/adidas-sports%20(3).jpeg`,
  productCode: 132,
  category: `sports`,
  price: 130,
  rating: 4.1,
  brand: `Adidas`,
  colors: [`white`, `green`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: false
};


const adidas12 = {
  name: `Adidas sport zs`,
  imageUrl: `img/adidas/sports/adidas-sports%20(4).jpeg`,
  productCode: 133,
  category: `sports`,
  price: 120,
  rating: 3.1,
  brand: `Adidas`,
  colors: [`red`, `blue`, `black`],
  stock: 10,
  sizes: [8, 9],
  discount: 10,
  onSale: false
};

const adidas = [
  adidas1, adidas2, adidas3, adidas4, adidas5, adidas6, adidas7, adidas8, adidas9, adidas10, adidas11, adidas12
];

const shoesData = nike.concat(puma).concat(adidas);
const shoppingCart = [{}];
const wishlist = [{}];

//functions
/*function :getShoesAsHtml
parameter: js object 
working : This function takes the js data object and returns the dynamic content embedded into application.*/

function getShoesAsHtml(shoesData) {
  let color = '';
  for (let i = 0; i < shoesData.colors.length; i++) {
    color += `<li class="color-box" style="background-color:${shoesData.colors[i]}"><span class="colour-span"></span></p>`;
  }
  let cartBtn = ``;
  let heartButton = `<button type="button" class="heartBtn" data-code="${shoesData.productCode}" id="heartBtn"><span class="material-icons">favorite</span></button>`;
  let onsale = '';
  if (shoesData.onSale == true) {
    onsale = `<small class="onsale_banner">On Sale!</small>`;
  } else {
    onsale = ``;
  }

  if (shoesData.stock > 0) {

    cartBtn = `<button type="button" class="productCardButton"  data-code="${shoesData.productCode}" id="addtocart"><span class="material-icons">add_shopping_cart</span> Add to Cart</button> `;

  } else {
    onsale = `<small class="outofstock">Out of stock</small>`
    cartBtn = `<button type="button" class="productCardButton"  data-code="${shoesData.productCode}" id="addtocart" disabled style="background-color:rgba(78, 62, 62, 0.87)"><span class="material-icons">add_shopping_cart</span> Add to Cart</button> `;
  }

  return `
    <section class="productsCard" id="pCard"> 
    <img class="productCardImg" src="${shoesData.imageUrl}" alt="${shoesData.name}" id="${shoesData.productCode}">
    ${heartButton}
    ${onsale}
    <h1 class="ProductCardName"><strong>${shoesData.name}</strong></h1>
    <h1 class="brand"> ${shoesData.brand}</h1>
        <ul class="productCardList" id="productCardList">
          <li class="productCardListItem"><h3>${shoesData.category}</h3></li>
          <li class="productCardListItem"><h3 class="price">$${shoesData.price}</h3></li>
          <li class="productCardListItem"><h4>${shoesData.rating}<span class="fa fa-star checked"><h4></li>
          <li class="productCardListItem">${shoesData.discount} % Off</li>
          <p>Available colors</p>
          <ul class="color-div">${color}</ul>
        </ul>
        ${cartBtn}
        </section>`;

}

document.getElementById(`app`).innerHTML = shoesData
  .map(getShoesAsHtml)
  .join("\n");
document.getElementById('numResults').innerHTML = `(${shoesData.length} Products)`;

/*
Function getCartAsHTML
This function takes array as parameter and uses its index values such as name, price etc..
returns html to be embedded 
*/
function getCartAsHTML(arr) {
  return `
    <section class="productsCard" id="pCard"> 
    <img class="productCardImg" src="${arr.imageUrl}" alt="${arr.name}"">
    <h1 class="ProductCardName"><strong>${arr.name}</strong></h1>
    <h1 class="brand"> ${arr.brand}</h1>
        <ul class="productCardList" id="productCardList">
          <li class="productCardListItem"><h3>${arr.category}</h3></li>
          <li class="productCardListItem"><h3 class="price">$${arr.price}</h3></li>
          <li class="productCardListItem"><h4>${arr.rating}<span class="fa fa-star checked"><h4></li>
        </ul>
        <button class="productCardButton"> Checkout</button>
        </section>`;

}

/*search functionality
Function:LoadProductsByName
this function takes the user input from text and matches the name of the product with that of the user's input 
passes the array to renderproducts function where it renders the filtered data onto the page  */

function LoadProductsByName(e) {
  e.preventDefault();
  const search = document.getElementById('find').value;
  const lowerCase = search.trim().toLowerCase();
  const searchResultsArray = shoesData.filter(p => p.name.toLowerCase().includes(lowerCase));
  renderProducts(searchResultsArray);
}

/*Function HandleClickofBtns
This function checks for the click and matches the nearest button class 
and sends the target dataset to different functions */
function handleClicksofBtns() {
  if (event.target.matches('button.productCardButton')) {
    const code = parseInt(event.target.dataset.code);
    addItemToCart(code);
  }

  if (event.target.closest('button').matches('button.heartBtn')) {
    const code = parseInt(event.target.closest('button').dataset.code);
    addToWishlist(code);
  } else {
    if (!event.target.matches('button.heartBtn') && !event.target.matches('button.productCardButton')) {
      return;
    }


  }
}

//FUNCTION: addToWishlist
//PARAMETER :dataset - productid of the product
// this function checks whether the product is present in wishlist if not present it adds to wishlist 
//if already present it removes from the wishlist
const addToWishlist = pID => {
  const cartItem = wishlist.find(item => item.ID == pID);
  let name = shoesData.filter(p => p.productCode == pID);
  if (cartItem) { // if a cartItem was found

    alert(`${name[0].name} has been removed from wishlist`);
    wishlist.pop(cartItem);
    document.getElementById("Wishlist").innerHTML = wishlist.length - 1;
  } else {
    wishlist.push({
      ID: pID,
      qty: 1
    });
    document.getElementById("Wishlist").innerHTML = wishlist.length - 1;
    alert(`${name[0].name} has been added wishlist`);
  }
}

//FUNCTION: addItemToCart
//PARAMETER :dataset - productid of the product
// this function checks whether the product is present in shoppingcart if not present it adds to shoppingcart 
//if already present, it increments the quantity of the product in the shoppingcart.

const addItemToCart = pID => {
  // [ {courseid: 101, qty: 1} ]
  let cart = document.getElementById("cartDetails");
  const cartItem = shoppingCart.find(item => item.ID == pID);
  let name = shoesData.filter(p => p.productCode == pID);

  if (cartItem) { // if a cartItem was found
    document.getElementById("cart").innerHTML = shoppingCart.length - 1;
    alert(` ${name[0].name} is already in your cart`);

  } else {
    shoppingCart.push({
      ID: pID,
      qty: 1
    });
    document.getElementById("cart").innerHTML = shoppingCart.length - 1;
    alert(`${name[0].name} has been added to your cart`);
    cart.innerHTML += getCartAsHTML(name[0]);
  }
}

//Function:LoadFilterMenu
//Paramenters:none
//usage: It works on click of filter button , to toggle the display of the filter menu.
function ToggleFilterMenu() {
  const filtermenu = document.getElementById("filtermenu");
  if (filtermenu.style.display === "") {
    filtermenu.style.display = "none";
  } else {
    filtermenu.style.display = "";
  }


}


//FILTERFUNCTIONS

//Function:LoadProductsByPriceFilter
//usage: on entering the price in the "whats your budget" field, the function stores the user input and displays,
//filtered data from shoesdata with prices less than or equal to the budget of the customer.
function LoadProductsByPriceFilter() {
  const budget = document.getElementById('PriceFilter').value;
  const searchResultsArray = shoesData.filter(p => p.price <= budget);
  renderProducts(searchResultsArray);
}


/**
 * Function:LoadProductsByFilters
 * This functions stores all the selected filters from the filtermenu and filters the data
 * with the heirarchy budget>category>rating >brand> size > colour >  discount 
 */
function LoadProductsByFilters() {
  let category;
  let rating;
  let brand;
  let discount;
  arrayByPrice = [];
  arrayByCategory = [];
  arrayByRatings = [];
  arrayByBrand = [];
  arrayByDiscount = [];
  arrayBySize = [];
  arrayByColour = [];
  let size = document.querySelectorAll('[name="size"]:checked');
  let colour = document.querySelectorAll('[name="colour"]:checked');
  let budget;

  let selectedSizeArray = [];
  for (let i = 0; i < size.length; i++) {
    if (size[i].checked) {
      selectedSizeArray.push(parseInt(size[i].value))
    }
  }


  let selectedColourArray = [];
  for (let i = 0; i < colour.length; i++) {
    if (colour[i].checked) {
      selectedColourArray.push(colour[i].value);
    }
  }



  //console.log(arrayByColour);
  if (document.getElementById('PriceFilter').value != null && document.getElementById('PriceFilter').value != "") {
    budget = document.getElementById('PriceFilter').value;
    arrayByPrice = shoesData.filter(p => p.price <= budget);
  } else {
    arrayByPrice = shoesData;
  }

  if (document.querySelector('input[name="category"]:checked') != null) {
    category = document.querySelector('input[name="category"]:checked').value;
    //alert(category);
    arrayByCategory = arrayByPrice.filter(p => p.category == category);
  } else {
    arrayByCategory = arrayByPrice;
  }
  if (document.querySelector('input[name="rating"]:checked') != null) {
    rating = document.querySelector('input[name="rating"]:checked').value;
    arrayByRatings = arrayByCategory.filter(p => p.rating >= rating);
  } else {
    arrayByRatings = arrayByCategory;
  }

  if (document.querySelector('input[name="brand"]:checked') != null) {
    brand = document.querySelector('input[name="brand"]:checked').value;
    arrayByBrand = arrayByRatings.filter(p => p.brand.toLowerCase() == brand.toLowerCase());
  } else {
    arrayByBrand = arrayByRatings;
  }


  if (selectedSizeArray.length != 0) {
    arrayBySize = arrayByBrand.filter(s => selectedSizeArray.filter(val => s.sizes.includes(val)).length > 0);
  } else {
    arrayBySize = arrayByBrand;
  }

  if (selectedColourArray.length != 0) {
    arrayByColour = arrayBySize.filter(s => selectedColourArray.filter(val => s.colors.includes(val)).length > 0);
  } else {
    arrayByColour = arrayBySize;
  }


  if (document.querySelector('input[name="discount"]:checked') != null) {
    discount = document.querySelector('input[name="discount"]:checked').value;
    arrayByDiscount = arrayByColour.filter(p => p.discount == discount);
  } else {
    arrayByDiscount = arrayByColour;
  }

  renderProducts(arrayByDiscount);


}


//sorting functions START

/**
 * FUNCTION : LoadProductsPriceHighTolow
 * this function on click of sort button- price high to low
 * sorts the shoesdata considering the prices key from high to low, stores in an array
 *  and passes it to renderproducts function
 */
function LoadProductsPriceHighTolow() {

  //alert("in high to low");
  const PriceHighToLowArray = shoesData
    .slice(0)
    .sort((a, b) => (a.price < b.price ? 1 : -1));
  renderProducts(PriceHighToLowArray);
}

/**
 * FUNCTION : LoadProductsPriceLowToHigh
 * this function on click of sort button- price low to high
 * sorts the shoesdata considering the prices key from low to high, stores in an array
 *  and passes it to renderproducts function
 */

function LoadProductsPriceLowToHigh() {
  //alert("in low to high");
  const PriceLowToHighArray = shoesData
    .slice(0)
    .sort((a, b) => (a.price > b.price ? 1 : -1));
  renderProducts(PriceLowToHighArray);
}


/**
 * FUNCTION : LoadProductsByAvailability
 * this function on click of sort button- by availability
 * sorts the shoesdata considering the availability key from high to low, stores in an array
 *  and passes it to renderproducts function
 */

function LoadProductsByAvailability() {
  //alert("in availability function");
  const availabilityArray = shoesData
    .slice(0)
    .sort((a, b) => (a.stock < b.stock ? 1 : -1));
  renderProducts(availabilityArray);
}

/**
 * FUNCTION : LoadProductsByRatings
 * this function on click of sort button- by Ratings
 * sorts the shoesdata considering the ratings key from high to low, stores in an array
 *  and passes it to renderproducts function
 */
function LoadProductsByRatings() {
  //alert("in rating function");
  const ratingArray = shoesData
    .slice(0)
    .sort((a, b) => (a.rating < b.rating ? 1 : -1));
  renderProducts(ratingArray);
}

/**
 * FUNCTION : LoadProductsOnSale
 * this function on click of sort button- on sale
 * filters the shoesdata considering whether the product is on sale or not, stores in an array if its on sale
 *  and passes it to renderproducts function
 */

function LoadProductsOnSale() {
  //alert("in onsale function");
  const onSaleArray = shoesData.slice(0).filter(p => p.onSale == true).filter(p => p.stock > 0);
  renderProducts(onSaleArray);
}

/*
to display cart box*/
let cartbox = document.getElementById('cartbox');
//var wlist = document.getElementById('wlist');

function openCartModal() {
  cartbox.classList.remove("is-hidden");
}

function closeCartModal() {
  cartbox.classList.add("is-hidden");
}

/*function openWishModal(){
  wlist.classList.remove("is-hidden");
}

function closeWishModal(){
  wlist.classList.add("is-hidden");
}*/



/**
 * Function:renderProducts
 * Parameter: Array
 * this functions recieves the array consisting the dynamic data which is to be rendered on the page 
 * by mapping the array to getShoesAsHtml function.
 */
function renderProducts(arr) {
  document.getElementById(`app`).innerHTML = arr.map(getShoesAsHtml).join("\n");
  let res = 'Products';
  if (arr.length > 1) {
    res = 'Products'
    document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
  }
  if (arr.length == 1) {
    res = 'Product'
    document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
  }
  if (arr.length == 0) {
    res = 'Products'
    document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
    document.getElementById(`app`).innerHTML = `<h1>O RESULTS found!</h1>`
  }

}





//execution
window.addEventListener('load', () => {
  document.getElementById(`find`).addEventListener("change", LoadProductsByName);
  document.getElementById(`PriceHighToLow`).addEventListener("click", LoadProductsPriceHighTolow);
  document.getElementById(`PriceLowToHigh`).addEventListener("click", LoadProductsPriceLowToHigh);
  document.getElementById(`availability`).addEventListener("click", LoadProductsByAvailability);
  document.getElementById(`topRated`).addEventListener("click", LoadProductsByRatings);
  document.getElementById(`onSale`).addEventListener("click", LoadProductsOnSale);
  document.getElementById(`filter`).addEventListener("click", ToggleFilterMenu);
  document.getElementById(`PriceFilter`).addEventListener("change", LoadProductsByPriceFilter);
  document.getElementById('app').addEventListener("click", handleClicksofBtns);
  document.querySelectorAll('[name="brand"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
  document.querySelectorAll('[name="discount"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
  document.querySelectorAll('[name="category"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
  document.querySelectorAll('[name="rating"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
  document.querySelectorAll('[name="size"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
  document.querySelectorAll('[name="colour"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
  document.getElementById('cartBtn').addEventListener('click', openCartModal);
  document.getElementById('closeCart').addEventListener('click', closeCartModal);
  //document.getElementById('wlist').addEventListener('click',openWishModal);
  //document.getElementById('closeCart').addEventListener('click',closeWishModal);


  //document.getElementById('cartBtn').addEventListener('click', event => document.querySelector('.cart-box').classList.toggle('open'));


  //start
  getShoesAsHtml(shoesData);

});