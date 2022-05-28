import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie; 
  @Output() onClickMovieCard = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {}

  onClickCard(){
    this.onClickMovieCard.emit('click');
  }

}
