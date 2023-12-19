import { IPayment } from "./IPayment";
import { User } from "./User";

export class PaypalPayment implements IPayment {
  private fees = 5;

  pay(user: User): number {
    return user.getAmount - this.fees;
  }
}
