import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogdetailComponent } from './blogdetail.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BlogdetailComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: BlogdetailComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class BlogdetailModule {

}