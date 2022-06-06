import { Card } from './../models/Card.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
   baseUrl="https://localhost:7117/api/cards";
  constructor(private http:HttpClient) { }


 getAllCards():Observable<Card[]>{
   return this.http.get<Card[]>(this.baseUrl);
 }

 addCard(card:Card){
   card.id='00000000-0000-0000-0000-000000000000';
   return this.http.post<Card>(this.baseUrl,card)
 }

 deleteCard(id:string):Observable<Card>{
   return this.http.delete<Card>(this.baseUrl+'/'+id);
 }

 updateCard(card:Card):Observable<Card>{
return this.http.put<Card>(this.baseUrl+'/'+ card.id,card);
 }
}
