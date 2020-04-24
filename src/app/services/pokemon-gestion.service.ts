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

    }

    private notifier() {
        this.emetteurPokemon.emit(this.pokemonss.slice());
    }

    public rechercher(p: string): boolean {
        if (p !== '') {
            for (const po of this.pokemons) {
                if (p.toLowerCase() === po.name.toLowerCase()) {
                    this.pokemonss.push(po);
                    this.notifier();
                    return true;
                }
            }
        }

    }
}
