import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesListPageRoutingModule } from './movies-list-routing.module';

import { MoviesListPage } from './movies-list.page';
import { MoviesListApi } from './services/movies-list.api';
import { MoviesListService } from './services/movies-list.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesListPageRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [MoviesListPage],
  providers: [
    MoviesListApi,
    MoviesListService

  ]
})
export class MoviesListPageModule {}
