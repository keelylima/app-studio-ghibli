import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl = 'https://ghibliapi.herokuapp.com/films';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getMovie(id: string): Observable<any[]>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any[]>(url)
  }
}
