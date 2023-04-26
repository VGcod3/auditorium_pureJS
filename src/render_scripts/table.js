import auditoriums from '../../auditoruims';

import addBookButtonListener from '../bookButton';

const tableBody = document.getElementById('table-body');

auditoriums.forEach((auditorium, index) => {
    const row = document.createElement('tr');
    const numberCell = document.createElement('th');
    numberCell.scope = 'row';
    numberCell.textContent = index + 1;
    row.appendChild(numberCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = auditorium.name;
    row.appendChild(nameCell);

    const capacityCell = document.createElement('td');
    capacityCell.textContent = auditorium.capacity;
    row.appendChild(capacityCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = auditorium.location;
    row.appendChild(locationCell);

    const actionCell = document.createElement('td');
    const bookButton = document.createElement('a');
    bookButton.href = '#';
    bookButton.className = 'btn btn-primary';
    bookButton.textContent = 'Book Now';
    bookButton.setAttribute('data-id', auditorium.id);
    actionCell.appendChild(bookButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);

    // Add click event listener to the "Book" button
    addBookButtonListener(bookButton, auditorium.id);
});
