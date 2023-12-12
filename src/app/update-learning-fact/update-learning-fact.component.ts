// update-learning-fact.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-learning-fact',
  templateUrl: './update-learning-fact.component.html',
  styleUrls: ['./update-learning-fact.component.css']
})
export class UpdateLearningFactComponent implements OnInit {
  updateFormData: any = {};
  packages: any[] = [];
  facts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPackages();
  }

  fetchPackages() {
    this.http.get<any[]>('http://localhost:3000/api/package')
        .subscribe(data => {
          this.packages = data;
        });
  }

  fetchFactsByPackageId(packageId: number) {
    this.http.get<any[]>(`http://localhost:3000/api/package/${packageId}/fact`)
        .subscribe(data => {
          this.facts = data;
        });
  }

  updateFact() {
    // Utilisez la nouvelle URL pour la mise à jour du fact
    this.http.put(`http://localhost:3000/api/package/${this.updateFormData.learningpackageid}/fact`, this.updateFormData)
        .subscribe(response => {
          console.log('Learning Fact updated successfully', response);
          this.resetForm();
          // Vous pouvez traiter la réponse ou naviguer vers une autre page après la mise à jour réussie
        });
  }

  resetForm() {
    this.updateFormData = {}; // Réinitialiser l'objet du formulaire
  }

}
