import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProtocoldutiesComponent } from './protocolduties.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ProtocoldutiesComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: ProtocoldutiesComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ProtocoldutiesModule {

}