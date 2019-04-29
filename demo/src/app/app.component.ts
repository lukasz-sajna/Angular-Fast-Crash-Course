import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  firstName = 'Łukasz';
  lastName: string;
  city = 'Wrocław';
  status: boolean;
  posts: object[];

  constructor() {
    console.log('constructor...');
    this.lastName = 'Sajna';
    this.getUserStatus();

    this.posts = [
      { title: 'Post 1' },
      { title: 'Post 2' },
      { title: 'Post 3' },
      { title: 'Post 4' },
      { title: 'Post 5' },
    ];
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
