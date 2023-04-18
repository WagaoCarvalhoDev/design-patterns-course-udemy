import { Card } from '../model/card';
import { Register } from '../model/register';
import { RegisterService } from './register-service';

export class PaymentService {
  constructor(private registerService: RegisterService) {}

  getPaymentInfoByCard(card: Card): void {
    const registers: Array<Register> | undefined =
      this.registerService.getRegistersByCard(card);
    const sum: number = registers!.reduce(
      (partialValue: number, reg) => partialValue + reg.value,
      0,
    );
    console.log('You have to pay %.2f until next week', sum);
  }
}
