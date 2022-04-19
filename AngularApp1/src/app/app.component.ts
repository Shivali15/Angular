import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // 'uplatz',
  // .app-root   class
  // [app-root]  attribute
  // div[app=app1]    attribute +value
  templateUrl: './app.component.html',
  // inline template :
  // ` <h1 style="color:blue">Welcome to shiva game  </h1>
  //   <h2 style="color:red">Welcome to aditya  game  </h2> `,2
  styleUrls: ['./app.component.css'],

  // ` h1{color:green}
  //   h1{font-style:italic}
  //   h1{background-color:yellow}
  // `
})
export class AppComponent {
  public title: string = 'Welcome to konverge.ai';
  public message: string = 'Welcome to Node-Js with shivali ';
  public d1 = new Date();
  // public img_loc = './assets/lion.jpg';
  num = 100;
  f1() {
    return 'welcome to f1() method ..... ';
  }
  // defining function
  getData() {
    console.warn('hello world');
  }
  getname() {
    alert('hello konverge');
  }
  getname1(name1: string) {
    alert(name1);
  }
  getname2(name: any) {
    alert(name);
  }
}
