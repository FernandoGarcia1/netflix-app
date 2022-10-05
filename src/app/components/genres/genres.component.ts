import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesRequestService } from 'src/app/service/movies-request.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  private idGenre: string='';
  public movies : any;
  constructor(public activatedRoute: ActivatedRoute, public moviesRequest : MoviesRequestService) { }  

  ngOnInit(): void {    
    this.idGenre=this.activatedRoute?.snapshot.params['genres']
    console.log('Genres',this.getMoviesByGenre(this.idGenre));
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        
        this.getMoviesByGenre(params['genres'])
      }
    );
  }
  

  getMoviesByGenre(id: string){
    this.moviesRequest.getMoviesByGenre(id).subscribe({
      next:(resp : any) =>{
        this.movies = resp.results;      
        console.log('Genre', this.movies)          
      }
    })
  }


}
