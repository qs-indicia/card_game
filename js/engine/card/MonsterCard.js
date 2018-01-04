import { Card } from './Card';

export class MonsterCard extends Card {

  constructor(id, title, description, health, damage) {
    super(id, title, description);
    this.health = health;
    this.damage = damage;
    this.type = 'Monster';
  }
  
  /**
   * Hits a monster card.
   *
   * @param monsterCard
   *  A monster card.
   */
  attack(monsterCard) {
    if (monsterCard.type === 'Monster') {
      monsterCard.hit(this.damage);
    }
  }
  
  /**
   * Lowers health by the damage it's been dealt.
   *
   * @param damage
   *  The damage number.
   */
  hit(damage) {
    this.health -= damage;
  }
  
}