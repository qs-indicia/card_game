import { Board } from './Board';

export default class BoardManager {
  
  constructor() {
    this.boards = [];
    this.init();
  }
  
  init() {
    // TODO: Load boards from the Database.
    let board1 = new Board(1);
    this.boards.push(board1);
  }
  
}