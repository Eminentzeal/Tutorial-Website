import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseContentComponent } from './course-content/course-content.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent},

  { path: 'home',
    component: HomeComponent},

  { path: 'course-content',
    component: CourseContentComponent},

  { path: 'reset-password',
    component: ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
