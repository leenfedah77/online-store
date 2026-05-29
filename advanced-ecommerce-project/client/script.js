
const productsContainer=document.getElementById("products");
const cartPanel=document.getElementById("cart-panel");
const cartItemsDiv=document.getElementById("cart-items");
const cartCount=document.getElementById("cart-count");
const totalSpan=document.getElementById("total");
let cart=[];

document.querySelector(".cart-icon").addEventListener("click",()=>{cartPanel.classList.toggle("active");});
document.getElementById("close-cart").addEventListener("click",()=>{cartPanel.classList.remove("active");});

fetch("http://localhost:3000/products")
.then(res=>res.json())
.then(data=>{
data.forEach(product=>{
productsContainer.innerHTML += `
<div class="card">
<img src="${product.image}">
<div class="card-content">
<h3>${product.name}</h3>
<div class="price">${product.price}$</div>
<button onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</button>
</div>
</div>`;
});
});

function addToCart(product){
cart.push(product);
updateCart();
}

function updateCart(){
cartItemsDiv.innerHTML="";
let total=0;
cart.forEach(item=>{
total += item.price;
cartItemsDiv.innerHTML += `
<div class="cart-item">
<h4>${item.name}</h4>
<p>${item.price}$</p>
</div>`;
});
cartCount.innerText=cart.length;
totalSpan.innerText=total;
}
