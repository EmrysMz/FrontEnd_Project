import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserSettingsService } from "../user-settings.service";
import {AppComponent} from "../app.component";
import { UserAuthService } from '../user-auth.service';

@Component({
    selector: 'app-connection-page',
    templateUrl: './connection-page.component.html',
    styleUrls: ['./connection-page.component.css']
})
export class ConnectionPageComponent implements OnInit {
    @ViewChild(AppComponent) appComponent?: AppComponent;

    users: any[] = [];
    selectedUser: any = null;

    constructor(private router: Router, private userSettingsService: UserSettingsService, private http: HttpClient, private userAuthService : UserAuthService) {}

    ngOnInit(): void {
        this.fetchUsers();
    }

    fetchUsers(): void {
        this.http.get<any[]>('http://localhost:3000/api/users').subscribe(data => {
            this.users = [{ userid: 100, name: 'Administrator' }].concat(data);
            console.log(data);

            console.log(this.users);
        });
    }

    selectUser(): void {
        if (this.selectedUser !== null) {
            const selectedUserId = this.selectedUser.userid;
            const selectedUserName = this.selectedUser.name;
            console.log("ID de l'utilisateur sélectionné :", selectedUserId);


        }
    }

    startApp(): void {
        console.log("clické");
        if (this.selectedUser !== null) {
            const selectedUserId = this.selectedUser.userid;
            const selectedUserName = this.selectedUser.name;
            console.log(selectedUserId);
            this.userAuthService.setUserId(selectedUserId);
            this.userAuthService.setUserName(selectedUserName)
            console.log("get id conn",this.userAuthService.getUserId());
            console.log("get name conn",this.userAuthService.getUserName());
            console.log("button clicked");
            // Naviguer vers la suite de l'application en passant l'ID de l'utilisateur sélectionné
            this.router.navigate(["/user-page"]);
        }
    }
}
