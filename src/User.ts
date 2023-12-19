import { IPayment } from "./IPayment";

export class User {
  constructor(
    private amount: number,
    private securityCode: string,
    private password: string
  ) {
    this.securityCode = securityCode;
    this.password = password;
    this.amount = amount;
  }

  paymet(payment: IPayment): void {
    const total = payment.pay(this);
    if (total > 0) {
      this.amount = payment.pay(this);
    }
  }

  get getSecurityCode() {
    return this.securityCode;
  }

  get getPassword() {
    return this.password;
  }

  get getAmount() {
    return this.amount;
  }
  set setAmount(amount: number) {
    this.amount = amount;
  }
}
