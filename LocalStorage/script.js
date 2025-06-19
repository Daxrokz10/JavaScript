let inputs = document.querySelectorAll('input');
let user = {};
let users = JSON.parse(localStorage.getItem('userdata')) || [];

let table = document.getElementById('user-table-body');



inputs.forEach(input=>{
    input.addEventListener('input', (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        user = {...user,[name]:value};

    });
})

let editIndex = null;

let handleSubmit = (()=>{
    if (editIndex !== null) {
        // Edit mode
        users[editIndex] = { ...user, id: users[editIndex].id };
        editIndex = null;
    } else {
        // Add mode
        id = Date.now();
        users.push({ ...user, id });
    }
    localStorage.setItem('userdata', JSON.stringify(users));
    displayData();
    document.getElementById('form').reset();
    user = {};
})




let displayData = (()=>{
    table.innerHTML = '';
    users.forEach((userinstance, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${userinstance.email || ''}</td>
            <td>${userinstance.password || ''}</td>
            <td>
                <button class="btn btn-warning" onclick="editUser(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        table.appendChild(row);
    });
})

// Call displayData on page load to show existing users
displayData();

window.editUser = function(index) {
    const userinstance = users[index];
    // Populate form fields
    Object.keys(userinstance).forEach(key => {
        if (key !== 'id' && document.querySelector(`[name='${key}']`)) {
            document.querySelector(`[name='${key}']`).value = userinstance[key];
            user[key] = userinstance[key];
        }
    });
    editIndex = index;
}

window.deleteUser = function(index) {
    users.splice(index, 1);
    localStorage.setItem('userdata', JSON.stringify(users));
    displayData();
}


