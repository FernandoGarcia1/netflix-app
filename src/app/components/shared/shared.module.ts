import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { ListMoviesHorizontalComponent } from './list-movies-horizontal/list-movies-horizontal.component';

import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        DialogComponent, 
        ListMoviesComponent,
        SidenavComponent,
        ListMoviesHorizontalComponent
        
    ],
    imports: [
        MaterialModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        DialogComponent, 
        ListMoviesComponent,
        SidenavComponent,
        ListMoviesHorizontalComponent
        
    ]
  })
export class SharedModule { }