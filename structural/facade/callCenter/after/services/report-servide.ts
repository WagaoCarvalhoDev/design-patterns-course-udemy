import { Card } from '../model/card';
import { Register } from '../model/register';
import { RegisterService } from './register-service';

export class ReportService {
  constructor(private registerService: RegisterService) {}

  getSumary(card: Card): void {
    const registers: Array<Register> =
      this.registerService.getRegistersByCard(card)!;
    registers.forEach((reg) =>
      console.log(reg.storeName, reg.value, reg.date.toDateString()),
    );
  }
}
