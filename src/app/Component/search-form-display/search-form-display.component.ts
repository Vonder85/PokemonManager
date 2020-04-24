import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from '../../Models/pokemon';
import {PokemonGestionService} from '../../services/pokemon-gestion.service';

@Component({
  selector: 'app-search-form-display',
  templateUrl: './search-form-display.component.html',
  styleUrls: ['./search-form-display.component.css']
})
export class SearchFormDisplayComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[];
  constructor(private pokemonGestionService: PokemonGestionService) { }

  ngOnInit(): void {
    this.pokemonGestionService.emetteurPokemon.subscribe((value) => this.pokemons = value);
  }

  ngOnDestroy(): void {
    this.pokemonGestionService.emetteurPokemon.unsubscribe();
  }

}
