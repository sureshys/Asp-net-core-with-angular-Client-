import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/models/Card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  title = 'Cards';
  cards:Card[]=[];
  card:Card={
    id : '',
    cardHolderName :'',
    cardNumber:'',
    expiryMonth:'',
    expiryYear:'',
    cvv:''
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
          cardNumber:'',
          expiryMonth:'',
          expiryYear:'',
          cvv:''
        }
      })
    }
    else{
      this.updateCard(this.card);
    }
  }

  onCancel(){
    this.card={
      id : '',
      cardHolderName :'',
      cardNumber:'',
      expiryMonth:'',
      expiryYear:'',
      cvv:''
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
          cardNumber:'',
          expiryMonth:'',
          expiryYear:'',
          cvv:''
        }
      })
  }
}
