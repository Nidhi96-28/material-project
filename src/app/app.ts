import { Component } from '@angular/core';
import { CombinedDemoComponent } from './components/combined-demo.component';

@Component({
  selector: 'app-root',
  imports: [CombinedDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
