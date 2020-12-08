import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterInstructorComponent } from './register-instructor/register-instructor.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ParticularCourseComponent } from './particular-course/particular-course.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterInstructorComponent,
    RegisterUserComponent,
    LoginInstructorComponent,
    LoginUserComponent,
    ParticularCourseComponent,
    CourseContentComponent,
    UserProfileComponent,
    InstructorProfileComponent,
    SuperAdminComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
