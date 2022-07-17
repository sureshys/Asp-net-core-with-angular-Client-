import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsComponent} from 'src/app/Componets/cards/cards.component';
import {BanksComponent} from 'src/app/Componets/banks/banks.component';
import {LoansComponent} from 'src/app/Componets/loans/loans.component';
import {FixedDepositsComponent} from 'src/app/Componets/fixed-deposits/fixed-deposits.component';
import { UploadDocumentComponent } from 'src/app/Componets/upload-document/upload-document.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'fds', component: UploadDocumentComponent },
  { path: 'loans', component: LoansComponent },
  { path: '', redirectTo: 'cards', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
