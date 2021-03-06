import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    ContactComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    MDBBootstrapModule,
    RouterModule.forChild([
      { path: '', component: ContactComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ContactModule {

}