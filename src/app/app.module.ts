import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {CardsComponent} from 'src/app/Componets/cards/cards.component';
import {BanksComponent} from 'src/app/Componets/banks/banks.component';
import {LoansComponent} from 'src/app/Componets/loans/loans.component';
import {FixedDepositsComponent} from 'src/app/Componets/fixed-deposits/fixed-deposits.component';
import { UploadDocumentComponent } from 'src/app/Componets/upload-document/upload-document.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LoansComponent,
    FixedDepositsComponent,
    BanksComponent,
    UploadDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
