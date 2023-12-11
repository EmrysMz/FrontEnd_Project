import {Component, OnInit} from '@angular/core';
import { UserAuthService } from './user-auth.service';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  userSelected: boolean = false;
  title = 'TP3';

  constructor(public userAuthService: UserAuthService,private titleService: Title) {
    console.log('AppComponent.constructor()')
  }

  ngOnInit(): void {
    this.titleService.setTitle('Cerebralize');

    console.log('AppComponent.OnInit()')
  }

  onUserSelected(): void {
    this.userSelected = true;
  }
}
