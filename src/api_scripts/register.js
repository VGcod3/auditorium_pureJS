import { createUser } from '../../api/user_api';

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', (e) => {
    // toggle the type attribute
    // eslint-disable-next-line operator-linebreak
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
            role: formData.get('isAdmin') ? 'admin' : 'user',
        });

        localStorage.setItem('user', JSON.stringify(newUser));

        // redirect to login page
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
        // show error message to user
    }
});

const user = {
    avatar: 'https://th.bing.com/th/id/OIP.udIfmXkDTzwuDF4YKPHBPgHaHk?pid=ImgDet&rs=1',
    email: 'user@example.com',
};

// Select the avatar, email, and logout button elements in the navbar
const userAvatar = document.getElementById('userAvatar');
const userEmail = document.getElementById('userEmail');
const logoutButton = document.getElementById('logoutButton');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const dropdown = document.querySelector('#userDropdown');

// Initialize isLoggedIn state to false
let isLoggedIn = Boolean(localStorage.getItem('user'));

// Check if user is logged in
if (localStorage.getItem('user')) {
    // Parse user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    // Set the avatar and email to the user's values
    userAvatar.src = userData.avatar || user.avatar;
    userEmail.textContent = userData.email || user.email;

    // Show the user dropdown
    document.getElementById('userDropdown').classList.add('show');

    // Add logout button event listener
    logoutButton.addEventListener('click', () => {
        // Remove user data from localStorage and redirect to login page
        localStorage.removeItem('user');
        isLoggedIn = false;
        render();
        window.location.href = 'login.html';
    });

    // Set isLoggedIn to true
    isLoggedIn = true;
}

// Define render function
function render() {
    if (isLoggedIn) {
        // Hide the login and register buttons
        loginButton.classList.add('d-none');
        registerButton.classList.add('d-none');

        userAvatar.classList.remove('d-none');
        userEmail.classList.remove('d-none');
        logoutButton.classList.remove('d-none');
        dropdown.classList.remove('d-none');

        // Set the avatar and email to the user's values
        const userData = JSON.parse(localStorage.getItem('user'));
        userAvatar.src = userData.avatar || user.avatar;
        userEmail.textContent = userData.email || user.email;

        // Show the user dropdown
        document.getElementById('userDropdown').classList.add('show');
    } else {
        // Show the login and register buttons
        loginButton.classList.remove('d-none');
        registerButton.classList.remove('d-none');

        userAvatar.classList.add('d-none');
        dropdown.classList.add('d-none');
        userEmail.classList.add('d-none');
        logoutButton.classList.add('d-none');

        // Hide the user dropdown
        document.getElementById('userDropdown').classList.remove('show');
    }
}

// Initial render
render();
