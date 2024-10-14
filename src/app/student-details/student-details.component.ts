import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras.state?.['student'];
  }
}
