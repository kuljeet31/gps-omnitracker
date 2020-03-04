import { PublicModule } from './../public/public.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../public/public.module').then(m=>m.PublicModule)
    },
    {
        path: '',
        component: MasterComponent,
        children: [
            {
                path: 'sample',
                loadChildren: '../../components/sample/_module#SampleModule'
            },
            {
                path: 'dashboard',
                loadChildren: '../../components/dashboard/_module#DashboardModule'
            }
        ],

    }


];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        BrowserModule
    ],

    declarations: [
        MasterComponent
    ],
    exports: [RouterModule],
    providers: []
})

export class MasterModule { }
