/* tslint:disable:prefer-const */
import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../Models/pokemon';
import {AffichagePokemonService} from '../services/affichage-pokemon.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
    public pokemons: Pokemon[] = [];
    private poke1: Pokemon;

    constructor(private affichagePokemonService: AffichagePokemonService, private router: Router) {
    }

    ngOnInit(): void {
      this.affichagePokemonService.getPokemons().subscribe(res => {
        for ( let i = 0; i < res['results'].length; i++) {
              this.affichagePokemonService.getPokemon(res['results'][i].url).subscribe(response => {
              this.poke1 = new Pokemon(response.id
                , response.name, response['types'][0]['type'].name);
              this.pokemons.push(this.poke1);
              this.pokemons.sort((a: Pokemon, b: Pokemon) => a.id - b.id);
              });
        }
      });

    }





   /* calculPokemon(pokemons: Pokemon[]): number {
        this.pokemons = this.affichagePokemonService.getPokemons();
        return this.pokemons.length;
    }
*/
}
