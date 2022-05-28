import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { FavoritesService } from '../favorites/services/favorites.service';
import { MovieDetailsService } from './services/movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movieId: string;
  isOnFavotites = false;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, 
    private alertCtrl: AlertController,
    public service: MovieDetailsService,
    public favService: FavoritesService) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getMovie(parseInt(this.movieId));

    this.subscription = this.service.movie$.subscribe( movie => {
      if (!movie.id ) return;
      this.isOnFavotites = this.favService.isMovieInFavorites(movie.id.toString())
    })
  }

  async addToFavs(movieId: number, movieName: string){
    let title = 'Added!';
    let message = 'You added movie ' + movieName + ' to your favorites!';
    this.isOnFavotites = true;
    if (this.favService.isMovieInFavorites(movieId.toString())) {
      this.favService.removeMovieToCollection(movieId.toString());
      message = 'You removed movie ' + movieName + ' to your favorites!';
      title = 'Removed!'
      this.isOnFavotites = false;
    } else {
      this.favService.saveMovieToCollection(movieId.toString())
    }

    const alert = await this.alertCtrl.create({
      cssClass: 'ion-text-start',
      header: title,
      message:  message,
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
