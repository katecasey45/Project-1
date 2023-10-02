let product
const api_url = "https://fakestoreapi.com/"

function setup() {
  createCanvas(400, 400);

  fetchProduct();

  let buyButton = createButton('Buy Now');
  buyButton.position(150, height+10);
  buyButton.mousePressed(buyProduct)
}


function fetchProduct() {
  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));
} 


function draw() {
  background(150);

  textAlign(CENTER)
  textSize(16)

  if (product) { 
text('Title: ${product.title}');
text('Price: ${product.price}');
  } else{
    text("Error fetching product");
  }
}


function buyProduct() {
  window.alert('are you sure? What about this one instead?')

fetchProduct()
}

