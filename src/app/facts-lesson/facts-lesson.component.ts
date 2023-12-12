// facts-lesson.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facts-lesson',
  templateUrl: './facts-lesson.component.html',
  styleUrls: ['./facts-lesson.component.css']
})
export class FactsLessonComponent implements OnInit {
  facts!: any[];
  packageId!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    // Extraire l'identifiant du package à partir de l'URL
    const packageIdParam = this.route.snapshot.paramMap.get('packageId');

    // Vérifier si packageIdParam est non nul avant de le convertir en nombre
    if (packageIdParam !== null) {
      this.packageId = +packageIdParam;

      // Utiliser l'identifiant du package dans la requête GET pour les learning facts associés
      this.http.get<any[]>(`http://localhost:3000/api/package/${this.packageId}/fact`)
        .subscribe(data => {
          console.log(data);
          this.facts = data;
        });
    } else {
      console.error('Package ID is null or undefined.');
    }
  }
}
