import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductpageComponent } from './productpage.component';
import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    ProductpageComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    MDBBootstrapModule,
    RouterModule.forChild([
      { path: '', component: ProductpageComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ProductpageModule {

}