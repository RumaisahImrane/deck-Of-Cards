// Creating a deck of 52 cards


//Creating an empty array
let deckOfCards = []; 
      
// Adding the cards 
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

// Mapping each card to the corresponding number value
function valueOfCard(myCard) {
  switch (myCard) {
      // Jack, Queen and King cards are worth 10
      case 'Jack':
      case 'Queen':
      case 'King':
          return 10; 
      // Ace card is worth 11
      case 'Ace':
          return 11; 
      default:
          return parseInt(myCard);
  }
}
console.log("Giving each card a value:")

// Creating the card deck
function generateDeckOfCards() {
  // repeated 4x for the 4 suits 
  for (let i = 0; i < 4; i++) {  
    // pushing each card from cardValues into deckOfCards
    for (let myCard of cardValues) {
      deckOfCards.push(myCard); 
    }
  }
}

// Find the value of a card
function getValueOfCard(myCard) {
  return mappingCardValue[myCard];  
}

generateDeckOfCards();

console.log("Full deck of cards:", deckOfCards);


// Shuffle deck of cards using Fisher-Yates shuffle algorithm
// Takes each card, chooses another card at random and swaps them to shuffle
// Continues down the loop, until currentIndex is 0
function shuffledDeckOfCards() {
  let currentIndex = deckOfCards.length; // takes the length of deck
  let randomIndex, tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the current element with the random one
    tempValue = deckOfCards[currentIndex];
    deckOfCards[currentIndex] = deckOfCards[randomIndex];
    deckOfCards[randomIndex] = tempValue;
  }
}

shuffledDeckOfCards();

// Draw 2 cards from the shuffled deck and place in drawnCards
function drawCards() {
  const drawnCards = [deckOfCards.pop(), deckOfCards.pop()];  
  return drawnCards;
}

// drawCards: array containing two random cards drawn from the shuffled deck of cards
const selectedCards = drawCards();

console.log("Shuffled deck of cards:", deckOfCards);
console.log("Two cards drawn at random from shuffled deck:", selectedCards);

