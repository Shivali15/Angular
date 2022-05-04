import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: any = [
    { cid: 1, cname: 'Java14', trainer: 'Abhishek' },
    { cid: 2, cname: 'Angular', trainer: 'Piyush' },
    { cid: 3, cname: 'Bootstrap4', trainer: 'Vrushali' },
    { cid: 4, cname: 'NodeJS', trainer: 'Partik' },
    { cid: 5, cname: 'ExpressJS', trainer: 'Riya' },
    { cid: 6, cname: 'ReactJS', trainer: 'Kartik' },
  ];
  constructor() {}
  getAllCourses() {
    return this.courses;
  }
}
