import {Injectable} from '@angular/core';
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
    private id: number;

  /**
   * get Pokemon List
   */
  getPokemons(): Observable<Pokemon[]> {
    const url = BASE_URL + 'pokemon';

    return new Observable(obs => {
      this.http.get<Pokemon[]>(url).subscribe((response) => {
          if (response) {
            obs.next(response);
            console.log(response);
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
  getPokemon(url: string): Observable<Pokemon[]> {
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

}

