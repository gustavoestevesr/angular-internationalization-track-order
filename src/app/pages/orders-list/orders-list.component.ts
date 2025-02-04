import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  Item,
  StatusOrderModalComponent,
} from '../../dialog/status-order-modal/status-order-modal.component';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CurrencyPipe,
    MatExpansionModule
  ],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent {
  readonly dialog = inject(MatDialog);
  public listPurchases = this.mockListPurchases();

  constructor() {
    console.warn(this.listPurchases);
  }

  private mockListPurchases() {
    return [
      [
        {
          name: 'Dell',
          quantity: 1,
          date: new Date(),
          price: 56.99,
          status: 'confirmed'
        },
        {
          name: 'Samsung',
          quantity: 3,
          date: new Date(),
          price: 36.99,
          status: 'confirmed'
        },
        {
          name: 'Motorola',
          quantity: 4,
          date: new Date(),
          price: 76.99,
          status: 'confirmed'
        },
      ] as Item[],

      [
        {
          name: 'Xiaomi',
          quantity: 1,
          date: new Date(),
          price: 56.99,
          status: 'in production'
        },
        {
          name: 'LG',
          quantity: 3,
          date: new Date(),
          price: 36.99,
          status: 'in production'
        },
      ] as Item[],

      [
        {
          name: 'Electrolux',
          quantity: 3,
          date: new Date(),
          price: 43.99,
          status: 'in route'
        },
      ],

      [
        {
          name: 'Acer',
          quantity: 6,
          date: new Date(),
          price: 12.99,
          status: 'delivered'
        },
      ],
    ] as Item[][];

  }

  public openStatusOrderModalClick(items: Item[]) {
    this.dialog.open(StatusOrderModalComponent, {
      data: {
        items,
      },
    });
  }
}
