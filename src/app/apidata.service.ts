import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  constructor( public _HttpClient:HttpClient) {
  }
   getMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=6580abba53ed966f714ada445dd5df05&language=en-US&external_source=imdb_id`) 
   };
   getTv():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=6580abba53ed966f714ada445dd5df05&language=en-US&page=1`) 
   };
   getPopule():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=6580abba53ed966f714ada445dd5df05&language=en-US`) 
   };
   baseUrl="https://image.tmdb.org/t/p/w500";

   getDetails(movie_id){
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=6580abba53ed966f714ada445dd5df05&language=en-US`)
   }
}
