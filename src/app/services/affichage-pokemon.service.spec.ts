import { TestBed } from '@angular/core/testing';

import { AffichagePokemonService } from './affichage-pokemon.service';

describe('AffichagePokemonService', () => {
  let service: AffichagePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichagePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
