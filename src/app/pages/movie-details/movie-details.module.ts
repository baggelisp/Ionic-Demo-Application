import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailsPageRoutingModule } from './movie-details-routing.module';

import { MovieDetailsPage } from './movie-details.page';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsApi } from './services/movie-details.api';
import { MovieDetailsService } from './services/movie-details.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MovieDetailsPage],
  providers: [
    MovieDetailsService,
    MovieDetailsApi
  ]
})
export class MovieDetailsPageModule {}
