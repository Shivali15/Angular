import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularBootstrapApp1';

  public username: string = 'root';
  public password: string = 'root0980';

  public colors = ['Red', 'Green', 'Black', 'Orange'];

  // array of objects

  public employees: Employee[] = [
    { eid: 1, ename: 'Priya', esalary: 56000.141, ecity: 'Nagpur' },
    { eid: 2, ename: 'Riya', esalary: 56000.141, ecity: 'Goa' },
    { eid: 3, ename: 'Anaya', esalary: 56000.141, ecity: 'Pune' },
    { eid: 4, ename: 'shruti', esalary: 56000.141, ecity: 'Mumbai' },
    { eid: 5, ename: 'shaun', esalary: 56000.141, ecity: 'Delhi' },
  ];

  public name: string = 'shivali';
  public technology: string = 'MEAN STACK';
  public User_name: string = '';

  public countries: Array<string> = [
    'India',
    'Australia',
    'England',
    'Ireland',
  ];

  public country: string = '';
  public hasError: boolean = false;
  Title = 'Angular structural Directives ';
  myClasses = {
    // true when(has no error )haserror is false
    'text-success1': !this.hasError,
    'text-special1': true,
    'text-danger1': this.hasError,
  };
  myStyles = {
    color: 'blue',
    'font-style': 'italic',
  };
}
