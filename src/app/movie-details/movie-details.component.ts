import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MoviesComponent } from '../movies/movies.component';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  date: number = 2000;
  movie: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
      });
  }

}
