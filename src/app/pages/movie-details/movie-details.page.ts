import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MovieDetailsService } from './services/movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movieId: string;

  constructor(private activatedRoute: ActivatedRoute, 
    private alertCtrl: AlertController,
    public service: MovieDetailsService) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getMovie(parseInt(this.movieId));
    this.service.movie$.subscribe(s => console.log(s))
  }

  async addToFavs(movieId: number, movieName: string){
    console.log(movieId)
    const alert = await this.alertCtrl.create({
      cssClass: 'ion-text-start',
      header: 'Added!',
      message:  'You added movie ' + movieName + ' to your favorites!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
