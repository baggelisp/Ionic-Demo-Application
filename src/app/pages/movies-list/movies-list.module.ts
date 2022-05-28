import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesListPageRoutingModule } from './movies-list-routing.module';

import { MoviesListPage } from './movies-list.page';
import { MoviesListApi } from './services/movies-list.api';
import { MoviesListService } from './services/movies-list.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesListPageRoutingModule,
    SharedModule
  ],
  declarations: [MoviesListPage, MovieCardComponent],
  providers: [
    MoviesListApi,
    MoviesListService

  ]
})
export class MoviesListPageModule {}
