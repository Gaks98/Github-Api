import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// defining routes
// const routes: Routes = [
  // {path: "landing-page", component: LandingPageComponent},
  // { path: 'profile', component: ProfileComponent}
// ]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { from } from 'rxjs';
import { ProfileService } from './services/profile.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ExistencePipe } from './existence.pipe';
import { BackgroundDirective } from './background.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    ExistencePipe,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'profile', component: ProfileComponent }])
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
