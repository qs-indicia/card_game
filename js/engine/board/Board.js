const PLAYER_LIMIT = 2;

export class Board {
  
  /**
   * The Board's constructor.
   *
   * @param id
   *  The id of the Board.
   */
  constructor(id) {
    this.id = id;
    this.players = [];
  }
  
  /**
   * Adds a player to the board.
   *
   * @param player
   *  A player object.
   */
  addPlayer(player) {
    if (this.players.length < PLAYER_LIMIT) {
      this.players.push(player);
    }
  }
  
}