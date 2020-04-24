import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pokemon} from '../../Models/pokemon';
import {Subscription} from 'rxjs';
import {AffichagePokemonService} from "../../services/affichage-pokemon.service";

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, OnDestroy {


    angularForm: FormGroup;
    pokemons: Pokemon[];
    private subscriptionPokemon: Subscription;
    constructor(private formBuilder: FormBuilder, private affichagePokemonService: AffichagePokemonService) {
        this.creerForm();
    }

    private creerForm() {
        this.angularForm = this.formBuilder.group({
            nom: ['', Validators.pattern('[3a-zA-Z ]*')]
        });
    }

    ngOnInit(): void {
       this.subscriptionPokemon = this.affichagePokemonService.emetteurPokemon.subscribe((value) => this.pokemons = value);
    }

    ngOnDestroy(): void {
        this.subscriptionPokemon.unsubscribe();
    }


    nomInvalide() {

        return this.angularForm.controls.nom.invalid &&
            (this.angularForm.controls.nom.dirty || this.angularForm.controls.nom.touched);
        ;
    }


    pbValidation() {

        return this.angularForm.pristine || this.angularForm.invalid;
    }

    onRechercher() {

        this.affichagePokemonService.rechercher(this.angularForm.controls.nom.value);
        /*if(this.angularForm.controls.nom.value === 'C3PO'){
            const img = 'http://media.giphy.com/media/3o7bu1nVSxNQUWMAZa/source.gif';
            this.pokemonGestionService.pokemonss.push()
        }*/

        this.angularForm.reset();

    }


}
