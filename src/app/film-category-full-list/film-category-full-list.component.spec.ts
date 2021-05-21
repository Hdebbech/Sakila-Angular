import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCategoryFullListComponent } from './film-category-full-list.component';

describe('FilmCategoryFullListComponent', () => {
  let component: FilmCategoryFullListComponent;
  let fixture: ComponentFixture<FilmCategoryFullListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmCategoryFullListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCategoryFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
