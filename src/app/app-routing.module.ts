import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TipsComponent } from './carousel/tips/tips.component';
import { CarouselComponent } from './carousel/carousel.component';


const routes: Routes = [
{path : 'login', component : LoginComponent},
{path : 'home' , component :CarouselComponent},
{path:'',component:CarouselComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
