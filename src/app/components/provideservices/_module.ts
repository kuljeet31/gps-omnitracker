import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProvideservicesComponent } from './provideservices.component';
// import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ProvideservicesComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    // ChartsModule,
    RouterModule.forChild([
      { path: '', component: ProvideservicesComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ProvideservicesModule {

}