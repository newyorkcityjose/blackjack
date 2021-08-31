function card() {
  let rank = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queens',
    'King',
    'Ace',
  ];
  let suit = [' Hearts', ' Spades', ' Clubs', ' Dimonds'];

  let deckCard = [];

  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      deckCard.push(rank[j] + suit[i]);
    }
  }
  return deckCard;
}

function shuffleDeck(shuffle) {
  for (let i = 0; i < 52; i++) {
    let random = Math.floor(Math.random() * 52);
    shuffle[i] = shuffle[random];
  }
}
function shuffleDeckComputer(shufflecard) {
  for (let i = 0; i < 52; i++) {
    let random = Math.floor(Math.random() * 52);
    shufflecard[i] = shufflecard[random];
  }
}

function cardhandlePlayer() {
  let fresa = card();
  shuffleDeck(fresa);
  let randomCard = Math.floor(Math.random() * 52);
  return fresa[randomCard];
}
function cardhandleComputer() {
  let fresa = card();
  shuffleDeck(fresa);
  let randomCard = Math.floor(Math.random() * 52);
  return fresa[randomCard];
}
console.log(cardhandlePlayer())
console.log(cardhandleComputer())

function blackjackCard(cardPoints) {
  if (
    cardPoints[0] == 1 ||
    cardPoints[0] === 'J' ||
    cardPoints[0] === 'Q' ||
    cardPoints[0] === 'A' ||
    cardPoints[0] === 'K'
  ) {
    return 10;
  } else {
    return cardPoints[0];
  }
}
let arr = [];
let cardvaluePlayer = blackjackCard(cardhandlePlayer());
let cardvalueComputer = blackjackCard(cardhandleComputer());

const playerCard = document.querySelector('.show-player-card');
const playerPoints = document.querySelector('.show-player-points');
const computerCard = document.querySelector('.show-computer-card');
const deal = document.querySelector('.deal-card');

deal.addEventListener('click', function () {
  cardPlayerDeal();
  arrSum();
  let check = arrSum();
  if (check > 21) {
    console.log('Over 21');
  } else {
    playerPoints.innerHTML = check;
  }
});

function cardPlayerDeal() {
  let cardPick = cardhandlePlayer();
  playerCard.innerHTML = cardPick;
  arr.push(blackjackCard(cardPick));
  console.log(arr);
  return arr;
}
function cardComputerDeal() {
  let cardPick = cardhandleComputer();
  playerCard.innerHTML = cardPick;
  arr.push(blackjackCard(cardPick));
  console.log(arr);
  return arr;
}
function arrSum() {
  let sum = arr.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
  console.log(sum);
  return sum;
}
function displayPoint() {
  let playerPoints = cardPlayerDeal();
  let computerPoints = cardComputerDeal();
  console.log(playerPoints);
}

displayPoint();
