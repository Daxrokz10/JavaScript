let empTable = document.querySelector("#emp-table tbody");
let employees = JSON.parse(localStorage.getItem("employees")) || [];
let companies = JSON.parse(localStorage.getItem("companies")) || [];
let company_select = document.getElementById('company');
let search = document.getElementById('search-btn');
search.addEventListener('click', () => {
    empTable.innerHTML = "";
    getData();
});

function getCompanies() {
    company_select.innerHTML = `<option value="">Select company</option>`;
    companies.forEach((comp) => {
        company_select.innerHTML += `<option value="${comp.comapnyName}">${comp.comapnyName}</option>`;
    });
}

function getData() {

    employees.forEach((emp, index) => {
        if (company_select.value === emp.company ) {
            let row = document.createElement("tr");
            row.innerHTML = `
        <td>${index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.salary}</td>
        <td>${emp.post}</td>
        <td>${emp.manager}</td>
        <td>${emp.company}</td>
        `;
            empTable.appendChild(row);
        }
    });
}

getData();
getCompanies();



