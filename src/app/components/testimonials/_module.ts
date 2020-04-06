import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    TestimonialsComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: TestimonialsComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class TestimonialsModule {

}