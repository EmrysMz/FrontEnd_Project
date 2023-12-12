import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-learning-fact',
  templateUrl: './delete-learning-fact.component.html',
  styleUrls: ['./delete-learning-fact.component.css']
})
export class DeleteLearningFactComponent implements OnInit {
  deleteFormData: any = {};
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

  deleteFact() {
    // Utilisez la nouvelle URL pour la suppression du fact
    this.http.delete(`http://localhost:3000/api/package/${this.deleteFormData.learningpackageid}/fact/${this.deleteFormData.learningfactid}`)
        .subscribe(response => {
          console.log('Learning Fact deleted successfully', response);
          // Vous pouvez traiter la réponse ou naviguer vers une autre page après la suppression réussie
          this.resetForm();
        });
  }



  resetForm() {
    this.deleteFormData = {}; // Réinitialiser l'objet du formulaire
  }
}
