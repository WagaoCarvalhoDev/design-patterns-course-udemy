import { Card } from '../model/card';
import { Register } from '../model/register';
import { CardService } from './card-service';
import { RegisterService } from './register-service';

export class SecurityService {
  constructor(
    private cardService: CardService,
    private registerService: RegisterService,
  ) {}

  blockCard(card: Card): Array<Register> {
    console.log('Blocking card:' + card);
    const pendingRegistries: Array<Register> =
      this.registerService.getRegistersByCard(card)!;
    this.cardService.removedCard(card);
    this.registerService.deleteCardRegistries(card);
    return pendingRegistries;
  }
}
