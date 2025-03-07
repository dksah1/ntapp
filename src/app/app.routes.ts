import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CustomerComponent } from './component/customer/customer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'customer',
    loadComponent: () =>
      import('./component/customer/customer.component').then(
        (m) => m.CustomerComponent
      ),
  },
];
