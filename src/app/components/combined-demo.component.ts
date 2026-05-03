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
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <!-- Header -->
      <header class="bg-white shadow-md sticky top-0 z-10">
        <div class="max-w-6xl mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">
                Angular Material + Tailwind CSS Demo
              </h1>
              <p class="text-gray-600 mt-1">A showcase of modern web component styling</p>
            </div>
            <div class="flex items-center gap-2">
              <mat-chip>v21</mat-chip>
              <mat-chip>Material 3</mat-chip>
              <mat-chip>Tailwind</mat-chip>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto px-6 py-8">
        <mat-tab-group>
          <!-- Material Tab -->
          <mat-tab label="Material Components">
            <ng-template mat-tab-label>
              <mat-icon matTabLabelPrefix>dashboard</mat-icon>
              <span class="ml-2">Material Components</span>
            </ng-template>
            <app-material-demo></app-material-demo>
          </mat-tab>

          <!-- Tailwind Tab -->
          <mat-tab label="Tailwind Utilities">
            <ng-template mat-tab-label>
              <mat-icon matTabLabelPrefix>palette</mat-icon>
              <span class="ml-2">Tailwind Utilities</span>
            </ng-template>
            <app-tailwind-demo></app-tailwind-demo>
          </mat-tab>

          <!-- Combined Tab -->
          <mat-tab>
            <ng-template mat-tab-label>
              <mat-icon matTabLabelPrefix>integration_instructions</mat-icon>
              <span class="ml-2">Combined Examples</span>
            </ng-template>
            <div class="p-6">
              <h2 class="text-2xl font-bold mb-6">Combined Material + Tailwind</h2>

              <!-- Example 1: Material Card with Tailwind Styling -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <mat-card class="shadow-lg">
                  <mat-card-header>
                    <mat-card-title class="flex items-center gap-2">
                      <mat-icon color="primary">favorite</mat-icon>
                      Smart Combination
                    </mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <p class="text-sm text-gray-600 mb-4">
                      Use Material components for complex interactive UI and Tailwind utilities for quick styling.
                    </p>
                    <div class="flex gap-2">
                      <button mat-raised-button color="primary" class="w-full">Material Button</button>
                    </div>
                  </mat-card-content>
                </mat-card>

                <div class="bg-gradient-to-br from-primary-container to-secondary-container rounded-lg p-6 shadow-lg">
                  <h3 class="font-bold text-lg mb-3">Using Material Colors with Tailwind</h3>
                  <p class="text-sm mb-4 opacity-90">
                    Tailwind config extends Material CSS variables for seamless color integration.
                  </p>
                  <button class="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition">
                    Learn More
                  </button>
                </div>
              </div>

              <!-- Example 2: Feature List -->
              <h3 class="text-xl font-semibold mb-4">Key Features</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                  <mat-icon class="text-primary mt-1">✓</mat-icon>
                  <div>
                    <h4 class="font-semibold">Material Design 3</h4>
                    <p class="text-sm text-gray-600">Modern component library</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                  <mat-icon class="text-primary mt-1">✓</mat-icon>
                  <div>
                    <h4 class="font-semibold">Utility-First CSS</h4>
                    <p class="text-sm text-gray-600">Rapid development with Tailwind</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                  <mat-icon class="text-primary mt-1">✓</mat-icon>
                  <div>
                    <h4 class="font-semibold">Integrated Colors</h4>
                    <p class="text-sm text-gray-600">Material theme in Tailwind</p>
                  </div>
                </div>
              </div>

              <!-- Example 3: Interactive Demo -->
              <div class="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4">Interactive Combination</h3>
                <div class="flex flex-wrap gap-3 mb-4">
                  <button mat-raised-button color="primary" (click)="toggleDemo()">
                    Toggle Theme
                  </button>
                  <button mat-outlined-button (click)="increaseCounter()">
                    Increase: {{ counter() }}
                  </button>
                </div>
                <div [class]="demoClass()">
                  <p class="font-semibold">Dynamic styling with both frameworks</p>
                </div>
              </div>
            </div>
          </mat-tab>
        </mat-tab-group>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white mt-12">
        <div class="max-w-6xl mx-auto px-6 py-8">
          <div class="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h4 class="font-semibold mb-3">Angular Material</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="#" class="hover:text-white">Components</a></li>
                <li><a href="#" class="hover:text-white">Documentation</a></li>
                <li><a href="#" class="hover:text-white">Theming</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-3">Tailwind CSS</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="#" class="hover:text-white">Utilities</a></li>
                <li><a href="#" class="hover:text-white">Configuration</a></li>
                <li><a href="#" class="hover:text-white">Plugins</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-3">Resources</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="#" class="hover:text-white">Angular</a></li>
                <li><a href="#" class="hover:text-white">Design System</a></li>
                <li><a href="#" class="hover:text-white">CSS</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>© 2024 Angular Material + Tailwind CSS Demo. Built with Angular 21.</p>
          </div>
        </div>
      </footer>
    </div>
  `,
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
