let img = document.getElementById("dogImage");
let loader = document.getElementById("loader");
let DOG_BREED_URL = "https://dog.ceo/api/breeds/list/all";
let dogBreeds = [];
let dogDropdown = document.getElementById("dogDropdown");

async function getDogBreeds() {
  try {
    let res = await fetch(DOG_BREED_URL);
    let data = await res.json();

    dogBreeds = Object.keys(data.message);

    loadList();
  } catch (error) {
    console.log(error.message);
  }
}

function loadList() {
  dogBreeds.forEach((breed) => {
    let option = document.createElement("option");
    option.value = breed;
    option.innerText = breed;
    dogDropdown.appendChild(option);
  });
}

function showToast(message, isSuccess = true) {
  const toast = document.createElement('div');
  toast.className = `toast align-items-center text-white ${isSuccess ? 'bg-success' : 'bg-danger'} border-0 position-fixed top-0 end-0 m-4`;
  toast.style.zIndex = 9999;
  toast.role = 'alert';
  toast.ariaLive = 'assertive';
  toast.ariaAtomic = 'true';
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;
  document.body.appendChild(toast);
  const bsToast = new bootstrap.Toast(toast, { delay: 2000 });
  bsToast.show();
  toast.addEventListener('hidden.bs.toast', () => toast.remove());
}

dogDropdown.addEventListener("change", async (e) => {
  let breed = e.target.value;
  try {
    loader.style.display = "block";
    let res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    let data = await res.json();
    img.src = "./loading-thinking.gif";
    setTimeout(() => {
      loader.style.display = "none";
      img.src = data.message;
      showToast('Dog image loaded successfully!', true);
    }, 1500);
  } catch (error) {
    loader.style.display = "none";
    showToast('Failed to load dog image!', false);
    console.log(error.message);
  }
});

getDogBreeds();
