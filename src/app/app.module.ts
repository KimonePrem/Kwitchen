import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {AppComponent} from './app.component';
import {SplashScreenComponent} from './splash-screen/splash-screen.component';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {SideNavbarComponent} from './side-navbar/side-navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignUpComponent} from './sign-up/sign-up.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeScreenComponent,
    SideNavbarComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatDividerModule,
    MatListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
