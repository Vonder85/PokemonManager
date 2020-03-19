import { Component, OnInit } from '@angular/core';
import { Pokemon} from '../Models/pokemon';
import { AffichagePokemonService } from '../services/affichage-pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons = [];
  constructor(private affichagePokemonService: AffichagePokemonService) {}




  ngOnInit(): void {
    this.pokemons = this.affichagePokemonService.getPokemon();
  }

}
