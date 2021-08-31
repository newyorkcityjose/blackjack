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
function cardhandle(){
let fresa = card();
shuffleDeck(fresa);
let randomCard = Math.floor(Math.random() * 52)

return fresa[randomCard]
}
function blackjackCard(cardPoints){
  if(cardPoints[0] == 1 || cardPoints[0] === 'J' || cardPoints[0] === 'Q' || cardPoints[0] === 'A' || cardPoints[0] === 'K'){
    return 10;
  }else{
    return cardPoints[0];
  }
}
let arr = []
let cardvalue = blackjackCard(cardhandle())
const playerCard = document.querySelector('.show-player-card')
const playerPoints = document.querySelector('.show-player-points')
const computerCard = document.querySelector('.show-computer-card')
const deal = document.querySelector('.deal-card')


deal.addEventListener('click', function(){

  return cardClick()
})

function cardClick(){
  let cardPick = cardhandle();
  playerCard.innerHTML = cardPick;
  // console.log(blackjackCard(cardPick))
  arr.push(blackjackCard(cardPick))
  console.log(arr)
  return arr;
}
function displayPoint(){
  let cardpoint = cardClick()
  // let arr = []
  // arr.push(cardpoint)
  // console.log(arr)
}
displayPoint()