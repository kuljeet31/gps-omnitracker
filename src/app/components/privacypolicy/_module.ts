import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrivacypolicyComponent } from './privacypolicy.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    PrivacypolicyComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: PrivacypolicyComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class PrivacypolicyModule {

}