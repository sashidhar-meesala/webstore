//DATA
const nike1 = {
  name: `Court majestic Sneakers`,
  imageUrl: `img/nike/casual/nike-casual%20(1).jpeg`,
  productCode: 100,
  category: `casual`,
  price: `120`,
  rating: 4.1,
  brand: `Nike`,
  colors: [`red`, `blue`, `balck`],
  stock: 4,
  sizes: [6,7, 8, 9],
  discount: 10,
  onSale: true
};

const nike2 = {
  name: `Court Borough Low Shoe`,
  imageUrl: `img/nike/casual/nike-casual%20(2).jpeg`,
  productCode: 101,
  category: `casual`,
  price: `100`,
  rating: 3.2,
  brand: `Nike`,
  colors: [`red`, `balck`],
  stock: 0,
  sizes: [6,7, 8, 9],
  discount: 15,
  onSale: false
};

const nike3 = {
  name: `EBERNON LOW Casuals`,
  imageUrl: `img/nike/casual/nike-casual%20(3).jpeg`,
  productCode: 102,
  category: `casual`,
  price: `140`,
  rating: 3.8,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 0,
  sizes: [7, 8, 9,10],
  discount: 20,
  onSale: true
};

const nike4 = {
  name: `TANJUN Sneakers`,
  imageUrl: `img/nike/casual/nike-casual%20(4).jpeg`,
  productCode: 103,
  altname: `nikeshoe3`,
  category: `casual`,
  price: `160`,
  rating: 3.1,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 15,
  onSale: false
};

const nike5 = {
  name: `TANJUN Running`,
  imageUrl: `img/nike/running/nike-running%20(1).jpeg`,
  productCode: 104,
  altname: `nikeshoe3`,
  category: `running`,
  price: `180`,
  rating: 2.5,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};

const nike6 = {
  name: `Revolution 4 pro `,
  imageUrl: `img/nike/running/nike-running%20(2).jpeg`,
  productCode: 105,
  altname: `nikeshoe3`,
  category: `running`,
  price: `200`,
  rating: 5,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: false
};

const nike7 = {
  name: `FLEX EXPERIENCE`,
  imageUrl: `img/nike/running/nike-running%20(3).jpeg`,
  productCode: 106,
  altname: `nikeshoe3`,
  category: `running`,
  price: `110`,
  rating: 5,
  brand: `nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 15,
  onSale: true
};

const nike8 = {
  name: `Nike shoes `,
  imageUrl: `img/nike/sports/nike-sports%20(1).jpeg`,
  productCode: 107,
  altname: `nikeshoe3`,
  category: `sports`,
  price: `210`,
  rating: 3.1,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: false
};

const nike9 = {
  name: `ZOOM WINFLO 5`,
  imageUrl: `img/nike/sports/nike-sports%20(2).jpeg`,
  productCode: 108,
  altname: `nikeshoe3`,
  category: `sports`,
  price: `190`,
  rating: 4.1,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 15,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: true
};

const nike10 = {
  name: `Nike shoes `,
  imageUrl: `img/nike/sports/nike-sports%20(3).jpeg`,
  productCode: 109,
  altname: `nikeshoe3`,
  category: `sports`,
  price: `220`,
  rating: 4.1,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: false
};

const nike11 = {
  name: `FLY.BY LOW II `,
  imageUrl: `img/nike/sports/nike-sports%20(4).jpeg`,
  productCode: 110,
  altname: `nikeshoe3`,
  category: `sports`,
  price: `170`,
  rating: 4.1,
  brand: `Nike`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
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
  price: `210`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9,10],
  discount: 10,
  onSale: true
};

const puma2 = {
  name: `Poise Perf IDP`,
  imageUrl: `img/puma/casual/puma-casual%20(2).jpeg`,
  productCode: 112,
  category: `casual`,
  price: `110`,
  rating: 4.2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 6,
  sizes:[8, 9],
  discount: 15,
  onSale: false
};

const puma3 = {
  name: `Icon IDP Canvas `,
  imageUrl: `img/puma/casual/puma-casual%20(3).jpeg`,
  productCode: 113,
  category: `casual`,
  price: `180`,
  rating: 3.7,
  brand: `puma`,
  colors: [`red`, `blue`,'black'],
  stock: 112,
  sizes: [6,7, 8],
  discount: 20,
  onSale: true
};

const puma4 = {
  name: `puma shoes 4`,
  imageUrl: `img/puma/casual/puma-casual%20(4).jpeg`,
  productCode: 114,
  category: `casual`,
  price: `130`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: true
};

const puma5 = {
  name: `puma shoes 5`,
  imageUrl: `img/puma/running/puma-running%20(1).jpeg`,
  productCode: 115,
  category: `running`,
  price: `140`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 25,
  onSale: false
};

const puma6 = {
  name: `puma shoes 6`,
  imageUrl: `img/puma/running/puma-running%20(2).jpeg`,
  productCode: 116,
  category: `running`,
  price: `150`,
  rating: 1,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 0,
  sizes: [7, 8, 9],
  discount: 15,
  onSale: true
};

const puma7 = {
  name: `puma shoes 7`,
  imageUrl: `img/puma/running/puma-running%20(3).jpeg`,
  productCode: 117,
  category: `running`,
  price: `160`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};

const puma8 = {
  name: `puma shoes 7`,
  imageUrl: `img/puma/running/puma-running%20(4).jpeg`,
  productCode: 118,
  category: `running`,
  price: `170`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: false
};

const puma9 = {
  name: `puma shoes 7`,
  imageUrl: `img/puma/running/puma-running%20(4).jpeg`,
  productCode: 119,
  category: `running`,
  price: `180`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 15,
  onSale: false
};

const puma10 = {
  name: `puma shoes 7`,
  imageUrl: `img/puma/running/puma-running%20(5).jpeg`,
  productCode: 120,
  category: `running`,
  price: `190`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 15,
  onSale: false
};

const puma11 = {
  name: `puma shoes 7`,
  imageUrl: `img/puma/sports/puma-sports%20(1).jpeg`,
  productCode: 121,
  category: `sports`,
  price: `120`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 20,
  onSale: true
};

const puma12 = {
  name: `puma shoes 7`,
  imageUrl: `img/puma/sports/puma-sports%20(2).jpeg`,
  productCode: 122,
  category: `sports`,
  price: `200`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
  stock: 10,
  sizes: [7, 8, 9],
  discount: 10,
  onSale: true
};

const puma13 = {
  name: `puma shoes 7`,
  imageUrl: `img/puma/sports/puma-sports%20(3).jpeg`,
  productCode: 123,
  category: `sports`,
  price: `210`,
  rating: 2,
  brand: `puma`,
  colors: [`red`, `blue`],
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
  puma12,
  puma13
];

const shoesData = nike.concat(puma);


const shoppingCart = [
  {ID: 101, qty: 1}
];

const wishlist=[
  {
    ID:100, qty:1}
  ];

//functions




function getShoesAsHtml(shoesData) {
  let cartBtn=``;
  let heartButton=`<button type="button" class="heartBtn" data-code="${shoesData.productCode}" id="heartBtn"><span class="material-icons">favorite</span></button>`;
  let onsale='';
  let outOfStock=``;
  if(shoesData.onSale==true && shoesData.stock > 0){
    onsale=`<small class="onsale_banner">On Sale!</small>`;
    cartBtn=`<button type="button" class="productCardButton"  data-code="${shoesData.productCode}" id="addtocart"><span class="material-icons">add_shopping_cart</span> Add to Cart</button> `;
  
  }
  else{
    onsale=`<small class="outofstock">Out of stock</small>`
  }

  return `
    <section class="productsCard"> 
    <img class="productCardImg" src="${shoesData.imageUrl}" alt="${shoesData.name}" style="width:100%;height:130px;">
    ${heartButton}
    ${onsale}
    <h1 class="ProductCardName"><strong>${shoesData.name}</strong></h1>
        <ul class="productCardList">
          <li class="productCardListItem"><h3>${shoesData.category}</h3></li>
          <li class="productCardListItem"><h3>Price: $${shoesData.price}</h3></li>
          <li class="productCardListItem"><p>Average rating: ${shoesData.rating}<p></li>
          <li>${shoesData.discount}</li>
          <section class="onhoverShow">testing mee</section>
        </ul>
        ${cartBtn}
        </section>`;
}

document.getElementById(`app`).innerHTML = shoesData
  .map(getShoesAsHtml)
  .join("\n");

  //search functionality
function LoadProductsByName(e){
  e.preventDefault();
  const search=document.getElementById('find').value;
  const lowerCase=search.trim().toLowerCase();
  const searchResultsArray=shoesData.filter(p=> p.name.toLowerCase().includes(lowerCase));
  renderProducts(searchResultsArray);
}

//addto cart function
function handleClicksofBtns(){
  if (event.target.matches('button.productCardButton')) {
    const code = parseInt(event.target.dataset.code);
    addItemToCart(code);
  }

  if (event.target.closest('button').matches('button.heartBtn')) {
    const code = parseInt(event.target.closest('button').dataset.code);
      addToWishlist(code);
  }
  else{
    if(!event.target.matches('button.heartBtn') && !event.target.matches('button.productCardButton')){
      return;
    }
  
  
}}



const addToWishlist = pID => {
 

  const cartItem = wishlist.find(item => item.ID == pID);

  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
    alert("Item has been already added to wishlist ");
  } else {
    wishlist.push({ID: pID, qty: 1});
    alert("New wishlist item has been added wishlist");
  }
}

//add to wishlist

const addItemToCart = pID => {
  // [ {courseid: 101, qty: 1} ]

  const cartItem = shoppingCart.find(item => item.ID == pID);

  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
    alert("Another item has been added to your cart");
  } else {
    shoppingCart.push({ID: pID, qty: 1});
    alert("A new item has been added to your cart");
  }
}



function LoadFilterMenu(){
  if(window.screen.width > 500){const x = document.getElementById("filtermenu");
  if (x.style.display === "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
    //document.getElementById("layoutTheme").classList.toggle('layoutthemex');
  }}
  
}
//filter functions

function LoadProductsByPriceFilter(){
 const price=document.getElementById('PriceFilter').value;
 const searchResultsArray=shoesData.filter(p=> p.price <= price);
 renderProducts(searchResultsArray);
}



function LoadProductsByFilters(){
  //heirarchy category>rating >brand> colour > size >  discount 
  let category;
  let rating;
  let brand;
  let discount;
  arrayByCategory=[];
  arrayByRatings=[];
  arrayByBrand=[];
  arrayByDiscount=[];

  if(document.querySelector('input[name="category"]:checked')!=null){
    category=document.querySelector('input[name="category"]:checked').value;
    alert(category);
    arrayByCategory=shoesData.filter(p=>p.category==category);
  }
  else {
    arrayByCategory=shoesData;
  }
  if(document.querySelector('input[name="rating"]:checked') != null){
    rating=document.querySelector('input[name="rating"]:checked').value;
    arrayByRatings=arrayByCategory.filter(p=>p.rating >= rating);
  }
  else{
    arrayByRatings=arrayByCategory;
  }

  if(document.querySelector('input[name="brand"]:checked')!=null){
    brand=document.querySelector('input[name="brand"]:checked').value;
    arrayByBrand=arrayByRatings.filter(p=>p.brand.toLowerCase() == brand.toLowerCase());
  }
  else{
    arrayByBrand=arrayByRatings;
  }

  if(document.querySelector('input[name="discount"]:checked')!=null){
    discount=document.querySelector('input[name="discount"]:checked').value;
    arrayByDiscount=arrayByBrand.filter(p=>p.discount == discount);
  }
  else{
    arrayByDiscount=arrayByBrand;
  }

  renderProducts(arrayByDiscount);
  

}


//sorting functions
function LoadProductsPriceHighTolow() {
  //alert("in high to low");
  const PriceHighToLowArray = shoesData
    .slice(0)
    .sort((a, b) => (a.price < b.price ? 1 : -1));
  renderProducts(PriceHighToLowArray);
}

function LoadProductsPriceLowToHigh() {
  //alert("in low to high");
  const PriceLowToHighArray = shoesData
    .slice(0)
    .sort((a, b) => (a.price > b.price ? 1 : -1));
  renderProducts(PriceLowToHighArray);
}

function LoadProductsByAvailability() {
  //alert("in availability function");
  const availabilityArray = shoesData
    .slice(0)
    .sort((a, b) => (a.stock < b.stock ? 1 : -1));
  renderProducts(availabilityArray);
}

function LoadProductsByRatings() {
  //alert("in rating function");
  const ratingArray = shoesData
    .slice(0)
    .sort((a, b) => (a.rating < b.rating ? 1 : -1));
  renderProducts(ratingArray);
}

function LoadProductsOnSale(){
  //alert("in onsale function");
  const onSaleArray= shoesData.slice(0).filter(p => p.onSale == true).filter(p=>p.stock>0);
  renderProducts(onSaleArray);
}




/*const addToClickToHeartBtn = element => {
  const addToWishlist = () => {
    if (element.style.color != 'red') {
      element.style.color = 'red';
    } else {
      element.style.color = 'rgb(63, 46, 46)'
    };
  }

  element.addEventListener('click', addToWishlist)
}

const addToClickToCartBtn = element => {
  const addTOCart = () => {
    if (element.style.backgroundColor != `red` && element.innerHTML != `Remove from Cart`) {
      element.style.backgroundColor = `red`;
      element.innerHTML = `Remove from Cart`;
    } else {
      element.style.backgroundColor = `rgba(0, 0, 0, .87)`;
      element.innerHTML = `Add to Cart`;
    }

  }
  element.addEventListener('click', addTOCart)
}*/


function renderProducts(arr) {
  document.getElementById(`app`).innerHTML = arr.map(getShoesAsHtml).join("\n");
  let res = 'Products';
  if (arr.length == 1) {
    res = 'Product'
    document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
  }
 if(arr.length==0){
  res = 'Products'
    document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
    document.getElementById(`app`).innerHTML=`<h1>O RESULTS found!</h1>`
 }
 
}




//execution
window.addEventListener('load', () => {

//const heartBtn = document.querySelectorAll(`.heartBtn`);
//heartBtn.forEach(addToClickToHeartBtn);
//const AddtoCartBtn = document.querySelectorAll(`.productCardButton`);
//AddtoCartBtn.forEach(addToClickToCartBtn);
document.getElementById(`find`).addEventListener("change",LoadProductsByName);
document.getElementById(`PriceHighToLow`).addEventListener("click", LoadProductsPriceHighTolow);
document.getElementById(`PriceLowToHigh`).addEventListener("click", LoadProductsPriceLowToHigh);
document.getElementById(`availability`).addEventListener("click", LoadProductsByAvailability);
document.getElementById(`topRated`).addEventListener("click", LoadProductsByRatings);
document.getElementById(`onSale`).addEventListener("click", LoadProductsOnSale);
document.getElementById(`filter`).addEventListener("click", LoadFilterMenu);
document.getElementById(`PriceFilter`).addEventListener("change",LoadProductsByPriceFilter);
//filter button to be removed
document.getElementById(`filterbtn`).addEventListener("click",LoadProductsByFilters)
document.getElementById('app').addEventListener("click", handleClicksofBtns);
document.querySelectorAll('[name="brand"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="discount"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="category"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="rating"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
document.querySelectorAll('[name="size"]').forEach(chkbox => chkbox.addEventListener('change', LoadProductsByFilters));
//start
getShoesAsHtml(shoesData);

});