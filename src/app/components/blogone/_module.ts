import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogoneComponent } from './blogone.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BlogoneComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: BlogoneComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class BlogoneModule {

}