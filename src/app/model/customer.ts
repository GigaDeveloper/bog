import { Contact } from './contact';
import { Address } from './address';
import { Product } from './product';

export class Customer {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public id_number: string,
    public sex: string,
    public material_status: string,
    public date_of_birth: string,
    public education_level: string,
    public contacts: Contact[],
    public addresses: Address[],
    public products: Product[]
  ){}
}
