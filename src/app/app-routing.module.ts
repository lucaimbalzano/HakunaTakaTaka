import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MissionComponent } from './components/mission/mission.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {pathMatch: 'full' ,  redirectTo: "/home", path:"" },
  {path: 'mission' , component: MissionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
