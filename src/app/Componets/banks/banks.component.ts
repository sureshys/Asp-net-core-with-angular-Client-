import { Bank } from './../../models/Bank.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  banks:Bank[]=[];
  bank:Bank={
    id:'',
    bankName:'',
    accountHolderName:'',
    bankAccountNumber:'',
    ifscCode:'',
    cifNo:'',
    micrCode:'',
    accountType:'',
  }
  constructor() { }

  ngOnInit(): void {
  }

  onCancel(){
    this.bank={
      id:'',
    bankName:'',
    accountHolderName:'',
    bankAccountNumber:'',
    ifscCode:'',
    cifNo:'',
    micrCode:'',
    accountType:'',
    };
}
deleteCard(id:string){
}
populateForm(bank:Bank){
}
onSubmit(){
}
}
