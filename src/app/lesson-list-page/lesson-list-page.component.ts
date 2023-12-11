import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from "../user-settings.service";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})
export class LessonListPageComponent implements OnInit {
  lessons!: any[];
  userSelected: boolean = false;
  constructor(private router: Router, private userSettingsService: UserSettingsService, private http: HttpClient) {
      this.userSelected = this.userSettingsService.isUserSelected();
    console.log("get lastLessonID:", userSettingsService.lastLessonId);
  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/package')
        .subscribe(data => {
          console.log(data)
          this.lessons = data;
        });
  }
}
