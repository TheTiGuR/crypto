import { Block } from './block';
import { timestamp } from 'rxjs/operators';

export class Blockchain {

  chain: [Block];
  dificulty: number = 0;

  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, {timestamp}, "GenensisBlock", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}
