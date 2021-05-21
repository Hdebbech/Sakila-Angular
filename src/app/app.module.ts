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

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDurationPipe,
    FilmDetailsComponent,
    FilmGridComponent,
    FilmCategoryFullListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: FilmsComponent },
      { path: 'films', component: FilmsComponent },
      { path: 'films/:filmId', component: FilmDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
