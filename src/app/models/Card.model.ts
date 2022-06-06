export interface Card{
  id:string;
  cardHolderName:string;
  cardNumber:number|null;
  expiryMonth:number|null;
  expiryYear:number|null;
  cvv:number|null;
}
