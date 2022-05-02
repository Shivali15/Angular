import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css'],
})
export class CoursedetailsComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  cid!: number;
  ngOnInit(): void {
    // this.cid=parseInt(this.router.snapshot.paramMap.get(cid: number));
  }
  goPervious() {
    let id = this.cid - 1;
    // alert('pervious');
  }
  goNext() {
    let id = this.cid - 1;

    // alert('next');
  }
}
