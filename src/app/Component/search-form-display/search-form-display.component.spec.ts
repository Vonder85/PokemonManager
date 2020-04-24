import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormDisplayComponent } from './search-form-display.component';

describe('SearchFormDisplayComponent', () => {
  let component: SearchFormDisplayComponent;
  let fixture: ComponentFixture<SearchFormDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
