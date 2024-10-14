import { Component } from '@angular/core';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  student = {
    name: '',
    email: '',
    age: '',
    course: ''
  };
  submitForm() {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    students.push(this.student);
    localStorage.setItem('students', JSON.stringify(students));

    alert(`Student Registered!\nName: ${this.student.name}\nEmail: ${this.student.email}`);
  }
}
