import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegistrationComponent } from './registration/registration.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { path: "movies", canActivate: [AuthGuard], component: MoviesComponent },
  { path: "tv", canActivate: [AuthGuard], component: TvComponent },
  { path: "people", canActivate: [AuthGuard], component: PeopleComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
