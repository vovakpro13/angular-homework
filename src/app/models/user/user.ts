import {IAddress} from "./address";
import {Company} from "./company";

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: Company
}
