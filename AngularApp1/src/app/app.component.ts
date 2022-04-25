import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // 'uplatz',
  // .app-root   class
  // [app-root]  attribute
  // div[app=app1]    attribute +value
  // templateUrl: './app.component.html',

  template: `
    <div class="container-3">
      <!-- conditional apply classes :if condition is ture set color as red -->
      <h2 [class.text-danger]="false">{{ Title }}</h2>
      <!-- another way to define class binding    -->
      <h2 bind-class="sucessclass">WELCOME TO MY HOME</h2>
      <!--  class binding using class : -->
      <h2 class="text-primary">{{ Title }}</h2>
      <h2 class="text-special">{{ Title }}</h2>
      <!--class binding with respect to html elements 
    use class inside the [] n intialise property from app component-->
      <h2 [class]="sucessclass">{{ Title }}</h2>

      <!-- classbinding using class name : -->
      <h2 [className]="dangerclass">{{ Title }}</h2>
      <!-- calss binding using ngclass  -->
      <h2 [ngClass]="myClass">{{ Title }}</h2>

      <!-- style binding : -->
      <h2 [style.color]="'cyan'">{{ Title }}</h2>
      <h2 [style.color]="sucessclass">{{ title }}</h2>
      <h2 [style.background-color]="dangerclass">{{ title }}</h2>
      <!-- conditional stylebinding  -->
      <h2 [style.background-color]="hasError ? 'red' : 'green'">
        {{ message }}
      </h2>
      <h2 [style.color]="hasError ? dangerclass : sucessclass">
        {{ message }}
      </h2>
      <!-- using ngclass : stylebinding  -->
      <h2 [ngStyle]="myStyles">{{ message }}</h2>
      <h2 bind-ngStyle="myStyles">{{ message }}</h2>

      <!-- event binding  -->

      <!-- template reference variable  -->
      <!-- <h3>Username :<input #username /></h3> -->
      <!--  on clicking of  button the click event should trigger  -->
      <!-- (click)="f1(username)" -->
      <!--  passing input username  pass a predefined event    $event : payload DOM -->
      <!-- <button (click)="f2($event)" class="btn btn-outline btn-outline-primary">
        Click
      </button> -->
      <!-- template reference variable 
      <h3>Uername:<input #username /></h3> -->

      <h2>{{ title3 | uppercase }}</h2>
      <h2>{{ title4 | lowercase }}</h2>
      <h2>{{ title5 | titlecase }}</h2>
      <h2>{{ title5 | slice: 7:15 }}</h2>
      <h3>{{ employee | json }}</h3>
    </div>
  `,
  // inline template :
  // ` <h1 style="color:blue">Welcome to shiva game  </h1>
  //   <h2 style="color:red">Welcome to aditya  game  </h2> `,

  // styleUrls: ['./app.component.css']
  styles: [
    `
      .text-danger {
        color: red;
      }
      .text-primary {
        color: blue;
      }
      .text-success {
        color: green;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
  // ` h1{color:green}
  //   h1{font-style:italic}
  //   h1{background-color:yellow}
  // `
})
export class AppComponent {
  public title: string = 'Welcome to my home ';
  public message: string = 'Welcome to Node-Js with shivali ';
  // public d1 = new Date();
  // // public img_loc = './assets/lion.jpg';
  // num = 100;
  // f1() {
  //   return 'welcome to f1() method ..... ';
  // }
  // // defining function
  // getData() {
  //   console.warn('hello world');
  // }
  // getname() {
  //   alert('hello konverge');
  // }
  // getname1(name1: string) {
  //   alert(name1);
  // }
  // getname2(name: any) {
  //   alert(name);
  // }

  Title = 'Welcome to konverge ai';
  // sucessclass = 'text-success';
  sucessclass = 'green';
  // dangerclass = 'text-danger';
  dangerclass = 'orange';

  hasError = true;
  // created objects : applying all the css property at a time
  myClass = {
    'text-primary': true,
    'text-special': true,
  };
  // created objects : for styling
  myStyles = {
    color: 'green',
    'font-style': 'italic',
    'text-transform': 'uppercase',
  };

  //  one way  binding :

  // f1(username: any) {
  //   // let d1 = new Date();
  //   // console.log(`click event executed : ${d1}`);
  //   console.log(`Welcome  : ${username}`);
  //   // adding .value  ->it will return  te value of that object
  //   console.log(`Welcome  : ${username.value.toUpperCase()}`);
  //   // typeof -> will return the data type of username
  //   console.log(typeof username.value);
  // }
  f2(event: any) {
    // console.log(event);
    console.log(event.type);
  }

  // pipes:
  public title3 = 'welcome to Ambazari garden ';
  public title4 = 'welcome to futala lake  ';
  public title5 = 'welcome to food court  ';
  employee = {
    eid: 1,
    ename: 'shivali umbarkar',
    ecity: 'Nagpur',
  };
}
