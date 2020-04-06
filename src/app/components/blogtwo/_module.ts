import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogtwoComponent } from './blogtwo.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BlogtwoComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: BlogtwoComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class BlogtwoModule {

}