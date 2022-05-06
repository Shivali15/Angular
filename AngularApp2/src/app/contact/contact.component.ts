import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry } from '../enquiry';
import { EnquiryService } from '../enquiry.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  // injecting service using enquiryservice (difference variable)into the  constructor
  constructor(private enquiryService: EnquiryService) {}
  courses = ['Java', 'Angular', 'Bootstrap4', 'NodeJS', 'ExpressJS', 'ReactJS'];
  enquiry1 = new Enquiry('', '', 0, '', '', '');

  hasGenderError: boolean = true;
  hasCourseError: boolean = true;
  hasTrainingError: boolean = true;
  validateGender(gender: string) {
    if (gender == 'default') {
      this.hasGenderError = true;
    } else {
      this.hasGenderError = false;
    }
  }
  validatecourse(course: string) {
    if (course == 'default') {
      this.hasCourseError = true;
    } else {
      this.hasCourseError = false;
    }
  }
  validateTrtainingmode(trainingmode: string) {
    if (trainingmode == 'default') {
      this.hasTrainingError = true;
    } else {
      this.hasTrainingError = false;
    }
  }

  submitForm() {
    console.log(this.enquiry1);
    // using diffrence variable enquiryservice method need to call sendEnquiry and passing enquiry1 object data to it
    this.enquiryService.sendEnquiry(this.enquiry1),
      new Observable().subscribe(
        (data) => console.log('Data', data),
        (error) => console.log('Error!', error)
      );
  }
  ngOnInit(): void {}
}
