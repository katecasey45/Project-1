// let json
// const api_url = "https://fakestoreapi.com/"

// function preload() {
//   json = loadJSON("https://fakestoreapi.com/products");
// }

// function setup() {
//   noCanvas();

//   let d1 = createDiv();
// d1.position(0,0);
//   let b = createButton("Buy Now");
//   b.mouseClicked( clicked );
//   console.log(json[0]);
//   createP(json[0].title);
//   img = createImg(json[0].image);
//   img.style("width","200px");
//   createP(json[0].price);

//   let b2 = createButton("Buy Now");
//   b2.mouseClicked( clicked );
//   console.log(json[1]);
//   createP(json[1].title);
//   img = createImg(json[1].image);
//   img.style("width","200px");
//   createP(json[1].price);
// }

// function clicked() {
//   let p = createP(json[ floor(random(20)) ].title);
//   p.position( random(displayWidth), random(displayHeight) )
// }


let json;
let count = 0;
let keysArray;

function preload() {
  json = loadJSON("stuff.json", loaded);
}

function loaded() {
  keysArray = Object.keys(json);
  count = keysArray.length;
  displayProduct();  
}

function setup() {
  noCanvas();
}

function displayProduct() {
  let product = json[floor(random(count))];
  let productDiv = createDiv();
  let productP = createP(product.title);
  productP.parent(productDiv);
  let img = createImg(product.image);
  img.parent(productDiv);
  img.style("width", "200px");
  createP(product.price);
  let buyButton = createButton("Buy Now");
  buyButton.mouseClicked(displayProduct);
}

