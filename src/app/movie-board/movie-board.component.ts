import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-board',
  templateUrl: './movie-board.component.html',
  styleUrls: ['./movie-board.component.css']
})
export class MovieBoardComponent implements OnInit {

  movies$: Object;

  constructor(private data: MovieDataService) { }

  //OnInit - Lifecycle Hooks - Executed when components Loads
  ngOnInit() {
    this.data.getMovies().subscribe(
      data => this.movies$ = data
    )
  }

}
