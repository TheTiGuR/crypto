import { timestamp } from 'rxjs/operators';
import { sha256 }from 'crypto-js';

export class Block {
  index: number;
  timestamp: any;
  data: any;
  previousHash: string = null;
  hash: string = null;

  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}
