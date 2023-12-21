const cardArray = [
	{
		name: 'fries',
		img: 'images/fries.png',
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png',
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png',
	},
	{
		name: 'pizza',
		img: 'images/pizza.png',
	},
	{
		name: 'fries',
		img: 'images/fries.png',
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png',
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png',
	},
	{
		name: 'pizza',
		img: 'images/pizza.png',
	},
];

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const gridDisplay = document.querySelector('#grid');

cardArray.sort(() => 0.5 - Math.random());

function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement('img');
		card.setAttribute('src', 'images/blank.png');
		card.setAttribute('data-id', i);
		card.addEventListener('click', flipcard);
		// console.log(card, i)
		gridDisplay.append(card);
	}
}
createBoard();

function checkForMatch() {
	//check for match if matched turn to white image
	//get all the images to change it
	const cards = document.querySelectorAll('#grid img');
	const optionOneId = cardsChosenIds[0];
	const optionTwoId = cardsChosenIds[1];

	if (optionOneId === optionTwoId) {
		alert('You have clicked the same image');
		cards[optionOneId].setAttribute('src', 'images/blank.png');
	}
	if (cardsChosen[0] === cardsChosen[1] && optionOneId != optionTwoId) {
		alert('You found a match');
		cards[optionOneId].setAttribute('src', 'images/black.png');
		cards[optionTwoId].setAttribute('src', 'images/black.png');

		cards[optionOneId].removeEventListener('click', flipcard);
		cards[optionTwoId].removeEventListener('click', flipcard);

		cardsWon.push(cardsChosen);
	} else {
		cards[optionOneId].setAttribute('src', 'images/blank.png');
		cards[optionTwoId].setAttribute('src', 'images/blank.png');
	}

	const scoreDisplay = document.getElementById('score');
	scoreDisplay.textContent = cardsWon.length;
	cardsChosen = [];
	cardsChosenIds = [];

	if (cardsWon.length == cardArray.length / 2) {
		scoreDisplay.textContent = 'You Won';
		
	}
}

function flipcard() {
	const cardId = this.getAttribute('data-id');

	cardsChosen.push(cardArray[cardId].name);
	cardsChosenIds.push(cardId);
	//we got the clicked images name in cardsChosen list
	//now make a flip on the img
	this.setAttribute('src', cardArray[cardId].img);

	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}
