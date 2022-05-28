import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/storage.service';
import { MovieDetails } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';


@Injectable()
export class FavoritesApi {

  favorites = [];

  constructor(private storage: StorageService, private http: HttpClient) { }

  getMovieDetails(id: string): Observable<MovieDetails> {
		return this.http.get<any>(`${environment.apiUrl}/3/movie/${id}?api_key=${environment.apiKey}`);
	}

  saveMovieToFavorites(movieId: string) {
    this.storage.saveMovieToFavorites(movieId);
  }

  removeFromFavorites(movieId: string) {
    this.storage.removeFromFavorites(movieId);
  }

  getFavorites() {
    return this.storage.getFavorites();
  }

  
}
