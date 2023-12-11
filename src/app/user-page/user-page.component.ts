import { Component } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  userId: string | null;
  userName : string | null;

  constructor(private userAuthService: UserAuthService) {
    this.userId = userAuthService.getUserId();
    this.userName = userAuthService.getUserName();
  }
}
