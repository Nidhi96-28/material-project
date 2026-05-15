import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

  constructor() {}

  @Input() tag!: String;
  @Input() title!: String;
  ngOnInit() {
    


  }
}
