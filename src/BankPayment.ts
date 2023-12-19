import { IPayment } from "./IPayment";
import { User } from "./User";

export class BankPayment implements IPayment {
  private password = "string_cheese";
  private fees = 3;

  pay(user: User): number {
    if (user.getPassword !== this.password) {
      return 0;
    }
    return user.getAmount - this.fees;
  }
}
