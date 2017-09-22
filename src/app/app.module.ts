import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpModule } from '@angular/http'
import { PhotoservicesService } from './photoservices.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'photos', component:PhotosComponent},
      {path: 'aboutus', component:AboutusComponent}
    ]),
     HttpModule
  ],
  providers: [PhotoservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
