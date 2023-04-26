export default function addBookButtonListener(button, id) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('selectedAuditoriumId', id);
        window.location.href = 'auditorium.html';
    });
}
