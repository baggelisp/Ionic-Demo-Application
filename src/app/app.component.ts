import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Movies', url: '/movies-list', icon: 'videocam' },
    { title: 'Favorites', url: '/favorites', icon: 'bookmark' },
    { title: 'movie-details', url: '/movie-details', icon: 'delete' }

    
  ];
  constructor() {}
}
