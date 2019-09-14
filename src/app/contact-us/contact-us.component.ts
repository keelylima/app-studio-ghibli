import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movies';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  //array com todos os movies, normal
  movies: Array<Movie>;
  
  //array com os movies com atributo selected true
  selectedMovie: Array<Movie> = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.getMovies();

  }

  getMovies() {
    this.movieService.getMovies().subscribe(
      movies => {
        this.movies = movies;
      }
    )
  }

  //toggle
  onSelect(id: string) {
    const movieSelected: Movie = this.movies.filter((movie) => movie.id === id)[0]; //[0]quero um movie dentro de movies/array grandão
    movieSelected.selected = !movieSelected.selected;
    if(movieSelected.selected) {
      this.selectedMovie.push(movieSelected);
    } else {
      let indexMovieUnselected: number;
      this.selectedMovie.filter((movie, index) => {
        if(movie.id === id){
          indexMovieUnselected = index;
        }
      });
      this.selectedMovie.splice(indexMovieUnselected);
    }
  }

  //adicionar a classe, selected === true
  selected(id: string) {
    //comparando se o ID que eu recebi realmente está na lista (selectedMovie)
    const selected = this.selectedMovie.filter((movie) => movie.id === id);
    return selected.length > 0 ? selected[0].selected : false;
  }

  showMovie(id: string) {
    //comparando se o ID que eu recebi realmente está na lista (selectedMovie), quantidade é maior que 2 
    let s = this.selectedMovie.filter((movie) => movie.id === id);
    return s.length > 0 && this.selectedMovie.length >= 2 ? true : false;
  }
}
