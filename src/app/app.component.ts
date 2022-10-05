import { Component } from '@angular/core';
import { MoviesRequestService } from './service/movies-request.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix';
  opened = false;
  
}

