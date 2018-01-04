import * as PIXI from 'pixi.js';

export class Sprite extends PIXI.Sprite {
  
  /**
   * The Sprite's constructor.
   */
  constructor() {
    super();
    this.setDefaults();
  }
  
  /**
   * Sets the default values of the sprite.
   */
  setDefaults() {
    this.anchor = 0.5;
    this.x = 0;
    this.y = 0;
  }
  
}