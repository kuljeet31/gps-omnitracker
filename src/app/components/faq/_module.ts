import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    FaqComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: FaqComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class FaqModule {

}