import { Deck } from './Deck';

export class Player {
  
  /**
   * The Player's constructor.
   *
   * @param id
   *  The id of the player.
   *
   * @param name
   *  The name of the player.
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.decks = [];
    
    this.init();
  }
  
  init() {
    this.decks = this.fetchDecks();
  }
  
  fetchDecks() {
    return [
      new Deck(1, 'My first deck'),
      new Deck(2, 'Micro transactions baby')
    ]
  }
  
}