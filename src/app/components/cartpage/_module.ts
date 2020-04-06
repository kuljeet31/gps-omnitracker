import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartpageComponent } from './cartpage.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    CartpageComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: CartpageComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class CartpageModule {

}