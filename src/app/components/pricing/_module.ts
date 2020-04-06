import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    PricingComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: PricingComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class PricingModule {

}