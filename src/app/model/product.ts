export class Product {
  constructor(
    public type: string,
    public register_date: string,
    public finish_date: string,
    public amount: number,
    public currency: string,
    public extra_details: object
  ){}
}
