import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Icourse } from '../Interface/courses';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private router: Router,
    private _coursesService: CoursesService
  ) {}
  courses: any | Icourse[];

  onSelect(course: { cid: number }) {
    // alert();
    let cid = course.cid;
    this.router.navigate(['coursedetails', cid]);
    // coursedetails/:cid
  }
  ngOnInit(): void {
    this._coursesService.getAllCourses().subscribe((data) => {
      this.courses = data;
    });
  }
}
