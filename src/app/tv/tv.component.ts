import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tv;
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
  constructor( public _ApidataService:ApidataService) {
    this._ApidataService.getTv().subscribe((data)=>{
      this.tv = data.results.slice(0,12);
      this.baseImgUrl=this._ApidataService.baseUrl;
      this.defaultImg = this.baseImgUrl+ this.tv[(this.tv.length/2)-1].poster_path;
      this.defaultTitle = this.tv[(this.tv.length/2)-1].title || this.tv[(this.tv.length/2)-1].name;
      this.defaultRate = Math.floor(this.tv[(this.tv.length/2)-1].vote_average);
      this.defaultOverview = this.tv[(this.tv.length/2)-1].overview;
      console.log(this.defaultRate);
      console.log(this.currentRate);
    })
   };
  show(movie,index){
    this.sectionImg= this.baseImgUrl + movie.poster_path;
    this.currentTitle =  movie.name == undefined?  movie.title : movie.name;
    this.currentRate = Math.floor(movie.vote_average);
    this.currentOverview = movie.overview;
    console.log(this.currentRate);
    let classlist = document.getElementsByClassName('item');
    for(let i=0;i<classlist.length;i++){
      classlist[i].classList.remove('is_active');
    }
    classlist[index].classList.add('is_active');
  }

  ngOnInit(): void {
  }

}
