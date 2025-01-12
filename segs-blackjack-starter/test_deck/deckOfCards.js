// Creating a deck of 52 cards


//Creating an empty array to hold cards
let deckOfCards = []; 
      
// Adding the cards 
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

// Mapping each card to the equivelant value
const mappingCardValue = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'Jack': 10,
    'Queen': 10,
    'King': 10,
    'Ace': 11
  };

// Creating the card deck
function generateDeckOfCards() {
  for (let i = 0; i < 4; i++) {  // for 4x suits 
    for (let myCard of cardValues) {
      deckOfCards.push(myCard);  
    }
  }
}

function getValueOfCard(myCard) {
  return mappingCardValue[myCard];  
}

generateDeckOfCards();

console.log("Deck of cards:", deckOfCards);

