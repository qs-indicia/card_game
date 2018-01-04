import * as PIXI from 'pixi.js';

import { AssetLoader } from '../engine/AssetLoader';
import { Scene } from '../engine/scene/Scene';

export class GameScene extends Scene {
  
  constructor() {
    super();
  }
  
  preload() {
    PIXI.loader.add([
      'assets/images/squirrel.png'
    ]).load(() => this.setup());
  }
  
  setup() {
    this.player = AssetLoader.loadSprite('assets/images/squirrel.png');
    if (this.player) {
      this.player.anchor.set(0.5);
      this.player.x = 150;
      this.player.y = 150;
      
      this.addChild(this.player);
    }
  }
  
  update(delta) {
    if (this.player) {
      this.player.rotation += 0.1 * delta;
    }
  }
  
}