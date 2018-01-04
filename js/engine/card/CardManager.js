import { MonsterCard } from './MonsterCard';

export class CardManager {
  
  constructor() {
    this.cards = [];
    this.init();
  }
  
  init() {
    let goblinWarriorCard = new MonsterCard(
      1,
      'Goblin Warrior',
      'Brave warriors who strive for victory',
      3,
      2
    );
    this.cards.push(goblinWarriorCard);
    
    let bullDefenderCard = new MonsterCard(
      1,
      'Bull Defender',
      'Your personal shield in battle',
      2,
      3
    );
    this.cards.push(bullDefenderCard);
  }
  
}