const API_URL = 'https://jsonplaceholder.typicode.com/users';
let Users = [];
const table = document.getElementById('table');
const headings = document.getElementById('headings');

async function fetchUsers() {
    let res = await fetch(API_URL);
    let users = await res.json();

    Users = users;
    console.log(Users);

    getHeadings();
    
    view();
}


fetchUsers();

function view() {
    table.innerText = ''
    Users.forEach(user=> {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>
            ${user.id}
        </td>
        <td>
            ${user.name}
        </td>
        <td>
            ${user.username}
        </td>
        <td>
            ${user.email}
        </td>
        <td>
            ${user.address.city}
        </td>
        `
        table.appendChild(tr);

    })
}
let getHeadings = (()=>{
    let user = Users[0];
    let row = document.createElement('tr');
    for(let key in user){
        let cell = document.createElement('th');
        cell.textContent = key
        row.appendChild(cell);
    }
    headings.append(row);
})


