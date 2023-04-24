const moviesSelect = document.querySelector('#movies');
let moviePrice = Number(moviesSelect.value);

const countSpan = document.querySelector('#count');
const totalSpan = document.querySelector('#total');

let numberOfTickets = Number(countSpan.innerHTML);

const seatsContainer = document.querySelector('.seats-container');

seatsContainer.addEventListener('click', onSeatsSelectionChange);

function onSeatsSelectionChange(event) {
	const clickedElement = event.target;

	if (
		clickedElement.classList.contains('seat') &&
		!clickedElement.classList.contains('occupied')
	) {
		clickedElement.classList.toggle('selected');
	}
	updateTicketsNumber();
	updateTotalPrice();
}

function updateTicketsNumber() {
	const selectedSeats = document.querySelectorAll('.row .seat.selected');
	numberOfTickets = selectedSeats.length;
	countSpan.innerHTML = numberOfTickets;
}

function updateTotalPrice() {
	const selectedSeats = document.querySelectorAll('.row .seat.selected');
	moviePrice = Number(moviesSelect.value);
	const totalPrice = moviePrice * selectedSeats.length;
	totalSpan.innerHTML = totalPrice;
}

moviesSelect.addEventListener('change', onChangeMovie);

function onChangeMovie(event) {
	ticketPrice = Number(event.target.value);
	updateTotalPrice();
}
