import { Component } from '@angular/core';
@Component({
  selector: 'demo',
  //   templateUrl: './app.component.html',
  template: `<h1>Welcome to Konverge.ai</h1>`,
  //   styleUrls: ['./app.component.css'],
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class DemoComponent {
  title = 'AngularBootstrapApp1';
}
