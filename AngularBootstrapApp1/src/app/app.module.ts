import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { CustomerComponent } from './customer/customer.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    DemoComponent,
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    CustomerComponent,
    TestComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
