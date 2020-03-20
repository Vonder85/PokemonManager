import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PokemonGestionService} from '../services/pokemon-gestion.service';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
    angularForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private pokemonGestionService: PokemonGestionService) {
        this.creerForm();
    }

    private creerForm() {
        this.angularForm = this.formBuilder.group({
            nom: ['']
        });
    }

    ngOnInit(): void {
    }

    nomInvalide() {
        return this.angularForm.controls.nom.invalid && (this.angularForm.controls.nom.dirty || this.angularForm.controls.nom.touched);
    }


    pbValidation() {
        return this.angularForm.pristine || this.angularForm.invalid;
    }

    onRechercher() {
        if (!this.pbValidation()) {
            this.pokemonGestionService.rechercher(this.angularForm.controls.nom.value);
            this.angularForm.reset();
        }
    }


}
