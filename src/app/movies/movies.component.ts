import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies;
  ele;
  baseImgUrl;
  defaultImg;
  defaultTitle;
  defaultRate;
  defaultOverview;
  sectionImg;
  currentTitle;
  currentRate;
  currentOverview;
  constructor(public _ApidataService: ApidataService) {
    this._ApidataService.getMovies().subscribe((data) => {
      this.movies = data.results.slice(0, 12);
      this.baseImgUrl = this._ApidataService.baseUrl;
      this.defaultImg = this.baseImgUrl + this.movies[(this.movies.length / 2) - 1].poster_path;
      this.defaultTitle = this.movies[(this.movies.length / 2) - 1].title || this.movies[(this.movies.length / 2) - 1].name;
      this.defaultRate = Math.floor(this.movies[(this.movies.length / 2) - 1].vote_average);
      this.defaultOverview = this.movies[(this.movies.length / 2) - 1].overview;
    })
  };
  show(movie, index) {
    this.sectionImg = this.baseImgUrl + movie.poster_path;
    this.currentTitle = movie.name == undefined ? movie.title : movie.name;
    this.currentRate = Math.floor(movie.vote_average);
    this.currentOverview = movie.overview;
    let classlist = document.getElementsByClassName('item');
    for (let i = 0; i < classlist.length; i++) {
      classlist[i].classList.remove('is_active');
    }
    classlist[index].classList.add('is_active');
  }

  ngOnInit(): void {

  };

}
