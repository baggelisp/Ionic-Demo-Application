import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import { FavoritesService } from './services/favorites.service';
import { FavoritesApi } from './services/favorites.api';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [FavoritesPage],
  providers: [FavoritesApi, FavoritesService]
})
export class FavoritesPageModule {}
