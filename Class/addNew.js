class Company{
  constructor(cname,cloc){
    this.comapnyName = cname;
    this.companyLocation = cloc;
  }
}

class Employee extends Company{
  constructor(name, salary, post, manager, company) {
    super();
    this.name = name;
    this.salary = salary;
    this.post = post;
    this.manager = manager;
    this.company = company;
  }
}

let form = document.getElementById("form");
let ename = document.getElementById("ename");
let salary = parseFloat(document.getElementById("salary"));
let post = document.getElementById("post");
let manager = document.getElementById("manager");
let company = document.getElementById("company");

let employees = JSON.parse(localStorage.getItem("employees")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emp = new Employee( 
    ename.value,
    salary.value,
    post.value,
    manager.value,
    company.value
  );
  employees.push(emp);
  localStorage.setItem("employees", JSON.stringify(employees));
  form.reset();
  alert("Employee added successfully!");
});
