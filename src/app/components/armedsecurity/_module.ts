import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArmedsecurityComponent } from './armedsecurity.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ArmedsecurityComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: ArmedsecurityComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ArmedsecurityModule {

}