import * as PIXI from 'pixi.js';

// Import the engine.
import { SceneManager } from './scene/SceneManager';

// Import scenes.
import { GameScene } from '../scenes/GameScene';
import { MenuScene } from '../scenes/MenuScene';

export class Game {
  
  /**
   * The Game's constructor.
   *
   * @param el
   *  The element to append the game to.
   *
   * @param settings
   *  The settings of the game.
   */
  constructor(el, settings) {
    this.el = document.getElementById(el);
    this.app = new PIXI.Application(settings);
    this.sceneManager = new SceneManager();
  }
  
  /**
   * Initializes the game.
   */
  init() {
    this.el.appendChild(this.app.view);
    this.app.stage.addChild(this.sceneManager);
    
    // Play the game scene on launch.
    let gameScene = new GameScene();
    this.sceneManager.play(gameScene);
    
    this.update();
  }
  
  /**
   * Updates the game.
   */
  update() {
    // Update the current scene.
    this.app.ticker.add(delta => {
      if (this.sceneManager.currentScene) {
        this.sceneManager.currentScene.update(delta);
      }
    });
  }
  
}