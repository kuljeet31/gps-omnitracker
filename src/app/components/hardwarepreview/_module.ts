import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HardwarepreviewComponent } from './hardwarepreview.component';
import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    HardwarepreviewComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    MDBBootstrapModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: HardwarepreviewComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class HardwarepreviewModule {

}