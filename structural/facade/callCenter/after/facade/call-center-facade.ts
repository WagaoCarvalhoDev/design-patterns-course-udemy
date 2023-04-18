import { Card } from '../model/card';
import { Register } from '../model/register';
import { CardService } from '../services/card-service';
import { PaymentService } from '../services/payment-service';
import { RegisterService } from '../services/register-service';
import { ReportService } from '../services/report-servide';
import { SecurityService } from '../services/securityservice';

export class CallCenterFacade {
  constructor(
    public cardService: CardService = new CardService(),
    public registerService: RegisterService = new RegisterService(),
    public reportService: ReportService = new ReportService(registerService),
    public paymentService: PaymentService = new PaymentService(registerService),
    public securityService: SecurityService = new SecurityService(
      cardService,
      registerService,
    ),
  ) {}

  getCardByUser(l: number): Card {
    return this.cardService.getCardByUser(l)!;
  }

  getSumary(card: Card): void {
    this.reportService.getSumary(card);
  }

  getPaymentInfoByCard(card: Card): void {
    this.paymentService.getPaymentInfoByCard(card);
  }

  cancelLastRegister(card: Card): void {
    const registers = this.registerService.getRegistersByCard(card);
    this.registerService.removeByIndex(card, registers!.length - 1);
    const pendingRegisters: Array<Register> =
      this.securityService.blockCard(card);
    const newCard: Card = this.cardService.createNewCard(123456, 33445566);
    this.registerService.addCardRegisters(newCard, pendingRegisters);
    this.reportService.getSumary(newCard);
  }
}
