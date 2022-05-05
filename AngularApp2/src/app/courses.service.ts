import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icourse } from './Interface/courses';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private _http: HttpClient) {}

  _url = './assets/data/courses.json';
  getAllCourses(): Observable<Icourse[]> {
    return this._http.get<Icourse[]>(this._url);
  }
}

//  with the help of json file  if any change we make it automatically change in UI : user interface were json is used

//  Observable : observable by subcribing to it with its subscribe()method ,passing callbacks for notification of new values ,error or completion
//  Observable  can delivers a single or multiple values of any type of subscribers, either synchronously (as a function delivers a value to its caller ) or on a schedule
