import {EventEmitter, Injectable} from '@angular/core';
import {Pokemon} from '../Models/pokemon';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root'
})

export class AffichagePokemonService {

  constructor(private http: HttpClient) {
  }
  pokemons: Pokemon[] = [];
  pokemon: Pokemon;
  pokemonss: Pokemon[] = [];
  emetteurPokemon: EventEmitter<Pokemon[]> = new EventEmitter<Pokemon[]>();

  /**
   * get Pokemon List
   */
  getPokemons(): Observable<Pokemon[]> {
    const url = BASE_URL + 'pokemon';

    return new Observable(obs => {
      this.http.get<Pokemon[]>(url).subscribe((response) => {
          if (response) {
            obs.next(response);
          } else {
            obs.error('No response for pokemon list');
          }
        },
        (error) => {
          obs.error('Error ${error.status} during get pokemons');
        });
    });
  }

  /**
   * get One Pokemon
   */
  getPokemon(url: string): Observable<Pokemon> {
    return new Observable(obs => {
      this.http.get<Pokemon>(url).subscribe((response) => {
          if (response) {
            // @ts-ignore
            obs.next(response);
          } else {
            obs.error('No response for pokemon list');
          }
        },
        (error) => {
          obs.error('Error ${error.status} during get pokemons');
        });
    });
  }

  private notifier() {
    this.emetteurPokemon.emit(this.pokemonss.slice());
  }

  public rechercher(nomPokemon: string) {

    if(this.getPokemon(BASE_URL + nomPokemon + '/') != null){
      this.getPokemon(BASE_URL + nomPokemon +'/').subscribe(response => {
        const poke = new Pokemon(response.id
          , response.name, response['types'][0]['type'].name, response['sprites'].front_default);
        this.pokemonss.push(poke);
        console.log('reussi')
        this.notifier();
      })
    }else{
      console.log('erreur');
      return 'This Pokemon does not exist';
    }

   /* if (nomPokemon !== '') {
      for (const nomPokemon of this.pokemonss) {
        if (p.toLowerCase() === po.name.toLowerCase()) {
          this.pokemonss.push(po);
          this.notifier();
          return true;
        }
      }
    }*/

  }

}

