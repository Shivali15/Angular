import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p>
      demo works!
    </p>
  `,
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
