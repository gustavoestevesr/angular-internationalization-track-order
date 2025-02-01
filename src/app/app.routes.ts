import { Routes } from '@angular/router';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';

export const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent,
  },
  {
    path: '**',
    component: OrdersListComponent,
  }
];
