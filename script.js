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

function cardhandlePlayer() {
  let fresa = card();
  shuffleDeck(fresa);
  let randomCard = Math.floor(Math.random() * 52);
  return fresa[randomCard];
}


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
let arrplayer = [];
// let cardvaluePlayer = blackjackCard(cardhandlePlayer());
// let cardvalueComputer = blackjackCard(cardhandleComputer());

const playerCard = document.querySelector('.show-player-card');
const playerPoints = document.querySelector('.show-player-points');
const computerCard = document.querySelector('.show-computer-card');
const deal = document.querySelector('.deal-card');
const stand = document.querySelector('.stand');
const gameOver = document.querySelector('.game-over');

let sum = 0;
let arr = [];
let arrComputer = [];
let sumComputer = 0;
deal.addEventListener('click', function () {
  let cardPlayer = cardhandlePlayer();
  let cardComputer = cardhandlePlayer();

  let playerView = blackjackCard(cardPlayer);
  let computerView = blackjackCard(cardComputer);

  arrComputer.push(computerView);
  arr.push(playerView);
  sum = arrSumPlayer(arr);
  sumComputer = arrSumPlayer(arrComputer);
  // console.log(arr)
  console.log(sumComputer);
  console.log(arrComputer);
  if (sum > 21) {
    console.log('Over 21');
    deal.style.display = 'none';
    playerPoints.innerHTML = 'Bust';
    stand.style.display = 'none';
    gameOver.style.display = 'block';
  }
  if (sum === 21) {
    playerPoints.innerHTML = 'You Win';
    gameOver.style.display = 'block';
    stand.style.display = 'none';
  } else {
    playerPoints.innerHTML = sum;
  }
});
gameOver.style.display = 'none';
stand.addEventListener('click', function () {
  deal.style.display = 'none';
  playerPoints.innerHTML = 'Player score ' + sum;
  computerCard.innerHTML = 'Computer score ' + sumComputer;

  if (sum > sumComputer) {
    console.log(sum + ' sum ' + sumComputer + ' sumComputer');
    playerCard.innerHTML = 'You Win!';
    gameOver.style.display = 'block';
    stand.style.display = 'none';
  }
  if (sum === sumComputer) {
    playerCard.innerHTML = 'Draw';
    stand.style.display = 'none';
    gameOver.style.display = 'block';
  }
  if (sum < sumComputer) {
    console.log(sum + ' sum ' + sumComputer + ' sumComputer');
    console.log('you lose!');
    playerCard.innerHTML = 'You Lose!';
    gameOver.style.display = 'block';
    stand.style.display = 'none';
  }
  if (sumComputer > 21) {
    console.log(sum + ' sum ' + sumComputer + ' sumComputer');
    playerCard.innerHTML = 'You Win!';
    gameOver.style.display = 'block';
    stand.style.display = 'none';
  }
});
gameOver.addEventListener('click', function () {
  window.location.reload();
});

function cardPlayerDeal(cardPick) {
  cardPick = cardhandlePlayer();
  // playerCard.innerHTML = cardPick;
  arrplayer.push(blackjackCard(cardPick));
  console.log(arrplayer);
  return arrplayer;
}

function arrSumPlayer(sumArray) {
  return sumArray.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
}
function arrSumComputer() {
  let sumComputer = arr.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
  console.log(sum);
  return sumComputer;
}
function displayPoint() {
  let playerPoints = cardPlayerDeal();
  let computerPoints = cardComputerDeal();
  console.log(playerPoints);
}

