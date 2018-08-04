import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {IssuesService} from './services/issues.service';


import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatListModule,
  MatTabsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatMenuModule
} from '@angular/material';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {AllComponent} from './components/all/all.component';
import {AddComponent} from './components/add/add.component';
import {DetailComponent} from './components/detail/detail.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllComponent,
    AddComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    AppRoutingModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase, 'issue-tracker'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [
    IssuesService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
