import auditoriums from '../../auditoruims';
import addBookButtonListener from '../bookButton';

const container = document.querySelector('#cards_wrapper');

auditoriums.forEach((auditorium) => {
    const card = document.createElement('div');
    card.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';

    const inner = `
    <div class="card">
      <img src="${auditorium.images[0]}" class="card-img-top" alt="${auditorium.name}" />
      <div class="card-body">
        <h5 class="card-title">${auditorium.name} <span class="badge bg-primary">${auditorium.capacity}</span></h5>
        <p class="card-text">${auditorium.location}</p>
        <a href="#" class="btn btn-primary w-100" data-id="${auditorium.id}">Book</a>
      </div>
    </div>
  `;

    card.innerHTML = inner;

    container.appendChild(card);

    const bookButton = card.querySelector('.btn');
    addBookButtonListener(bookButton, auditorium.id);
});
