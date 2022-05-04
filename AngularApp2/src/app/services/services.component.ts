import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  courses: any = [];
  //   { cid: 1, cname: 'Java14', trainer: 'Abhishek' },
  //   { cid: 2, cname: 'Angular', trainer: 'Piyush' },
  //   { cid: 3, cname: 'Bootstrap4', trainer: 'Vrushali' },
  //   { cid: 4, cname: 'NodeJS', trainer: 'Partik' },
  //   { cid: 5, cname: 'ExpressJS', trainer: 'Riya' },
  //   { cid: 6, cname: 'ReactJS', trainer: 'Kartik' },
  // ];
  constructor(private _coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this._coursesService.getAllCourses();
  }
}
