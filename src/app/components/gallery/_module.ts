import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    GalleryComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: GalleryComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class GalleryModule {

}