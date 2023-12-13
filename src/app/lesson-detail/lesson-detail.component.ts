// lesson-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lesson: any;
  showAnswer: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    // Extraire l'identifiant de la leçon à partir de l'URL
    const lessonId = this.route.snapshot.paramMap.get('lessonId');

    // Vérifier si lessonId est non nul avant de le convertir en nombre
    if (lessonId !== null) {
      // Utiliser l'identifiant de la leçon dans la requête GET pour les détails de la leçon
      this.http.get<any>(`http://localhost:3000/api/fact/${lessonId}`)
        .subscribe(data => {
          console.log("data recue : ",data);
          this.lesson = data[0];
          console.log("lesson [0] ;",this.lesson);
        });
    } else {
      console.error('Lesson ID is null or undefined.');
    }
  }

  toggleAnswerVisibility() {
    this.showAnswer = true;
  }
}
