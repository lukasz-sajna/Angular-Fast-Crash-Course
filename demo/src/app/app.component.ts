import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  firstName = 'Łukasz';
  lastName = 'Sajna';
  city = 'Wrocław';

  status: boolean;

  constructor() {
    console.log('constructor...');
  }

  displayFirstName() {
    return this.firstName;
  }

  getUserStatus() {
    return this.status = true;
  }
}
