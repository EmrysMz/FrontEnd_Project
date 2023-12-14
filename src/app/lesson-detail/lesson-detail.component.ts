// lesson-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lesson: any;
  showAnswer: boolean = false;
  userId: string | null;

  constructor(
    private userAuthService: UserAuthService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.userId = userAuthService.getUserId();
  }

  ngOnInit() {
    const lessonId = this.route.snapshot.paramMap.get('lessonId');

    if (lessonId !== null) {
      this.http.get<any>(`http://localhost:3000/api/fact/${lessonId}`)
        .subscribe(data => {
          this.lesson = data[0];
        });
    } else {
      console.error('Lesson ID is null or undefined.');
    }
  }

  toggleAnswerVisibility() {
    this.showAnswer = true;
  }

  addToDeck() {
    const payload = {
      userid: this.userId,
      learningfactid: this.lesson.learningfactid,
      timesreviewed: 0,
      confidencelevel: 5, // Default value, you can change it as needed
      lastrevieweddate: new Date(),
      startdate: new Date(),
      enddate: null,
      finished: false
    };

    this.http.post<any>(`http://localhost:3000/api/user-learning-fact/${payload.userid}`, payload)
      .subscribe(response => {
        console.log('Add to deck response:', response);

        // After adding to UserLearningFactTable, add to UserPackageLearningTable
        this.http.post<any>(`http://localhost:3000/api/user-learning-package/${payload.userid}/${this.lesson.learningpackageid}`, {})
          .subscribe(packageResponse => {
            console.log('Add to user package response:', packageResponse);
            // Handle the response as needed
          });
      });
  }
}
