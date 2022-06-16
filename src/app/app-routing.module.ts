import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';



const routes: Routes = [
  {path:'login', component :LoginComponent},
  {path:'', component :LandingComponent},
  {path:'home', component :HomeComponent},
  {path: 'sidevar',component:SidenavComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
