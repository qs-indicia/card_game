import { Card } from './Card';

export class SpellCard extends Card {
  
  constructor(id, name, description, effect) {
    super(id, name, description);
    this.effect = effect;
    this.type = 'Spell';
  }
  
}