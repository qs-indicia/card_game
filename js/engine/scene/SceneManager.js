import * as PIXI from 'pixi.js';

export class SceneManager extends PIXI.Container {
  
  /**
   * The SceneManager's constructor.
   */
  constructor() {
    super();
  }
  
  /**
   * Resets the container and plays a new scene.
   *
   * @param scene
   *  The scene to play.
   */
  play(scene) {
    if (this.currentScene) {
      this.removeChild(this.currentScene);
    }
    
    this.currentScene = scene;
    this.addChild(this.currentScene);
  }
  
}