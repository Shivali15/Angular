import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(private router: Router) {}
  courses = [
    { cid: 1, cname: 'Java14', trainer: 'Abhishek' },
    { cid: 2, cname: 'Angular', trainer: 'Piyush' },
    { cid: 3, cname: 'Bootstrap4', trainer: 'Vrushali' },
    { cid: 4, cname: 'NodeJS', trainer: 'Partik' },
    { cid: 5, cname: 'ExpressJS', trainer: 'Riya' },
    { cid: 6, cname: 'ReactJS', trainer: 'Kartik' },
  ];
  onSelect(course: { cid: number }) {
    // alert();
    let cid = course.cid;
    this.router.navigate(['coursedetails', cid]);
    // coursedetails/:cid
  }
  ngOnInit(): void {}
}
