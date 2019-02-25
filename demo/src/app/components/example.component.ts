import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<h1>Hello {{title}}</h1>'
})
export class ExampleComponent {
  title = 'example';

}
