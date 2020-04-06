import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HardwareComponent } from './hardware.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HardwareComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: HardwareComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class HardwareModule {

}