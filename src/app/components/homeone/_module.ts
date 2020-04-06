import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeoneComponent } from './homeone.component';
import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    HomeoneComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    MDBBootstrapModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: HomeoneComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class HomeoneModule {

}