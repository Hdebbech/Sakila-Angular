import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmDurationPipe } from './film-duration.pipe';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { RouterModule } from '@angular/router';
import { FilmGridComponent } from './film-grid/film-grid.component';
import { FilmCategoryFullListComponent } from './film-category-full-list/film-category-full-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmEditFormComponent } from './film-edit-form/film-edit-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDurationPipe,
    FilmDetailsComponent,
    FilmGridComponent,
    FilmCategoryFullListComponent,
    NavbarComponent,
    FilmEditFormComponent
  ],
  imports: [
    FormsModule,
    MatChipsModule,
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: FilmsComponent },
      { path: 'films', component: FilmsComponent },
      { path: 'films/:filmId', component: FilmDetailsComponent },
      { path: 'films/:filmId/edit', component: FilmEditFormComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
