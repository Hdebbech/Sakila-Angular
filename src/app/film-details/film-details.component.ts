import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film-grid/film.service';
import { faUsers } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: any;
  rentalsIcon = faUsers;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const filmId = Number(routeParams.get('filmId'));
    // Find the product that correspond with the id provided in route.
    this.film = this.filmService.findFilmById(filmId).subscribe(f => this.film = f);
  }

}
