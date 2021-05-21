import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../film';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        //Authorization: 'my-auth-token'
    })
};


@Injectable({
    providedIn: 'root'
})
export class FilmService {

    url = "http://localhost:8080/api/films"

    constructor(private http: HttpClient) { }

    findFilmsByCategory(category: String): Observable<Film[]> {
        category.trim();
        const options = category ?
            {
                params: new HttpParams().set('category', category.trim()),
                headers: httpOptions.headers
            }
            :
            {};
        return this.http.get<Film[]>(this.url, options)
    }

    findFilmById(filmId: number): Observable<Film> {
        const url = `${this.url}/${filmId}`
        return this.http.get<Film>(url, httpOptions);
    }



}