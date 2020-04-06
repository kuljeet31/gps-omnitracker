import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    TeamComponent,
  ],

  imports: [
    CommonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: TeamComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class TeamModule {

}