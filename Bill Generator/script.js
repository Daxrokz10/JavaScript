let billItems = [];

document.getElementById('addItemBtn').addEventListener('click', function() {
    const srno = document.getElementById("srno").value;
    const product = document.getElementById("product").value;
    const qty = parseFloat(document.getElementById("qty").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (!srno || !product || isNaN(qty) || isNaN(rate)) {
        alert("Please fill all fields correctly.");
        return;
    }

    billItems.push({
        srno,
        product,
        qty,
        rate,
        amount: qty * rate
    });

    document.getElementById("srno").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("rate").value = '';
});

document.getElementById('ClearBill').addEventListener('click', function() {
    billItems = [];
    const tbody = document.querySelector("#billModal tbody");
    tbody.innerHTML = '';
    document.getElementById("total-final-disp").innerText = '0.00';
    document.getElementById("total-disp") && (document.getElementById("total-disp").innerText = '0.00');
}); 

function generateBill() {
    const tbody = document.querySelector("#billModal tbody");

    let total = 0;
    billItems.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.srno}</td>
            <td>${item.product}</td>
            <td>${item.qty}</td>
            <td>${item.rate.toFixed(2)}</td>
            <td>${item.amount.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
        total += item.amount;
    });

    document.getElementById("total-final-disp").innerText = total.toFixed(2);
    document.getElementById("total-disp") && (document.getElementById("total-disp").innerText = total.toFixed(2));
}