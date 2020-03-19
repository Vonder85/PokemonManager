import { Injectable } from '@angular/core';
import {Pokemon} from '../Models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class AffichagePokemonService {
  pokemons: Pokemon[] = [];

  constructor() {
    this.pokemons.push(new Pokemon(1, 'Bulbizarre', 'une graine de type plante et poison', 170, 6.9));
    this.pokemons.push(new Pokemon(2, 'Herbizarre', 'une graine de type plante et poison', 100, 13));
    this.pokemons.push(new Pokemon(3, 'Florizarre', 'une graine de type plante et poison', 200, 100));
    this.pokemons.push(new Pokemon(4, 'Salamèche', 'un lézard de type feu', 60, 8.5));
    this.pokemons.push(new Pokemon(5, 'Reptincel', 'une flamme de type feu', 110, 19));
    this.pokemons.push(new Pokemon(6, 'Dracaufeu', 'une flamme de type feu', 170, 90.5));
  }


  getPokemon() {
    return this.pokemons;
  }


 /* public affichageP(listePokemons: Pokemon[]): void {
      for (const po of listePokemons) {
        po.getNom();

    }
  }*/
}

