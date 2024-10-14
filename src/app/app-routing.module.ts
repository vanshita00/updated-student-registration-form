import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: StudentRegistrationComponent },
  { path: ':name', component: HomeComponent },  // Route to display student details by name
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
