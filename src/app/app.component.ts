<<<<<<< HEAD
import { Component } from '@angular/core';
import { SSOService } from './users/sso.service';
import { User } from './users/user.model';
import { LanguageService } from './language.service'
=======
import { Component} from '@angular/core';
>>>>>>> master

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  links: any
  constructor(
    public ssoService: SSOService,
    private ls: LanguageService
  ) {
    this.ls.getMainMenu().subscribe(links => this.links = links)
  }

  signOut() {
    this.ssoService.signOut()
  }

=======
>>>>>>> master
}
