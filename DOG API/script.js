const DOG_API = 'https://dog.ceo/api/breeds/image/random';
let img = document.getElementById('dogImage');
let loader = document.getElementById('loader');

async function fetchDog() {
    loader.style.display = 'block';
    const res = await fetch(DOG_API);
    const data = await res.json();
    img.src = './loading-thinking.gif';
    setTimeout(()=>{
        loader.style.display = 'none';
        img.src = data.message;
    },1000);
}



