import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import {
  Item,
  StatusOrderModalComponent,
} from './dialog/status-order-modal/status-order-modal.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular internationalization track order';

  readonly titleService = inject(Title);

  constructor() {
    this.titleService.setTitle($localize`${this.title}`);
  }
}
