import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BussinesssecurityComponent } from './bussinesssecurity.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BussinesssecurityComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: BussinesssecurityComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class BussinesssecurityModule {

}