import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RegisterComponent } from './register/register.component';
import { ExperienceComponent } from './experience/experience.component';
import { FaqComponent } from './faq/faq.component';
import { FindbloodComponent } from './carousel/findblood/findblood.component';
import { BloodrequirementComponent } from './carousel/bloodrequirement/bloodrequirement.component';
import { MoreComponent } from './carousel/more/more.component';
import { ContactComponent } from './contact/contact.component';
import { NewPageComponent } from './new-page/new-page.component';
import { TipsComponent } from './carousel/tips/tips.component';
import { LoginTabComponent } from './login/login-tab/login-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent,
    RegisterComponent,
    ExperienceComponent,
    FaqComponent,
    FindbloodComponent,
    BloodrequirementComponent,
    MoreComponent,
    ContactComponent,
    NewPageComponent,
    TipsComponent,
    LoginTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
