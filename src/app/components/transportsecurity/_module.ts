import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransportsecurityComponent } from './transportsecurity.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    TransportsecurityComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: TransportsecurityComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class TransportsecurityModule {

}