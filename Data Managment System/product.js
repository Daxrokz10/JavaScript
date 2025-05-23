let prodSec = document.querySelector("#prodSec .row");
let products = JSON.parse(localStorage.getItem("products")) || [];

function getProduct() {
   
    products.forEach((prod, index) => {
        let card = document.createElement("div");
        card.className = "col-md-4 mb-3 mt-3";
        card.innerHTML = `
        <div class="card shadow-lg border-0 h-100">
            <img src="${prod.pimage}" class="card-img-top object-fit-cover" alt="${prod.pname}" style="height: 220px; object-fit: cover; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title fw-bold text-primary mb-2">${prod.pname}</h5>
                <p class="card-text mb-1"><span class="fw-semibold">Price:</span> <span class="text-success">₹${prod.price}</span></p>
                <p class="card-text mb-1"><span class="fw-semibold">Stock:</span> <span class="${prod.stock > 0 ? 'text-success' : 'text-danger'}">${prod.stock > 0 ? prod.stock : 'Out of Stock'}</span></p>
                <p class="card-text mb-3"><span class="fw-semibold">Type:</span> ${prod.type}</p>
                <a href="#" class="btn btn-gradient-primary w-100 mt-auto" style="background: linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%); color: #fff; border: none;">Add to Cart</a>
            </div>
        </div>`
        prodSec.appendChild(card);
    });
}

getProduct();

