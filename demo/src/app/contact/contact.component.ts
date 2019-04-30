import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const data = {
      userId: Math.random(),
      id: Math.random(),
      title: form.value.username,
      body: ''
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', data)
      .subscribe(response => {
        console.log(response);
      }, err => {
        console.log('Something went wrong', err);
      });
  }

}
