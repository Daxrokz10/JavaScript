class Company {
    constructor(companyName) {
        this.company_name = companyName;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(emp => emp.getEmpDetails());
    }
}

class Employee {
    constructor(company, name, post, id) {
        this.company = company;
        this.ename = name;
        this.post = post;
        this.id = id;
    }
    getEmpDetails() {
        console.log(`Employee name is ${this.ename}, Employee Post is ${this.post}, employee's ID is ${this.id} & ${this.ename} works at ${this.company.company_name}`);
    }
}

// Store multiple companies
const companies = [
    new Company('Tata'),
    new Company('Infosys'),
    new Company('Reliance')
];

// Add employees to companies
companies[0].addEmployee(new Employee(companies[0], 'Daksh', 'Sales Officer', Date.now()));
companies[0].addEmployee(new Employee(companies[0], 'Amit', 'Manager', Date.now() + 1));
companies[1].addEmployee(new Employee(companies[1], 'Priya', 'Developer', Date.now() + 2));
companies[2].addEmployee(new Employee(companies[2], 'Sara', 'Analyst', Date.now() + 3));

// List all employees in each company
companies.forEach(company => {
    console.log(`--- Employees at ${company.company_name} ---`);
    company.listEmployees();
});


