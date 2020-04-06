import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
// import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AboutComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    // ChartsModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class AboutModule {

}