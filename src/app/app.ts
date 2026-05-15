import { Component } from '@angular/core';
import { CombinedDemoComponent } from './components/combined-demo.component';
import { HeaderComponent } from './header/header';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Users } from './users/users';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CombinedDemoComponent, HeaderComponent, ReactiveForms, Users],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}
