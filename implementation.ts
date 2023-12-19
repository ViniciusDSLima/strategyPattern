import { BankPayment } from "./src/BankPayment";
import { CreditCardPayment } from "./src/CreditCardPayment";
import { IPayment } from "./src/IPayment";
import { PaypalPayment } from "./src/PaypalPayment";
import { User } from "./src/User";

const user1 = new User(2000, "123", "string_cheese");

function paid(payment: IPayment, user: User): void {
  user.paymet(payment);
  const total = document.querySelector(".total");
  total.innerHTML = `${user.getAmount}`;
}

const creditCardButton = document.querySelector("#card");
const paypalButton = document.querySelector("#paypal");
const bankButton = document.querySelector("#bank");

creditCardButton?.addEventListener("click", () =>
  paid(new CreditCardPayment(), user1)
);

paypalButton?.addEventListener("click", () => paid(new PaypalPayment(), user1));
bankButton?.addEventListener("click", () => paid(new BankPayment(), user1));
