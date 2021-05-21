import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from './film.service';
import { faUsers } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-film-grid',
  templateUrl: './film-grid.component.html',
  styleUrls: ['./film-grid.component.css']
})
export class FilmGridComponent implements OnInit {

  rentalsIcon = faUsers;
  films: Film[] = null as any;
  @Input() category: string = null as any;
  @Input() heading: string = null as any;
  @Input() limit: number = 0;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    let cat = this.category;
    if (this.category === "Top Sales") {
      cat = "";
    }
    this.filmService.findFilmsByCategory(cat).subscribe(r => {
      console.log(r);
      this.films = r;
      if (this.category) {
        if (this.category === "Top Sales") {
          this.films = this.films.filter(f => f.rentals >= 30).sort((f1, f2) => f2.rentals - f1.rentals);
        }
        else {
          this.films = this.films.filter(f => f.categories.map(c => c.toLowerCase).includes(this.category.toLowerCase));
        }

        if (this.limit > 0) {
          this.films = this.films.slice(0, this.limit);
        }
      }
    })

  }

}
