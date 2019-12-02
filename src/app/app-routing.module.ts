import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TipsComponent } from './carousel/tips/tips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
{path : 'login', component : LoginComponent},
{path : 'home' , component : CarouselComponent},
{path : 'faq', component : FaqComponent},
{path : '' , component : CarouselComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
