import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './Services/Api.service';
import { Movie } from './Models/Movie';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from "./Components/MovieCard/MovieCard.component";
import { MoviedetailsComponent } from "./View/moviedetails/moviedetails.component";
import { FormsComponent } from './View/pages/forms/forms.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    MovieCardComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public movies! : Movie[];
  title = 'uceflix';
  constructor(private apiService : ApiService){

  }

  getPelis(){
    this.apiService.GetMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }

  ngOnInit(){
    this.getPelis();

  }
}
