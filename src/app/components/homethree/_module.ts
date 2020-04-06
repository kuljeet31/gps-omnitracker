import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomethreeComponent } from './homethree.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HomethreeComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: HomethreeComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class HomethreeModule {

}