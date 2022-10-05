import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesRequestService {

  private _urlBase = 'https://api.themoviedb.org/3/';
  private _apiKey = 'e6b68961d381f9cdef9cf9e39d0fc3ad'
  constructor(public http: HttpClient) { }

  getNewMovies(){
    return this.http.get(
      `${this._urlBase}movie/popular?api_key=${this._apiKey}&language=es&page=1`
    ).pipe(
      map((movies : any) => {        
        return movies
      })
    )
  }

  getPopularSeries(){
    return this.http.get(
      `${this._urlBase}tv/popular?api_key=${this._apiKey}&language=es&page=1`
    ).pipe(
      map((movies : any) => {        
        return movies
      })  
    )  
  }

  getPopularMovies(){
    return this.http.get(
      `${this._urlBase}movie/top_rated?api_key=${this._apiKey}&language=es&page=1`
    ).pipe(
      map((movies : any) => {        
        return movies
      })  
    )
  }

  getGeneres(){    
    return this.http.get(
      `${this._urlBase}genre/movie/list?api_key=${this._apiKey}`
    ).pipe(
      map((movies : any) => {        
        return movies
      })  
    )
  }
}
