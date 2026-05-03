import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MaterialDemoComponent } from './material-demo.component';
import { TailwindDemoComponent } from './tailwind-demo.component';

@Component({
  selector: 'app-combined-demo',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    MatCardModule,
    MaterialDemoComponent,
    TailwindDemoComponent,
  ],
  templateUrl: './combined-demo.component.html',
})
export class CombinedDemoComponent {
  counter = signal(0);
  isDarkTheme = signal(false);

  toggleDemo() {
    this.isDarkTheme.set(!this.isDarkTheme());
  }

  increaseCounter() {
    this.counter.set(this.counter() + 1);
  }

  demoClass() {
    return this.isDarkTheme()
      ? 'bg-gray-900 text-white p-4 rounded'
      : 'bg-blue-200 text-blue-900 p-4 rounded';
  }
}
