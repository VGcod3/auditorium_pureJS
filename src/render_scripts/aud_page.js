import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { fetchAuditoriumById } from '../../api/auditoriums_api';
import auditoriums from '../../auditoruims';

const container = document.querySelector('#aud_wrapper');
const auditoriumId = localStorage.getItem('selectedAuditoriumId');

const localAuditorium = auditoriums.find(
    (auditoriumItem) => auditoriumItem.id === +auditoriumId
);

function renderAudPage() {
    const card = document.createElement('div');
    card.className = 'my-4';

    const inner = `<h1 class="text-left mb-4">${
        auditorium.name || 'Auditorium'
    }</h1>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="swiper-container" style="overflow: hidden;">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="${auditorium.images[0]}"
                     class="img-fluid rounded mr-2" />
              </div>
              <div class="swiper-slide">
                <img src="${
                    auditorium.images[1]
                }" class="img-fluid rounded mr-2" />
              </div>
              <div class="swiper-slide">
                <img src="${
                    auditorium.images[2]
                }" class="img-fluid rounded mr-2" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <h4>Description</h4>
          <p>${auditorium.description || 'No description available.'}</p>
          <h4>Location</h4>
          <p>${auditorium.location || 'No location available.'}</p>
          <h4>Capacity: 
          <span class="badge badge-primary bg-primary">
          ${auditorium.capacity}</span></h4>
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
    container.textContent = '';
    container.appendChild(card);
}

const { email, password } = JSON.parse(localStorage.getItem('user'));

const auditorium = {
    name: localAuditorium.name,
    description: localAuditorium.description,
    images: localAuditorium.images,
    location: localAuditorium.location,
    capacity: localAuditorium.capacity,
    price: 0,
};

const FetchAndUpdateAuditoriumData = async () => {
    try {
        const responseData = await fetchAuditoriumById(
            auditoriumId,
            email,
            password
        );

        const { seats, address, price_per_hour } = responseData;

        auditorium.capacity = seats;
        auditorium.location = address;
        auditorium.price = price_per_hour;

        renderAudPage();
    } catch (error) {
        console.warn(error);
        // console.warn('Failed to fetch auditorium data, using local file data.');
    }
};
FetchAndUpdateAuditoriumData();

renderAudPage();

// Add event listener to the date form
const dateForm = document.getElementById('dateForm');
dateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('The Auditorium is booked');
});

new Swiper('.swiper-container', {
    slidesPerView: 1,
});
