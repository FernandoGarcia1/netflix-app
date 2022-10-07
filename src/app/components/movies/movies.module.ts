import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { GenresComponent } from './genres/genres.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    declarations: [
        PrincipalComponent,
        GenresComponent,
    ],
    imports: [
        SharedModule,
        MaterialModule
    ],
    exports: [
        PrincipalComponent,
        GenresComponent,
    ]
  })
export class MoviesModule { }