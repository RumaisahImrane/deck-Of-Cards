// Creating a deck of cards
// 52 cards - 4 suits of 13 cards


//Creating an empty array
let deckInUse = []; 
      
// Adding the cards 
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

// Mapping each card to the corresponding number value
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

console.log("Giving each card a value")

// Creating the card deck
function generateDeckInUse() {
  const newDeckOfCards = [];
  // repeated 4x for the 4 suits 
  for (let i = 0; i < 4; i++) {  
    // pushing each card from cardValues into deckOfCards
    for (let myCard of cardValues) {
      newDeckOfCards.push(myCard); 
    }
  }
  console.log("Full deck of cards:", newDeckOfCards.length);
  return newDeckOfCards;
}


// Find the value of a card
function determineCardValue(myCard) {
  return mappingCardValue[myCard];  
}


// Shuffle deck of cards using Fisher-Yates shuffle algorithm
// Takes each card, chooses another card at random and swaps them to shuffle
// Continues down the loop, until currentIndex is 0
function shuffledDeckOfCards(playingDeck) {
  let currentIndex = playingDeck.length; // takes the length of deck
  let randomIndex, tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the current element with the random one
    tempValue = playingDeck[currentIndex];
    playingDeck[currentIndex] = playingDeck[randomIndex];
    playingDeck[randomIndex] = tempValue;
  }
  return playingDeck;
}

// Draw 2 cards from the shuffled deck and place in drawnCards
function drawnCards(playingDeck) {
  return [playingDeck.pop(), playingDeck.pop()];  
}

deckInUse = generateDeckInUse(); 
deckInUse = shuffledDeckOfCards(deckInUse);
console.log("Shuffled deck of cards", deckInUse);


// drawnCards: array containing two random cards drawn from the shuffled deck of cards
const chosenCards = drawnCards(deckInUse);
console.log("Two cards drawn at random from shuffled deck:", chosenCards);

// Add the cards values together
// Getting the value of both cards
let firstCardValue = determineCardValue(chosenCards[0]);  
let secondCardValue = determineCardValue(chosenCards[1]);  
// Add the values together
let finalCardValue = firstCardValue + secondCardValue;

console.log("The sum of both cards", finalCardValue);

// Taking the summed card value to decide the next step
if (finalCardValue === 21) {
  console.log("Winner! You have blackjack! :) ");
} else if (finalCardValue > 21) {
  console.log("You are over 21, You lose! :( ");
} else {
  console.log("You are under 21, draw again! "); 


  // // If under 21, Drawing another card
  // let additionalCard = deckOfCards.pop();
  // let additionalCardValue = getValueOfCard(additionalCard);

  //   // Want to take the value of Ace as 11 or 1
  //   if (additionalCard === 'Ace' && totalCardValue + 11 > 21) {
  //     totalCardValue += 1; 
  //   } else {
  //     totalCardValue += additionalCardValue; 
  //   }

  
  // Draw another card
  let bonusCard = deckInUse.pop();
  console.log("Another card drawn", bonusCard);

  finalCardValue += determineCardValue(bonusCard);
  console.log("New Score:", finalCardValue);

  // Take the new summed value, and repeat the next steps again
  if (finalCardValue === 21) {
    console.log("Winner! You have blackjack! :) ");
  } else if (finalCardValue > 21) {
    console.log("You are over 21, You lose! :( ");
  } else {
    console.log("You are under 21, draw again!"); 
  }
}

// Exporting functions for testing
module.exports = {
  generateDeckInUse,
  shuffledDeckOfCards,
  determineCardValue,
  drawnCards
};

