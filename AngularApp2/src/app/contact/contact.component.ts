import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  courses = ['Java', 'Angular', 'Bootstrap4', 'NodeJS', 'ExpressJS', 'ReactJS'];
  enquiry1 = new Enquiry(
    'Shivali',
    'shivali@gmail.com',
    8658037354,
    'female',
    'Angular',
    'Online'
  );
  ngOnInit(): void {}
}
