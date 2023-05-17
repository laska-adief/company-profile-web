import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './pages/hero/hero.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { OurCoreValueComponent } from './pages/our-core-value/our-core-value.component';
import { OurSpecialityComponent } from './pages/our-speciality/our-speciality.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    WhoWeAreComponent,
    OurCoreValueComponent,
    OurSpecialityComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
