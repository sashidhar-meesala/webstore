//DATA 
const nike1 = {
    name: `Nike shoes 1`,
    imageUrl:`img/product.jpg`,
    alternateName:`shoes-alt-name`,
    category:`casual`,
    productCode: `WDDM-115`,
    price:`100`,
    rating: 4,
    brand:`nike`,
    description:`best shoes ever`,
    colors:[`red`,`blue`,`balck`],
    stock:10,
    sizes:[7,8,9],
    discount: 15,
    onSale: true
  };


  const nike2 = {
    name: `Nike shoes 2`,
    imageUrl:`img/product.jpg`,
    altname:`nikeshoe2`,
    category:`sport`,
    productCode: `WDDM-118`,
    price:`110`,
    rating: 3,
    brand:`nike`,
    description:`best shoes ever`,
    colors:[`red`,`balck`],
    stock:10,
    sizes:[7,8,9],
    discount: 20,
    onSale: true
  };


  const nike3 = {
    name: `Nike shoes 3`,
    imageUrl:`img/product.jpg`,
    productCode: `WDDM-117`,
    altname:`nikeshoe3`,
    category:`running`,
    price:`100`,
    rating: 2,
    brand:`nike`,
    description:`best shoes ever`,
    colors:[`red`,`blue`],
    stock:10,
    sizes:[7,8,9],
    discount: 5,
    onSale: true
  };


const nike=[nike1,nike2,nike3];


const puma1={
    name: `puma shoes 1`,
    imageUrl:`img/product.jpg`,
    altname:`pumashoes1`,
    category:`sport`,
    productCode: `PUMA117`,
    price:`1200`,
    rating: 2,
    brand:`nike`,
    description:`best shoes ever`,
    colors:[`red`,`blue`],
    stock:10,
    sizes:[7,8,9],
    discount: 5,
    onSale: true
};


const puma2={
    name: `puma shoes 1`,
    imageUrl:`img/product.jpg`,
    productCode: `PUMA117`,
    altname:`pumashoes2`,
    category:`casual`,
    price:`1200`,
    rating: 2,
    brand:`nike`,
    description:`best shoes ever`,
    colors:[`red`,`blue`],
    stock:10,
    sizes:[7,8,9],
    discount: 5,
    onSale: true
};


const puma=[puma1,puma2];


shoesData=[nike1,nike2,nike3,puma1,puma2,nike1,nike2,nike3,puma1,puma2];


//functions
function getShoesAsHtml(shoesData){
    return `
    <section class="productsCard">
    <section class="container">
    <img src="${shoesData.imageUrl}" alt="${shoesData.altname}" style="width:100%">
    <button type="button" class="heartBtn"><span class="material-icons">favorite</span></button>
    </section>
    <h1><strong>${shoesData.name}</strong></h1>
        <ul class="productCardList">
          <li class="productCardListItem><h3>${shoesData.description}</h3></li>
          <li class="productCardListItem"><h3>Price:$${shoesData.price}</h3></li>
          <li class="productCardListItem"><p>Average rating:${shoesData.rating}<p></li>
        </ul>
        <button type="button" class="productCardButton" id="${shoesData.productCode}"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        
        </section>`;
    
}

document.getElementById(`app`).innerHTML=shoesData.map(getShoesAsHtml).join('\n');


function addToCart(){
    alert("in function");
    document.getElementById(`${shoesData.productCode}`).style.backgroundColor=`red`;
    document.getElementById(`${shoesData.productCode}`).innerHTML=`Added To Cart!`;
} 



//execution
document.getElementById(`${shoesData.productCode}`).addEventListener("click",addToCart);


