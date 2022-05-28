import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/folder/Inbox', icon: 'log-in' },
    { title: 'Movies', url: '/folder/Favorites', icon: 'videocam' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'bookmark' }
    
  ];
  constructor() {}
}
