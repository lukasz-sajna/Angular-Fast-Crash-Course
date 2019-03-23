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

    this.getUserStatus();
  }

  displayFirstName() {
    return this.firstName;
  }

  getUserStatus() {
    return this.status = false;
  }

  greetPerson() {
    alert('HI!');
  }

  mousingOver() {
    console.log('we just moused over');
  }

  keyDowning() {
    console.log('we just key downed');
  }
}
