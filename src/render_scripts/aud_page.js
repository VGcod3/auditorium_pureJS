import Swiper from 'swiper';
import auditoriums from '../../auditoruims';
import 'swiper/swiper-bundle.min.css';

const container = document.querySelector('#aud_wrapper');
const auditoriumId = localStorage.getItem('selectedAuditoriumId');

const auditorium = auditoriums.find(
    (auditoriumItem) => auditoriumItem.id === +auditoriumId
);

const card = document.createElement('div');
card.className = 'my-4';

const inner = `
  <h1 class="text-left mb-4">${auditorium.name}</h1>
  <div class="row">
    <div class="col-lg-6 mb-4">
  <div class="swiper-container" style="overflow: hidden;">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="${auditorium.images[0]}" class="img-fluid rounded mr-2" alt="${auditorium.name}" />
      </div>
      <div class="swiper-slide">
        <img src="${auditorium.images[1]}" class="img-fluid rounded mr-2" alt="${auditorium.name}" />
      </div>
      <div class="swiper-slide">
        <img src="${auditorium.images[2]}" class="img-fluid rounded mr-2" alt="${auditorium.name}" />
      </div>
    </div>
  </div>
</div>
    <div class="col-lg-6 mb-4">
      <h4>Description</h4>
      <p>${auditorium.description}</p>
      <h4>Location</h4>
      <p>${auditorium.location}</p>
      <h4>Capacity: <span class="badge badge-primary">${auditorium.capacity}</span></h4>
      <form id="dateForm">
        <div class="form-group">
          <label for="datepicker">Select a date:</label>
          <input type="date" id="datepicker" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="time-input">Select a time:</label>
          <input type="time" id="time-input" class="form-control" required />
        </div>
        <button type="submit" class="mt-3 btn btn-primary btn-block">Book Now</button>
      </form>
    </div>
  </div>
`;

card.innerHTML = inner;
container.appendChild(card);

// Add event listener to the date form
const dateForm = document.getElementById('dateForm');
dateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('The Auditorium is booked');
});

Swiper('.swiper-container', {
    slidesPerView: 1,
});
