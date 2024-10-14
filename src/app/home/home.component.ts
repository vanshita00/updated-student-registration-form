import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  student: any = null;
  name: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      if (this.name) {
        this.loadStudentDetails(this.name);
      }
    });
  }

  loadStudentDetails(name: string) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    this.student = students.find((s: any) => s.name === name);
  }
}

