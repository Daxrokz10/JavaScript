function generateBill() {
    let srno = document.getElementById("srno").value;
    let product = document.getElementById("product").value;
    let quantity = parseFloat(document.getElementById("qty").value);  // fixed id
    let rate = parseFloat(document.getElementById("rate").value);
    let total = quantity * rate;

    document.getElementById("sr-disp").innerText = srno;
    document.getElementById("pr-disp").innerText = product;
    document.getElementById("qty-disp").innerText = quantity;
    document.getElementById("rate-disp").innerText = rate.toFixed(2);
    document.getElementById("total-disp").innerText = total.toFixed(2);
    document.getElementById("total-final-disp").innerText = total.toFixed(2);
}