import { ROUTES } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderPicturesComponent } from './header/header-pictures/header-pictures.component';
import { FooterTermosPrivacidadeComponent } from './footer/footer-termos-privacidade/footer-termos-privacidade.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    HeaderPicturesComponent,
    FooterTermosPrivacidadeComponent,
    PoliticaPrivacidadeComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(ROUTES, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
