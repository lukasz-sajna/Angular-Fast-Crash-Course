import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  user = {
    username: '',
    password: ''
  };

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

  onSubmit(theForm: NgForm) {
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
    console.log(this.user);
  }
}
