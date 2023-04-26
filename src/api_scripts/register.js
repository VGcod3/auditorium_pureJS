import { createUser } from '../../api/user_api';

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', (e) => {
    // toggle the type attribute
    const type =
        password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye icon
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevent default form submission

    // get form data
    const formData = new FormData(event.target);

    try {
        // create user
        const newUser = await createUser({
            // username: formData.get('username'),
            name: formData.get('firstname'),
            surname: formData.get('secondname'),
            email: formData.get('email'),
            // phone: formData.get('phone'),
            password: formData.get('password'),
            role: 'admin',
        });

        localStorage.setItem('user', JSON.stringify(newUser));
        console.log('New user created:', newUser);

        // redirect to login page
        window.location.href = 'login.html';
    } catch (error) {
        console.error(error);
        // show error message to user
    }
});
