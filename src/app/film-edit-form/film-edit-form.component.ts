import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film-grid/film.service';

@Component({
  selector: 'app-film-edit-form',
  templateUrl: './film-edit-form.component.html',
  styleUrls: ['./film-edit-form.component.css']
})
export class FilmEditFormComponent implements OnInit {

  film: Film = null as any;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const filmId = Number(routeParams.get('filmId'));
    // Find the product that correspond with the id provided in route.
    this.filmService.findFilmById(filmId).subscribe(f => {
      this.film = f
    });

  }

  clickEvent(event: any) {
    let fullName = event.target.parentNode.childNodes[0].innerText;
    this.film.actors = this.film.actors.filter(actor => actor.toLowerCase() !== fullName.toLowerCase());
  }

  onEnter(event: any) {
    let name = event.target.value;
    this.film.actors.push(event.target.value);
    event.target.value = '';

  }

}
