import { Component, OnInit } from '@angular/core';
import { MoviesRequestService } from 'src/app/service/movies-request.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public genres: any;
  constructor(private moviesRequest : MoviesRequestService){
    
   }

  ngOnInit(): void {
    this.moviesRequest.getGeneres().subscribe(
      data => {
        console.log(data['genres']);
        this.genres = data['genres'];
      }
    )
  }
  toLowerCase(genre: string) {
    return this.genres.toLowerCase
  }

}
