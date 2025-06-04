let form = document.getElementById('login-form');
let inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = {};

    // Clear previous messages
    form.querySelectorAll('span').forEach(span => span.remove());

    inputs.forEach((input) => {
        let name = input.name;
        let value = input.value.trim();

        if (value === '') {
            errors[name] = value;
            let span = document.createElement('span');
            span.classList.add('text-danger');
            span.innerText = `${name} is required`;
            input.parentNode.insertBefore(span, input.nextSibling);
        } else {
            let span = document.createElement('span');
            span.classList.add('text-success');
            span.innerText = `Valid ${name}`;
            input.parentNode.insertBefore(span, input.nextSibling);
        }

    });

    if(Object.keys(errors).length == 0){
        form.submit();
    }

});
