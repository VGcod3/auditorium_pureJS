import { loginUser } from '../../api/user_api';

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await loginUser(email, password);

        // Save user ID in local storage
        console.log(response);
        localStorage.setItem(
            'userData',
            JSON.stringify(Object.assign(response, { password }))
        );

        // Redirect to home page
        window.location.href = 'index.html';
    } catch (error) {
        // Display error message
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('alert', 'alert-danger');
        errorMessage.textContent = 'Incorrect email or password.';
        loginForm.appendChild(errorMessage);
    }
});
