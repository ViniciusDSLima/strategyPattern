import { User } from "./User";

export interface IPayment {
    pay(user: User): number;
}
