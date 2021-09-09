import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './module/material-module/material-module.module';
import { FooterComponent } from './components/footer/footer.component';
import { MissionComponent } from './components/mission/mission.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './service/contact.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


//import { AgmCoreModule } from '@agm/core';

@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MissionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
//     AgmCoreModule.forRoot({
//       apiKey: 'AIzaSyAP0y0PaKqXKuXvHxGYtn8x9r-ZhrZth_k'
//     })
// ,
    BrowserAnimationsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
