let empTable = document.querySelector("#emp-table tbody");
let employees = JSON.parse(localStorage.getItem("employees")) || [];

function getData() {
   
    employees.forEach((emp, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.salary}</td>
        <td>${emp.post}</td>
        <td>${emp.manager}</td>
        `;
        empTable.appendChild(row);
    });
}

getData();

