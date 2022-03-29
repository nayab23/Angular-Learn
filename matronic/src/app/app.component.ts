import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matronic';
  constructor() {
    let theme = Theme.RED;
    document.body.classList.add(theme);
  }
}


enum Theme{
  RED= "red",
  GREEN= "green",
}