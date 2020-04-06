import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CheckoutpageComponent } from './checkoutpage.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    CheckoutpageComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: CheckoutpageComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class CheckoutpageModule {

}