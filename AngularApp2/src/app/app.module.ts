import { NgModule } from '@angular/core';
// form module imported for ngForm
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './coursedetails/courses/courses.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Java14Component } from './java14/java14.component';
import { AngularComponent } from './angular/angular.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
// imported  services
import { CoursesService } from './courses.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    PagenotfoundComponent,
    Java14Component,
    AngularComponent,
    NodejsComponent,
    CoursedetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  // call services in providers
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
