import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { FilmsComponent } from './films/films.component';
import { RegisterComponent } from './register/register.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ShowingComponent } from './showing/showing.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'showing/:slug', component: ShowingComponent },
  { path: 'showing/:slug/:show.key/:time', component: BookingsComponent },
  { path: 'bookings/success/:id', component: BookingSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
