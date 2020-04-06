import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BlogComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: BlogComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class BlogModule {

}