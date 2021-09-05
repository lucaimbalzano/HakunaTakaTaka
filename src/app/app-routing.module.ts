import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MissionComponent } from './components/mission/mission.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {pathMatch: 'full' ,  redirectTo: "/home", path:"" },
  {path: 'mission' , component: MissionComponent},
  {path: 'contact' , component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
