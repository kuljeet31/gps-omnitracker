import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HometwoComponent } from './hometwo.component';
import { ChartsModule } from 'ng2-charts';
// For MDB Angular Free
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    HometwoComponent,
  ],

  imports: [
    CommonModule,
    MDBBootstrapModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: HometwoComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class HometwoModule {

}