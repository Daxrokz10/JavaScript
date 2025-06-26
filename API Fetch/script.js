const API_URL = 'https://jsonplaceholder.typicode.com/users';

// fetch(API_URL, {
//     method: 'GET'
// })
// .then((res) => res.json)
// .then((data) => {
//     data.forEach(user => {
//         console.log(`Name: ${user.name}, Email: ${user.email}`);
//     });
// })
// .catch((err) => {
//     console.log(err);
// });


async function getData() {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
}

getData()
.then(data =>{
    data.forEach(user => {
        console.log(`name: ${user.name}`);
    });
});