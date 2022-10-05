import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public movie: any;
  public selectMovie: boolean  = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.movie = this.data;
    console.log(this.movie);
    let selection;
    if (this.movie['original_title'] !== undefined) { //Es una pelicula
      selection=localStorage.getItem(this.movie.original_title); 
    } else if (this.movie['original_name'] !== undefined) { // Es una serie
      selection=localStorage.getItem(this.movie.original_name); 
    }
    console.log('Aqui', selection);
    if(selection === 'true'){
      this.selectMovie = true;
      console.log('if-entra')
    }
    
  }
  favoriteClick() {
    console.log('click')
    this.selectMovie = !this.selectMovie;

    if (this.selectMovie) { //Si ha seleccionado la pelicula
      if (this.movie['original_title'] !== undefined) { //Es una pelicula
        localStorage.setItem(this.movie.original_title, "true");
      } else if (this.movie['original_name'] !== undefined) { // Es una serie
        localStorage.setItem(this.movie.original_name, "true");
      }
    } else {
      if (this.movie['original_title'] !== undefined) { //Es una pelicula
        localStorage.setItem(this.movie.original_title, "false");
      } else if (this.movie['original_name'] !== undefined) { // Es una serie
        localStorage.setItem(this.movie.original_name, "false");
      }
    }

  }

  isSelected(){
    console.log('isSelected', this.selectMovie)
    return this.selectMovie;
  }


}
