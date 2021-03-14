import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  baseImgUrl;
  categories;
  category;
  constructor( public _ApidataService:ApidataService) {
    this._ApidataService.getPopule().subscribe((data)=>{
      this.categories = data.results;
      this.baseImgUrl=this._ApidataService.baseUrl;



      console.log(this.categories);
      console.log(this.categories[0]);




      // this.baseImgUrl=this._ApidataService.baseUrl;
      // this.defaultImg = this.baseImgUrl+ this.people[(this.people.length/2)-1].poster_path;
      // this.defaultTitle = this.people[(this.people.length/2)-1].title || this.people[(this.people.length/2)-1].name;
      // this.defaultRate = this.people[(this.people.length/2)-1].vote_average;
      // this.defaultOverview = this.people[(this.people.length/2)-1].overview;
      // console.log(this.people);
      
    })
   };
  show(index){
    let classlist = document.getElementsByClassName('item');
    // for(let i=0;i<classlist.length;i++){
    //   console.log(classlist);
      
    //   classlist[i].classList.remove('is_active');
    // }
    classlist[index].classList.add('is_active');
  }

  ngOnInit(): void {
  }

}
