import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list-movies-horizontal',
  templateUrl: './list-movies-horizontal.component.html',
  styleUrls: ['./list-movies-horizontal.component.scss']
})
export class ListMoviesHorizontalComponent implements OnInit {

  @Input() movies: any;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    
  }
  
  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80%',
      height: '90%',      
      data: this.movies[index],
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
