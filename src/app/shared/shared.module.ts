import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovieCardComponent } from './components/movie-card/movie-card.component';



@NgModule({
  declarations: [SearchInputComponent, MovieCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [SearchInputComponent, MovieCardComponent]
})
export class SharedModule { }
