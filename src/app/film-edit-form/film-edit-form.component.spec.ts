import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmEditFormComponent } from './film-edit-form.component';

describe('FilmEditFormComponent', () => {
  let component: FilmEditFormComponent;
  let fixture: ComponentFixture<FilmEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
