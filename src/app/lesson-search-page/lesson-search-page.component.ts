import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-search-page',
  templateUrl: './lesson-search-page.component.html',
  styleUrls: ['./lesson-search-page.component.css']
})
export class LessonSearchPageComponent implements OnInit, OnDestroy{
  constructor() {
    console.log("LessonSearchPageComponent.constructor()");
  }

  ngOnInit() {
    console.log("LessonSearchPageComponent.ngOnInit()");
  }

  ngOnDestroy() {
    console.log("LessonSearchPageComponent.ngOnDestroy()");
  }

}
