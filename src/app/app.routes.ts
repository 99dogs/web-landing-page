import { Routes } from "@angular/router"
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from "./contact/contact.component";
import { PoliticaPrivacidadeComponent } from "./politica-privacidade/politica-privacidade.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent },
  { path: '**', component: NotFoundComponent},

]
