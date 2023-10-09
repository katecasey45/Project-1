let json;
let count = 0;
let keysArray;
let popUpCount = 0;

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
 
  if (popUpCount === 0) {
    productDiv.style('background-color','white' ); 
  } else {
    productDiv.style('background-color','red' ); 
    
    let exitButton = createButton("X")
    exitButton.mouseClicked(() => {
      productDiv.remove()
    } )
    exitButton.parent(productDiv)

    let confirmationMessage = createP("Are you sure? What about this one instead?");
    confirmationMessage.parent(productDiv);
    confirmationMessage.style('font-weight', 'bold');
    confirmationMessage.style('font-family', 'Arial, sans-serif');

  }

  productDiv.style('padding', '20px');
  productDiv.style('position', 'absolute');
  productDiv.style('border', '2px solid black');
  productDiv.center();
  productDiv.position(random(windowWidth - 200), random(windowHeight - 200));
  
  let productP = createP(product.title);
  productP.parent(productDiv);
  let img = createImg(product.image);
  img.parent(productDiv);
  img.style("width", "200px");
  createP(product.price).parent(productDiv);
  
  let buyButton = createButton("Buy Now");
  buyButton.mouseClicked(() => {
    popUpCount++;
    displayProduct();
  });
  buyButton.parent(productDiv);
}

