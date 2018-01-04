export class Deck {
  
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.cards = [];
    
    this.init();
  }
  
  init() {
    this.cards = this.fetchCards();
  }
  
  fetchCards() {
    return [
      {id: 1, amount: 3},
      {id: 2, amount: 1},
    ];
  }
  
}