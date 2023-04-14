import { Packing } from './packing';

export class BrazilianPacking implements Packing {
  pack(): string {
    return '\t- Empacotando em Portugues';
  }
}
