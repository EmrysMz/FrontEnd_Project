// user-learning.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-user-learning',
  templateUrl: './user-learning.component.html',
  styleUrls: ['./user-learning.component.css']
})
export class UserLearningComponent implements OnInit {
  lesson: any;
  showAnswer: boolean = false;
  userId: string | null;
  confidenceLevels: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

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
      // Update lastrevieweddate when the component is initialized
      const currentDate = new Date().toISOString(); // Format date as 'YYYY-MM-DDTHH:mm:ss.sssZ'

      const updatePayload = { lastrevieweddate: currentDate };

      // Make API call to update lastrevieweddate
      this.http.put<any>(`http://localhost:3000/api/user-learning-fact/update-date/${this.userId}/${lessonId}`, updatePayload)
          .subscribe(data => {
            console.log('Update lastrevieweddate response:', data);
          });

      // Fetch the lesson data after updating lastrevieweddate
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

  completeLearning() {
    if (this.userId && this.lesson && this.lesson.learningfactid) {
      const endpoint = `http://localhost:3000/api/user-learning-fact/finish/${this.userId}/${this.lesson.learningfactid}`;
      this.http.put(endpoint, {})
          .subscribe(response => {
            console.log('Complete learning response:', response);
          });
    } else {
      console.error('User ID or Lesson ID is missing.');
    }
  }

  studyAgain() {
    if (this.userId && this.lesson && this.lesson.learningfactid && this.lesson.confidencelevel) {
      const endpoint = `http://localhost:3000/api/user-learning-fact/confidence/${this.userId}/${this.lesson.learningfactid}`;
      const payload = {
        confidencelevel: this.lesson.confidencelevel
      };

      this.http.put(endpoint, payload)
          .subscribe(response => {
            console.log('Study again response:', response);
          });
    } else {
      console.error('User ID, Lesson ID, or Confidence Level is missing.');
    }
  }
}
