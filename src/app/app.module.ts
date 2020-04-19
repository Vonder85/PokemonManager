import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenerationsComponent } from './generations/generations.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchFormDisplayComponent } from './search-form-display/search-form-display.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InconnuComponent } from './inconnu/inconnu.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'recherche', component: SearchFormComponent},
  {path: 'zoneRecherche', component: SearchFormDisplayComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', component: InconnuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    SearchFormComponent,
    SearchFormDisplayComponent,
    MenuComponent,
    AccueilComponent,
    InconnuComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
