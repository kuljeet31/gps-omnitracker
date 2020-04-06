import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';


@NgModule({
  declarations: [
    ShopComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShopComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ShopModule {

}