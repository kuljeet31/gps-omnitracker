import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    SupportComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    MDBBootstrapModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: SupportComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class SupportModule {

}