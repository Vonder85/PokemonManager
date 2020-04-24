import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './Component/pages/pokemons/pokemons.component';
import { SearchFormComponent } from './Component/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormDisplayComponent } from './Component/search-form-display/search-form-display.component';
import { MenuComponent } from './Component/shared/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Component/shared/accueil/accueil.component';
import { InconnuComponent } from './Component/pages/inconnu/inconnu.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CardFancyExample} from './Component/shared/card/card.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'recherche', component: SearchFormComponent },
  { path: 'zoneRecherche', component: SearchFormDisplayComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: InconnuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    SearchFormComponent,
    SearchFormDisplayComponent,
    MenuComponent,
    AccueilComponent,
    InconnuComponent,
    CardFancyExample
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), HttpClientModule, MatCardModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
