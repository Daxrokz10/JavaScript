let user = document.getElementById('user');
        let pass = document.getElementById('pass');
        handleForm = ()=>{
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            user.innerHTML = `Username: ${username}`;
            pass.innerHTML = `Password: ${password}`;
                
        }
        document.getElementById('clear').addEventListener('click', () => {
            const username = document.getElementById('username');
            const password = document.getElementById('password');
            username.value = ''; 
            password.value = ''; 
            user.innerHTML = ''; 
            pass.innerHTML = ''; 
        });