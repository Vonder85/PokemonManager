import { TestBed } from '@angular/core/testing';

import { PokemonGestionService } from './pokemon-gestion.service';

describe('PokemonGestionService', () => {
  let service: PokemonGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
