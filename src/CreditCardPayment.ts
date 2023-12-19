import { IPayment } from "./IPayment";
import { User } from "./User";

export class CreditCardPayment implements IPayment {
  private APR = 0.025;
  private securityCode = "123";

  getDay() {
    return new Date().getFullYear() % 4 == 0 ? 366 : 365;
  }

  pay(user: User): number {
    const date = this.getDay();
    if (user.getSecurityCode !== this.securityCode) {
      return 0;
    }
    return user.getAmount - date * this.APR;
  }
}
