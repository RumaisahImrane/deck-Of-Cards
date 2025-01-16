const {
  generateDeckInUse, 
  shuffledDeckOfCards, 
  determineCardValue, 
  drawnCards 
} = require('./deckOfCards');

  beforeEach(() => {
    generateDeckInUse();  // Run once before all tests
});

  // Test: The test will pass if 'deckOfCards' contains 52 things
test('The deck of cards will contain 52 cards', () => {
  const deckOfCards = generateDeckInUse();
  expect(deckOfCards.length).toBe(52);  
});


 // Test: The test will pass if the correct values are returned
 test("The card values will match each card", () => {
  expect(determineCardValue('2')).toBe(2);
  expect(determineCardValue('10')).toBe(10);
  expect(determineCardValue('Jack')).toBe(10);
  // The default value of Ace is 11
  expect(determineCardValue('Ace')).toBe(11);   
});


// Test: The test will pass if the deck of cards has been shuffled
test("Deck of cards should be shuffled", () => {
  const deckOfCards = generateDeckInUse();
  const shuffledDeck = shuffledDeckOfCards(deckOfCards.slice());
  // Still want the deck to contain 52 cards
  expect(shuffledDeck.length).toBe(52);
  // Check if the shuffled deck is different compared to the original deck
  expect(shuffledDeck).not.toEqual(deckOfCards);
});


// Test : The test will pass if two cards are drawn
test("Two cards should be dealt by drawnCards", () => {
  const deckOfCards = generateDeckInUse();
  const drawn = drawnCards(deckOfCards);
  // Checks that two cards are drawn
  expect(drawn.length).toBe(2); 
  // Checks that the deck now has 50 cards
  expect(deckOfCards.length).toBe(50); 
});


 // Edge case test: Trying to shuffle when the deck of cards is empty
 test("Trying to shuffle when the deck of cards is empty", () => {
  const emptyDeck = [];
  const shuffledDeck = shuffledDeckOfCards(emptyDeck);
  expect(shuffledDeck.length).toBe(0);
});
