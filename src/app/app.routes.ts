import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { LoginComponent } from "../app/pages/login/login.component";
import { RegisterComponent } from "../app/pages/register/register.component";
import { AboutComponent } from "../app/pages/about/about.component";
import { HomeComponent } from "../app/pages/home/home.component";
import { ProfileComponent } from "../app/pages/profile/profile.component";

export const routes: Routes = [
    {path:'' , component : HomeComponent},  
    {path:'login' , component : LoginComponent},
    {path:'register' , component : RegisterComponent},
    {path:'about' , component : AboutComponent},
    {path:'profile', component : ProfileComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // <<< Aqui o RouterModule entra
  exports: [RouterModule]
})
export class AppRoutingModule {}