import * as PIXI from 'pixi.js';

import { Sprite } from './Sprite';

export class AssetLoader {
  
  /**
   * Loads an existing sprite.
   *
   * @param reference
   *  The reference to the sprite.
   *
   * @returns
   *  Returns a PIXI.Sprite if the sprite exists.
   *  Returns a false if the sprite doesn't exist.
   */
  static loadSprite(reference) {
    let resource = PIXI.loader.resources[reference];
    if (!resource) {
      return false;
    }
    return new Sprite(resource.texture);
  }
  
}