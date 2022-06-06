import { Card } from './models/Card.model';
import { CardsService } from './services/cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Cards';
  cards:Card[]=[];
  card:Card={
    id : '',
    cardHolderName :'',
    cardNumber:null,
    expiryMonth:null,
    expiryYear:null,
    cvv:null
  }
  constructor(private cardService:CardsService){

  }

  ngOnInit(): void {
   this.getAllCards();
  }

  getAllCards(){
    this.cardService.getAllCards()
    .subscribe(
      response =>{
        this.cards = response;
       // console.log(this.cards);
      } );
  }

  onSubmit(){
    if(this.card.id ===''){
      this.cardService.addCard(this.card)
      .subscribe(
      response => {
        this.getAllCards();
        this.card={
          id : '',
          cardHolderName :'',
          cardNumber:null,
          expiryMonth:null,
          expiryYear:null,
          cvv:null
        }
      })
    }
    else{
      this.updateCard(this.card);
    }

  }

  deleteCard(id:string){
    this.cardService.deleteCard(id)
    .subscribe(
      response =>{
        this.getAllCards();
      }
    )
  }

  populateForm(card :Card){
   this.card =card;
  }

  updateCard(card:Card){
    this.cardService.updateCard(card)
    .subscribe(
      response => {
        this.getAllCards();
        this.card={
          id : '',
          cardHolderName :'',
          cardNumber:null,
          expiryMonth:null,
          expiryYear:null,
          cvv:null
        }
      })
  }
}
