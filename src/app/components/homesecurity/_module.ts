import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomesecurityComponent } from './homesecurity.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HomesecurityComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: HomesecurityComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class HomesecurityModule {

}