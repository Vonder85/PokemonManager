import {EventEmitter, Injectable} from '@angular/core';
import {Pokemon} from '../Models/pokemon';

@Injectable({
    providedIn: 'root'
})
export class PokemonGestionService {
    
    pokemonss: Pokemon[] = [];
    pokemons: Pokemon[] = [];
    emetteurPokemon: EventEmitter<Pokemon[]> = new EventEmitter<Pokemon[]>();


    constructor() {
        this.pokemons.push(new Pokemon(1, 'Bulbizarre', 'une graine de type plante et poison', 170, 6.9));
        this.pokemons.push(new Pokemon(2, 'Herbizarre', 'une graine de type plante et poison', 100, 13));
        this.pokemons.push(new Pokemon(3, 'Florizarre', 'une graine de type plante et poison', 200, 100));
        this.pokemons.push(new Pokemon(4, 'Salamèche', 'un lézard de type feu', 60, 8.5));
        this.pokemons.push(new Pokemon(5, 'Reptincel', 'une flamme de type feu', 110, 19));
        this.pokemons.push(new Pokemon(6, 'Dracaufeu', 'une flamme de type feu', 170, 90.5));
    }

    private notifier() {
        this.emetteurPokemon.emit(this.pokemonss.slice());
    }

    public rechercher(p: string): boolean {
        if (p !== '') {
            for (const po of this.pokemons) {
                if (p.toLowerCase() === po.nom.toLowerCase()) {
                    this.pokemonss.push(po);
                    this.notifier();
                    return true;
                }
            }
        }

    }
}
