import { Card } from './Card';

export class SpellCard extends Card {
  
  constructor(id, title, description, effect) {
    super(id, title, description);
    this.effect = effect;
    this.type = 'Spell';
  }
  
}