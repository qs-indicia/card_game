// Import the game.
import { Game } from './engine/Game';

// The settings of the game.
const settings = {
  width: 800,
  height: 600,
  antialias: true,
  resolution: 1
};

// Start the game.
new Game('game', settings).init();