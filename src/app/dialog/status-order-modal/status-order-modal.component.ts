import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface Item {
  name: string;
  quantity: number;
  date: Date;
  price: number;
  status: 'confirmed' | 'in production' | 'in route' | 'delivered';
}

@Component({
  selector: 'app-status-order-modal',
  standalone: true,
  imports: [MatCardModule, MatIconModule, DatePipe, CurrencyPipe],
  templateUrl: './status-order-modal.component.html',
  styleUrl: './status-order-modal.component.scss',
})
export class StatusOrderModalComponent {
  totalAmount = 0;

  readonly data: { items: Item[] } = inject(MAT_DIALOG_DATA);

  constructor() {
    this.data.items.forEach((item) => this.totalAmount = item.quantity * item.price);
  }
}
