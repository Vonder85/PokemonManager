import {Component, Input} from '@angular/core';
import { Pokemon } from 'src/app/Models/pokemon';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'cardPokemon',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})


export class CardFancyExample {
  @Input() pokemon: Pokemon;
}
