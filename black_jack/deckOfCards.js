// Creating a deck of cards
// 52 cards - 4 suits of 13 cards

// Instructions at the begining of the game
function howToPlay() {
  console.log("******************************");
  console.log("You have joined Blackjack! :)");
  console.log("******************************");
  console.log("How to play:");
  console.log("- You will be given two cards from a shuffled deck.");
  console.log("- Your values will be added.");
  console.log("- you win blackjack if your score is 21!");
  console.log("- If you're under 21, you get to draw again.");
  console.log("- You will draw cards until you get 21 or go over it.");
  console.log("- If your hand goes over 21, you lose :(");
  console.log("- Aces are worth 11, but they count as 1 if your total is over 21.");
  console.log("Good luck!");
  console.log();
}
howToPlay();

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
    newDeckOfCards.push(...cardValues); 
  }
  console.log("There are", newDeckOfCards.length, "cards in the deck.");
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
  let currentIndex = playingDeck.length;
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
console.log("Shuffled deck of cards:", deckInUse);


let finalCardValue = 0;  

// drawnCards: array containing two random cards drawn from the shuffled deck of cards
const chosenCards = drawnCards(deckInUse);
console.log("The two cards drawn at random from the shuffled deck are::", chosenCards);


// Add the cards values together
// Getting the value of both cards
const firstCardValue = determineCardValue(chosenCards[0]);  
const secondCardValue = determineCardValue(chosenCards[1]);  
// Add the values together to get the final card value
finalCardValue = firstCardValue + secondCardValue;

console.log("The value of both cards is:", finalCardValue);


// Taking the value of Ace as 11 or 1
if (chosenCards.includes('Ace') && finalCardValue > 21) {
  finalCardValue -= 10; 
  console.log("Ace is valued as 1, The new score is:", finalCardValue);
}

// If hand value is under 21, draw another card
while (finalCardValue < 21) {
    console.log("Your hand value is under 21, draw again! "); 

    // Drawing another card
    let bonusCard = deckInUse.pop();
    console.log("Another card drawn, the card is:", bonusCard);
    
    // Add bonas card to the finalCardValue
    finalCardValue += determineCardValue(bonusCard);
    console.log("New Score is:", finalCardValue);

    // If Ace is drawn again, check and adjust if needed
    if (bonusCard === 'Ace' && finalCardValue > 21) {
      finalCardValue -= 10; 
      console.log("Ace is valued as 1, The new score is:", finalCardValue);
    }
  }

  // If hand value is over 21, the game is lost
  if (finalCardValue > 21) {
    console.log("Your hand value is over 21, You lose! :( ");
    // If hand value is exactly 21, the game is won with blackjack
  } else if (finalCardValue === 21) {
    console.log("Winner! You have blackjack! :) ");
  } else {
    console.log("Your final hand value was:", finalCardValue);
  }


// Exporting functions for testing
module.exports = {
  generateDeckInUse,
  shuffledDeckOfCards,
  determineCardValue,
  drawnCards
};

