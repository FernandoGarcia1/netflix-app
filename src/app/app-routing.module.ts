import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './components/movies/genres/genres.component';
import { PrincipalComponent } from './components/movies/principal/principal.component';

const routes: Routes = [
  {
    path : '',
    component : PrincipalComponent,
    pathMatch : 'full'
  },
  {
    path : 'genre/:genres',
    component : GenresComponent,    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
