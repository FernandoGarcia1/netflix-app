import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesRequestService } from 'src/app/service/movies-request.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  
  private idGenre: string='';
  public movies : any[]=[];
  public currentPage = 1;
  private lastGenre : string ='';
  private actualGenre: string ='' ;
   
  constructor(public activatedRoute: ActivatedRoute, public moviesRequest : MoviesRequestService) { }  

  ngOnInit(): void {    
    
    this.idGenre=this.activatedRoute?.snapshot.params['genres']    
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.lastGenre = this.actualGenre;        
        this.idGenre = params['genres'];
        if(this.lastGenre !== this.idGenre){
          this.currentPage =1;
          this.getMoviesByGenre();
          
        }
        
        
      }
    );
  }
 
  getMoviesByGenre(){
    this.moviesRequest.getMoviesByGenre(this.idGenre, this.currentPage).subscribe({
      next:(resp : any) =>{
        //this.movies=this.movies.concat( resp.results);                       
        this.movies= resp.results;                       
      }
    })
  }
  
  onScroll(event:any){        
    if ((event.target.offsetHeight + event.target.scrollTop) >= (event.target.scrollHeight-4)) {
      console.log('Final?')
        this.currentPage +=1;
        this.moviesRequest.getMoviesByGenre(this.idGenre, this.currentPage).subscribe({
          next:(resp : any) =>{
            //this.movies=this.movies.concat( resp.results);                       
            this.movies= this.movies.concat(resp.results);                       
          }
        })
    }
  }


}
