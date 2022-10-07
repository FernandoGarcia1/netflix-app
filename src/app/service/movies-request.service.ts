import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiEndpoints } from '../components/utils/api.endpoints.class';

@Injectable({
  providedIn: 'root'
})
export class MoviesRequestService {

  
  constructor(public http: HttpClient) { }

  getNewMovies(){
    return this.http.get(environment.URL_BASE+ApiEndpoints.NEW_MOVIES)
    .pipe(
      map((movies : any) => {        
        return movies
      })
    )
  }

  getPopularSeries(){
    return this.http.get(environment.URL_BASE+ApiEndpoints.POPULAR_SERIES).pipe(
      map((movies : any) => {        
        return movies
      })  
    )  
  }

  getPopularMovies(){
    return this.http.get(environment.URL_BASE+ApiEndpoints.POPULAR_MOVIES).pipe(
      map((movies : any) => {        
        return movies
      })  
    )
  }

  getGeneres(){    
    return this.http.get(environment.URL_BASE+ApiEndpoints.GET_GENRES).pipe(
      map((movies : any) => {        
        return movies
      })  
    )
  }

  getMoviesByGenre(id: string){    
    return this.http.get(environment.URL_BASE+ApiEndpoints.getMoviesByGenre(id))
    .pipe(
      map((movies : any) => {        
        return movies
      })  
    )
  }
}
