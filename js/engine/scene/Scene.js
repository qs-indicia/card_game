import * as PIXI from 'pixi.js';

export class Scene extends PIXI.Container {
  
  /**
   * The Scene's constructor.
   */
  constructor() {
    super();
    this.preload();
  }
  
  /**
   * Preload assets.
   */
  preload() {
    PIXI.loader.load(() => this.setup());
  }
  
  /**
   * Setup the scene.
   */
  setup() {}
  
  /**
   * Update the scene.
   */
  update(delta) {}
  
}