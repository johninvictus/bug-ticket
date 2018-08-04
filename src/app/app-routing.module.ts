import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// components
import {HomeComponent} from './components/home/home.component';
import {AllComponent} from './components/all/all.component';
import {AddComponent} from './components/add/add.component';
import {DetailComponent} from './components/detail/detail.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'all', component: AllComponent, canActivate: [AuthGuard]},
  {path: 'add', component: AddComponent, canActivate: [AuthGuard]},
  {path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
