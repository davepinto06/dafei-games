import { Routes } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'games-list', component: GamesListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
