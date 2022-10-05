import { Component, OnInit } from '@angular/core';
import { MoviesRequestService } from 'src/app/service/movies-request.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public recentMovies:any;
  public popularSeries:any;
  public popularMovies:any;

  constructor(private moviesRequest : MoviesRequestService){
    
  }
  ngOnInit(): void {
    this.getNewMovies();
    this.getPopularSeries();
    this.getPopularMovies();
  }

  getNewMovies(){
    this.moviesRequest.getNewMovies ().subscribe({
      next:(resp : any) =>{
        this.recentMovies = resp.results;        
        this.recentMovies = this.recentMovies.slice(0, 5)       
      }
    })
  }
  getPopularSeries(){
    this.moviesRequest.getPopularSeries().subscribe({
      next:(resp : any) =>{
        this.popularSeries = resp.results;        
        this.popularSeries = this.popularSeries.slice(0, 5)       
      }
    })
  }

  getPopularMovies(){
    this.moviesRequest.getPopularMovies().subscribe({
      next:(resp : any) =>{
        this.popularMovies = resp.results;        
        this.popularMovies = this.popularMovies.slice(0, 5)       
      }
    })
  }
}
