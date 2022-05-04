import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css'],
})
export class CoursedetailsComponent implements OnInit {
  constructor(private router: ActivatedRoute, private route: Router) {}
  cid: number | any;
  ngOnInit(): void {
    this.cid = this.router.snapshot.paramMap.get('cid');
    //  this.route.paramMap.subcribe((params: ParamMap) => {
    //    this.cid = params.get('cid');
    //  });
  }
  goPervious() {
    let id = this.cid - 1;
    this.route.navigate(['coursedetails', id]);
    // alert('pervious');
  }
  goNext() {
    let id = this.cid - 1;
    this.route.navigate(['coursedetails', id]);

    // alert('next');
  }
}
