import {Component, OnInit, OnDestroy} from '@angular/core';
import {Pokemon} from '../../../Models/pokemon';
import {AffichagePokemonService} from '../../../services/affichage-pokemon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  public pokemons: Pokemon[] = [];
  private poke1: Pokemon;

  constructor(private affichagePokemonService: AffichagePokemonService, private router: Router) {
  }

  ngOnInit(): void {
    this.affichagePokemonService.getPokemons().subscribe(res => {
      // tslint:disable-next-line:prefer-for-of

      for (let i = 0; i < res['results'].length; i++) {
        this.affichagePokemonService.getPokemon(res['results'][i].url).subscribe(response => {
          this.poke1 = new Pokemon(response.id
            , response.name, response['types'][0]['type'].name, response['sprites'].front_default);
          this.pokemons.push(this.poke1);
          this.pokemons.sort((a: Pokemon, b: Pokemon) => a.id - b.id);
          //this.lesTypes.splice(0, this.lesTypes.length);
        });
      }
    });
    this.affichagePokemonService.emetteurPokemon.subscribe((value) => this.pokemons = value);
  }

  ngOnDestroy(): void {
    this.affichagePokemonService.emetteurPokemon.unsubscribe();
  }

  /* calculPokemon(pokemons: Pokemon[]): number {
       this.pokemons = this.affichagePokemonService.getPokemons();
       return this.pokemons.length;
   }
*/
}
