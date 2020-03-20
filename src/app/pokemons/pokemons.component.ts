import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../Models/pokemon';
import {AffichagePokemonService} from '../services/affichage-pokemon.service';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
    pokemons = [];
    nbPokemons = 0;

    constructor(private affichagePokemonService: AffichagePokemonService) {
    }


    ngOnInit(): void {
        this.pokemons = this.affichagePokemonService.getPokemon();
        this.nbPokemons = this.calculPokemon(this.pokemons);
    }

    calculPokemon(pokemons: Pokemon[]): number {
        pokemons = this.affichagePokemonService.getPokemon();
        return this.pokemons.length;
    }

}
