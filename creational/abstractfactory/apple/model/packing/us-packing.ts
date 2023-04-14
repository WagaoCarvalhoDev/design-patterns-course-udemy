import { Packing } from './packing';

export class USPacking implements Packing {
  pack(): string {
    return '\t- Packing in English';
  }
}
