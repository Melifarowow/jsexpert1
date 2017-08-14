import { Component } from '@angular/core';
import { SSOService } from './users/sso.service';
import { User } from './users/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User
  constructor(private ssoService: SSOService) {    
    this.ssoService.CurrentUserChanged$.subscribe((user: User | null) => {
      this.user = user
    })
  }
  title = 'Каталог фильмов';
  links = [
    { path: '/', icon: 'home', label: 'Главная'},
    { path: '/popular', icon: 'list', label: 'Популярные фильмы'},
    { path: '/favorites', icon: 'star', label: 'Избранные'}
  ];

  signOut() {
    this.ssoService.signOut()
  }

}
