import { PublicModule } from './../public/public.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

export const routes: Routes = [
    
    {
        path: '',
        component: MasterComponent,
        children: [
            // {
            //     path: 'home1',
            //   loadChildren:  () => import('../../components/dashboard/_module').then(m=>m.DashboardModule)                
            // },
            {
              path: '',
            loadChildren:  () => import('../../components/homeone/_module').then(m=>m.HomeoneModule)                
            },
            {
              path: 'home',
            loadChildren:  () => import('../../components/homeone/_module').then(m=>m.HomeoneModule)                
            },
            {
                path: 'about',
              loadChildren:  () => import('../../components/about/_module').then(m=>m.AboutModule)                
            },
            {
                path: 'partnership',
              loadChildren:  () => import('../../components/provideservices/_module').then(m=>m.ProvideservicesModule)                
            },
            {
                path: 'shop',
              loadChildren:  () => import('../../components/shop/_module').then(m=>m.ShopModule)                
            },
            {
                path: 'blog',
              loadChildren:  () => import('../../components/blog/_module').then(m=>m.BlogModule)                
            },
            {
                path: 'contact',
              loadChildren:  () => import('../../components/contact/_module').then(m=>m.ContactModule)                
            },
            {
                path: 'home',
              loadChildren:  () => import('../../components/homeone/_module').then(m=>m.HomeoneModule)                
            },
            {
                path: 'hometwo',
              loadChildren:  () => import('../../components/hometwo/_module').then(m=>m.HometwoModule)                
            },
            {
                path: 'homethree',
              loadChildren:  () => import('../../components/homethree/_module').then(m=>m.HomethreeModule)                
            },
            {
                path: 'privatesecurity',
              loadChildren:  () => import('../../components/privatesecurity/_module').then(m=>m.PrivatesecurityModule)                
            },
            {
                path: 'transportsecurity',
              loadChildren:  () => import('../../components/transportsecurity/_module').then(m=>m.TransportsecurityModule)                
            },
            {
                path: 'privatesecurity',
              loadChildren:  () => import('../../components/privatesecurity/_module').then(m=>m.PrivatesecurityModule)                
            },
            {
                path: 'homesecurity',
              loadChildren:  () => import('../../components/homesecurity/_module').then(m=>m.HomesecurityModule)                
            },
            {
                path: 'bussinesssecurity',
              loadChildren:  () => import('../../components/bussinesssecurity/_module').then(m=>m.BussinesssecurityModule)                
            },
            {
                path: 'protocolduties',
              loadChildren:  () => import('../../components/protocolduties/_module').then(m=>m.ProtocoldutiesModule)                
            },
            {
                path: 'armedsecurity',
              loadChildren:  () => import('../../components/armedsecurity/_module').then(m=>m.ArmedsecurityModule)                
            },
            {
                path: 'team',
              loadChildren:  () => import('../../components/team/_module').then(m=>m.TeamModule)                
            },
            {
                path: 'testimonials',
              loadChildren:  () => import('../../components/testimonials/_module').then(m=>m.TestimonialsModule)                
            },
            {
                path: 'pricing',
              loadChildren:  () => import('../../components/pricing/_module').then(m=>m.PricingModule)                
            },
            {
                path: 'gallery',
              loadChildren:  () => import('../../components/gallery/_module').then(m=>m.GalleryModule)                
            },
            {
                path: 'productpage',
              loadChildren:  () => import('../../components/productpage/_module').then(m=>m.ProductpageModule)                
            },
            {
                path: 'cartpage',
              loadChildren:  () => import('../../components/cartpage/_module').then(m=>m.CartpageModule)                
            },
            {
                path: 'checkoutpage',
              loadChildren:  () => import('../../components/checkoutpage/_module').then(m=>m.CheckoutpageModule)                
            },
            {
                path: 'blogone',
              loadChildren:  () => import('../../components/blogone/_module').then(m=>m.BlogoneModule)                
            },
            {
                path: 'blogtwo',
              loadChildren:  () => import('../../components/blogtwo/_module').then(m=>m.BlogtwoModule)                
            },
            {
                path: 'blogdetail',
              loadChildren:  () => import('../../components/blogdetail/_module').then(m=>m.BlogdetailModule)                
            },
            {
              path: 'hardware',
            loadChildren:  () => import('../../components/hardware/_module').then(m=>m.HardwareModule)                
          },
          {
            path: 'hardwarepreview',
          loadChildren:  () => import('../../components/hardwarepreview/_module').then(m=>m.HardwarepreviewModule)                
        },
        {
          path: 'support',
        loadChildren:  () => import('../../components/support/_module').then(m=>m.SupportModule)                
      },
      {
        path: 'privacypolicy',
      loadChildren:  () => import('../../components/privacypolicy/_module').then(m=>m.PrivacypolicyModule)                
    },
    {
      path: 'faq',
    loadChildren:  () => import('../../components/faq/_module').then(m=>m.FaqModule)                
  },
           
        ],

    }


];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        BrowserModule,
        MDBBootstrapModule.forRoot()
    ],

    declarations: [
        MasterComponent
    ],
    exports: [RouterModule],
    providers: []
})

export class MasterModule { }
