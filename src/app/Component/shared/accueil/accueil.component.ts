import { Component, OnInit } from '@angular/core';
import {AffichagePokemonService} from '../../../services/affichage-pokemon.service';
import {Pokemon} from '../../../Models/pokemon';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private affichagePokemonService: AffichagePokemonService) { }

  ngOnInit(): void {
  }

}
