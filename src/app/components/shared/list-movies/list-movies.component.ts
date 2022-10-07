import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public numberColumns: number = 6;

  @Input() movies: any;
  constructor(public dialog: MatDialog, public breakpointObserver: BreakpointObserver) { }
  ngOnInit(): void {
    this.mediaQuery();
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
  public mediaQuery() {


      this.breakpointObserver
      .observe(Breakpoints.Small)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE CELULAR
          this.numberColumns = 2;
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Tablet)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE Tablet
          this.numberColumns = 4;
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Web)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //AQUI SERA TRUE SOLO SI ES RESOLUCION PARA WEB
          this.numberColumns = 5;
        }
      });
  }

  
  onScroll(event: any){
    console.log(event);
  }

}


