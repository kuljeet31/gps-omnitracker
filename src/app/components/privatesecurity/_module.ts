import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrivatesecurityComponent } from './privatesecurity.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    PrivatesecurityComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: PrivatesecurityComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class PrivatesecurityModule {

}