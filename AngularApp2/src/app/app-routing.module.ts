import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularComponent } from './angular/angular.component';
import { ContactComponent } from './contact/contact.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { Java14Component } from './java14/java14.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  // defaultly to home page
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServicesComponent },
  // child routes:
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      { path: 'java14', component: Java14Component },
      { path: 'angular', component: AngularComponent },
      { path: 'nodejs', component: NodejsComponent },
    ],
  },
  { path: 'coursedetails/:cid', component: CoursedetailsComponent },

  { path: 'contact', component: ContactComponent },
  // **  -> when incorrect path then it go to pagenotfound component
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
